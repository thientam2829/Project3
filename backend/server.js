var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var md5 = require("md5");
var mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { application } = require("express");
const CryptoJS = require("crypto-js");
const axios = require("axios");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

dotenv.config();

app.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});
// chỉnh port
app.listen(process.env.PORT || 4000, function () {
  console.log("Node app is running on port 4000");
});
module.exports = app;
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cosmocinema3",
});
dbConn.connect();

const validateToken = (req, res) => {
  const tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verified = jwt.verify(token, jwtSecretKey);
    if (!verified) return res.status(401).send(error);
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
};

// QuanLyRap

app.get("/api/QuanLyRap/LayThongTinHeThongRap", function (req, res) {
  dbConn.query(
    "SELECT * FROM hethongrap",
    [],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

app.get("/api/getBooking", function (req, res) {
  dbConn.query(
    "SELECT datve.*, lichchieuinsert.* FROM datve INNER JOIN lichchieuinsert ON datve.maLichChieu = lichchieuinsert.maLichChieu",
    [],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

app.get("/api/QuanLyRap/LayThongTinCumRapTheoHeThong", async (req, res) => {
  const final = [];
  dbConn.query(
    "SELECT * FROM cumrap JOIN hethongrapvacumrap ON cumrap.cid = hethongrapvacumrap.cumrap JOIN hethongrap ON hethongrap.hid = hethongrapvacumrap.hethongrap WHERE hethongrap.maHeThongRap = ?",
    [req.query.maHeThongRap],
    async (error, results, fields) => {
      if (error) throw error;
      for (const result of results) {
        let danhSachRap = [];
        danhSachRap = await new Promise((resolve, reject) => {
          dbConn.query(
            "SELECT * FROM danhsachrap WHERE maCumRap = ?",
            [result.cid],
            async (error, results1, fields) => {
              if (error) throw error;
              for (const result1 of results1) {
                danhSachRap.push({
                  maRap: result1.maRap,
                  tenRap: result1.tenRap,
                });
              }
              resolve(danhSachRap);
            }
          );
        });
        final.push({
          danhSachRap: danhSachRap,
          maCumRap: result.maCumRap,
          tenCumRap: result.tenCumRap,
          diaChi: result.diaChi,
        });
      }
      return res.send(final);
    }
  );
});

// QuanLyNguoiDung

// app.post("/api/QuanLyNguoiDung/DangKy", async (req, res) => {
//   const final = await new Promise((resolve, reject) => {
//     dbConn.query(
//       "INSERT INTO nguoidungvm SET ? ",
//       {
//         taiKhoan: req.body.taiKhoan,
//         matKhau: md5(req.body.matKhau),
//         email: req.body.email,
//         soDt: req.body.soDt,
//         maNhom: req.body.maNhom,
//         maLoaiNguoiDung: req.body.maLoaiNguoiDung,
//         hoTen: req.body.hoTen,
//       },
//       function (error, results, fields) {
//         if (error) throw error;
//         resolve(res.send("Success"));
//       }
//     );
//   });
//   return final;
// });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cosmocinemaldh@gmail.com",
    pass: "vfky iikc wsoz kaab",
  },
});
function sendVerificationEmail(email, otp) {
  // const mailOptions = {
  //   from: "Cosmo Cinemas VietNam <cosmocinemaldh@gmail.com>",
  //   to: email,
  //   subject: "Xác thực tài khoản",
  //   html: `
  //     <p style="font-size: 16px; color: #333; line-height: 1.6;">
  //       Xin chào.<br><br>

  //       Mã OTP của bạn là: <strong style="color:#0B1F3E ;">${otp}</strong><br><br>

  //       Trân trọng!<br>
  //       Cosmo Cinemas VietNam Support Team!
  //     </p>
  //     <img src="https://res.cloudinary.com/thientam2829/image/upload/v1702947907/imager/jeqkrwnwdhmmnvobdqrb.jpg"
  //     style="width: 20rem; border-radius: 5px;" alt="thumbnail">
  //   `,
  // };
  const mailOptions = {
    from: "Cosmo Cinemas VietNam <cosmocinemaldh@gmail.com>",
    to: email,
    subject: "Xác thực tài khoản",
    html: `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="padding: 20px; text-align: center;">
          <img src="https://res.cloudinary.com/thientam2829/image/upload/v1709083061/hl7eyjomgkfcz9muyoly.png" alt="Cosmo Cinemas Logo" style="width: 200px;">
        </div>
        <div style="background: #ffffff; padding: 20px; text-align: center;">
          <h2 style="color: #264b80;">Xin chào,</h2>
          <p style="font-size: 18px; color: #333; line-height: 1.6;">
            Mã OTP của bạn là:<br>
            <strong style="font-size: 25px; color: #264b80;">${otp}</strong>
          </p>
          <p style="font-size: 14px;">Có hiệu lực trong 10 phút. KHÔNG chia sẻ mã này với người khác, kể cả nhân viên Cosmo Cinemas.</p>
        </div>
        <div style="background: #264b80; padding: 20px; text-align: center;">
          <p style="font-size: 14px; color: #fff;">Trân trọng!<br>Cosmo Cinemas VietNam Support Team!</p>
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
// Hàm kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
const isEmailExist = async (email) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT COUNT(*) AS count FROM nguoidungvm WHERE email = ?",
      [email],
      function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].count > 0);
        }
      }
    );
  });
};
app.get("/api/check-email/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const emailExist = await isEmailExist(email); // Sử dụng await để đợi kết quả

    if (emailExist) {
      return res
        .status(400)
        .json({ message: "Email đã tồn tại, vui lòng nhập email khác." });
    } else {
      return res.status(200).json({ message: "Email có thể sử dụng." });
    }
  } catch (error) {
    console.error("Lỗi khi kiểm tra email:", error);
    return res.status(500).json({ message: "Lỗi server khi kiểm tra email." });
  }
});

app.post("/api/QuanLyNguoiDung/DangKy", async (req, res) => {
  const otp = generateOTP(); // Hàm để tạo mã OTP (ví dụ: Math.random())
  const hashedPassword = md5(req.body.matKhau);

  const final = await new Promise((resolve, reject) => {
    dbConn.query(
      "INSERT INTO nguoidungvm SET ? ",
      {
        taiKhoan: req.body.taiKhoan,
        matKhau: hashedPassword,
        email: req.body.email,
        soDt: req.body.soDt,
        maNhom: req.body.maNhom,
        maLoaiNguoiDung: req.body.maLoaiNguoiDung,
        hoTen: req.body.hoTen,
        otp: otp, // Lưu mã OTP vào cột otp
        otpCreatedAt: new Date(),
      },
      function (error, results, fields) {
        if (error) throw error;

        sendVerificationEmail(req.body.email, otp);

        resolve(res.send("Success"));
      }
    );
  });
  return final;
});
// app.post("/api/QuanLyNguoiDung/XacThucOTP", async (req, res) => {
//   const { email, otp } = req.body;

//   const user = await new Promise((resolve, reject) => {
//     dbConn.query(
//       "SELECT * FROM nguoidungvm WHERE email = ? AND otp = ?",
//       [email, otp],
//       function (error, results, fields) {
//         if (error) throw error;
//         resolve(results[0]);
//       }
//     );
//   });

//   if (user) {
//     // Cập nhật trạng thái xác thực và xoá mã OTP
//     dbConn.query(
//       "UPDATE nguoidungvm SET otp = NULL, daXacThuc = true WHERE id = ?",
//       [user.id],
//       function (error, results, fields) {
//         if (error) throw error;
//         res.send("Xác thực thành công");
//       }
//     );
//   } else {
//     res.status(400).send("Mã OTP không hợp lệ");
//   }
// });
app.post("/api/QuanLyNguoiDung/XacThucOTP", async (req, res) => {
  const { email, otp } = req.body;

  const user = await new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT *, TIMESTAMPDIFF(MINUTE, otpCreatedAt, NOW()) AS otpAge FROM nguoidungvm WHERE email = ? AND otp = ?",
      [email, otp],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0 && results[0].otpAge <= 10) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    );
  });

  if (user) {
    // Cập nhật trạng thái xác thực và xoá mã OTP
    dbConn.query(
      "UPDATE nguoidungvm SET otp = NULL, otpCreatedAt = NULL, daXacThuc = true WHERE id = ?",
      [user.id],
      function (error, results, fields) {
        if (error) throw error;
        res.send("Xác thực thành công");
      }
    );
  } else {
    res.status(400).send("Mã OTP không hợp lệ hoặc đã hết hạn");
  }
});

app.post("/api/QuanLyNguoiDung/DangNhap", function (req, res) {
  dbConn.query(
    "SELECT * FROM nguoidungvm WHERE taiKhoan=? AND matKhau=?",
    [req.body.taiKhoan, md5(req.body.matKhau)],
    function (error, results, fields) {
      if (error) {
        console.error("Error during login:", error);
        return res.status(500).send({ message: "Lỗi server khi đăng nhập." });
      }

      if (results.length > 0) {
        const user = JSON.parse(JSON.stringify(results[0]));
        if (!user.daXacThuc) {
          return res.status(403).send({
            message:
              "Tài khoản chưa được xác thực. Vui lòng xác thực tài khoản của bạn.",
          });
        }
        user["accessToken"] = jwt.sign(user, process.env.JWT_SECRET_KEY);
        return res.send(user);
      }

      return res
        .status(401)
        .send({ message: "Tài khoản hoặc mật khẩu không chính xác." });
    }
  );
});

app.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung", function (req, res) {
  dbConn.query(
    "SELECT * FROM nguoidungvm WHERE maNhom=?",
    [req.query.MaNhom],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

app.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", function (req, res) {
  validateToken(req, res);
  dbConn.query(
    "SELECT * FROM nguoidungvm WHERE taiKhoan = ?",
    [req.body.taiKhoan],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results[0]);
    }
  );
});

app.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", function (req, res) {
  validateToken(req, res);
  dbConn.query(
    "UPDATE nguoidungvm SET ? WHERE taiKhoan = ?",
    [
      {
        taiKhoan: req.body.taiKhoan,
        matKhau: md5(req.body.matKhau),
        email: req.body.email,
        soDt: req.body.soDt,
        maNhom: req.body.maNhom,
        maLoaiNguoiDung: req.body.maLoaiNguoiDung,
        hoTen: req.body.hoTen,
      },
      req.body.taiKhoan,
    ],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results[0]);
    }
  );
});

app.delete("/api/QuanLyNguoiDung/XoaNguoiDung", function (req, res) {
  dbConn.query(
    "DELETE FROM nguoidungvm WHERE taiKhoan=?",
    [req.query.TaiKhoan],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

// QuanLyRap

app.get("/api/QuanLyRap/LayThongTinHeThongRap", function (req, res) {
  dbConn.query(
    "SELECT * FROM hethongrap",
    [],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

app.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap", function (req, res) {
  const final = [];
  dbConn.query(
    "SELECT * FROM hethongrap",
    [],
    async (error, results, fields) => {
      if (error) throw error;
      for (const result of results) {
        let lstCumRap = [];
        lstCumRap = await new Promise((resolve, reject) => {
          dbConn.query(
            "SELECT * FROM hethongrap JOIN hethongrapvacumrap ON hethongrap.hid = hethongrapvacumrap.hethongrap JOIN cumrap ON cumrap.cid = hethongrapvacumrap.cumrap WHERE hethongrap.hid = ?",
            [result.hid],
            async (error, results0, fields) => {
              if (error) throw error;
              for (const result0 of results0) {
                let danhSachPhim = [];
                danhSachPhim = await new Promise((resolve, reject) => {
                  dbConn.query(
                    "SELECT * FROM phiminsert JOIN hethongrapvaphim ON phiminsert.maPhim = hethongrapvaphim.maPhim JOIN hethongrap ON hethongrap.hid = hethongrapvaphim.maHeThongRap JOIN phiminsertvalichchieuinsert ON phiminsert.maPhim = phiminsertvalichchieuinsert.phiminsert JOIN cumrapvalichchieuinsert ON phiminsertvalichchieuinsert.lichchieuinsert = cumrapvalichchieuinsert.lichchieuinsert WHERE hethongrap.hid = ? AND cumrapvalichchieuinsert.cumrap = ?",
                    [result0.hid, result0.cid],
                    async (error, results1, fields) => {
                      if (error) throw error;
                      for (const result1 of results1) {
                        let lstLichChieuTheoPhim = [];
                        lstLichChieuTheoPhim = await new Promise(
                          (resolve, reject) => {
                            dbConn.query(
                              "SELECT * FROM lichchieuinsert JOIN phiminsertvalichchieuinsert ON lichchieuinsert.maLichChieu = phiminsertvalichchieuinsert.lichchieuinsert JOIN phiminsert ON phiminsert.maPhim = phiminsertvalichchieuinsert.phiminsert WHERE phiminsertvalichchieuinsert.phiminsert = ?",
                              [result1.maPhim],
                              async (error, results2, fields) => {
                                if (error) throw error;
                                for (const result2 of results2) {
                                  lstLichChieuTheoPhim.push({
                                    maLichChieu: result2.maLichChieu,
                                    maRap: result2.maRap,
                                    tenRap: result2.tenRap,
                                    ngayChieuGioChieu:
                                      result2.ngayChieuGioChieu,
                                    giaVe: result2.giaVe,
                                  });
                                }
                                resolve(lstLichChieuTheoPhim);
                              }
                            );
                          }
                        );
                        const phim = {
                          lstLichChieuTheoPhim: lstLichChieuTheoPhim,
                          maPhim: result1.maPhim,
                          tenPhim: result1.tenPhim,
                          hinhAnh: result1.hinhAnh,
                        };
                        danhSachPhim.push(phim);
                      }
                      resolve(danhSachPhim);
                    }
                  );
                });
                const cumrap = {
                  danhSachPhim: danhSachPhim,
                  maCumRap: result0.maCumRap,
                  tenCumRap: result0.tenCumRap,
                  diaChi: result0.diaChi,
                };
                lstCumRap.push(cumrap);
              }
              resolve(lstCumRap);
            }
          );
        });
        final.push({
          lstCumRap: lstCumRap,
          maHeThongRap: result.maHeThongRap,
          tenHeThongRap: result.tenHeThongRap,
          logo: result.logo,
          mahom: "GP09",
        });
      }
      return res.send(final);
    }
  );
});

app.get("/api/QuanLyRap/LayThongTinLichChieuPhim", function (req, res) {
  dbConn.query(
    "SELECT * FROM phiminsert JOIN hethongrapvaphim ON phiminsert.maPhim = hethongrapvaphim.maPhim JOIN hethongrap ON hethongrap.hid = hethongrapvaphim.maHeThongRap WHERE phiminsert.maPhim = ?",
    [req.query.MaPhim],
    async (error, results0, fields) => {
      if (error) throw error;
      let heThongRapChieu = [];
      for (const result0 of results0) {
        heThongRapChieu = await new Promise((resolve, reject) => {
          dbConn.query(
            "SELECT * FROM hethongrap JOIN hethongrapvacumrap ON hethongrap.hid = hethongrapvacumrap.hethongrap JOIN cumrap ON cumrap.cid = hethongrapvacumrap.cumrap JOIN cumrapvalichchieuinsert ON cumrap.cid = cumrapvalichchieuinsert.cumrap JOIN phiminsertvalichchieuinsert ON cumrapvalichchieuinsert.lichchieuinsert = phiminsertvalichchieuinsert.lichchieuinsert WHERE hethongrap.hid = ? AND phiminsertvalichchieuinsert.phiminsert = ?",
            [result0.hid, result0.maPhim],
            async (error, results1, fields) => {
              if (error) throw error;
              let cumRapChieu = [];
              for (const result1 of results1) {
                cumRapChieu = await new Promise((resolve, reject) => {
                  dbConn.query(
                    "SELECT * FROM lichchieuinsert JOIN cumrapvalichchieuinsert ON lichchieuinsert.maLichChieu = cumrapvalichchieuinsert.lichchieuinsert JOIN cumrap ON cumrap.cid = cumrapvalichchieuinsert.cumrap JOIN phiminsertvalichchieuinsert ON cumrapvalichchieuinsert.lichchieuinsert = phiminsertvalichchieuinsert.lichchieuinsert WHERE cumrap.cid = ? AND phiminsertvalichchieuinsert.phiminsert = ?",
                    [result1.cumrap, result0.maPhim],
                    async (error, results2, fields) => {
                      if (error) throw error;
                      let lichChieuPhim = [];
                      for (const result2 of results2) {
                        lichChieuPhim.push({
                          maLichChieu: result2.maLichChieu,
                          maRap: result2.maRap,
                          tenRap: result2.tenRap,
                          ngayChieuGioChieu: result2.ngayChieuGioChieu,
                          giaVe: result2.giaVe,
                          thoiLuong: result2.thoiLuong,
                        });
                      }
                      const cumrap = {
                        lichChieuPhim: lichChieuPhim,
                        maCumRap: result1.maCumRap,
                        tenCumRap: result1.tenCumRap,
                        hinhAnh: null,
                      };
                      cumRapChieu.push(cumrap);
                      resolve(cumRapChieu);
                    }
                  );
                });
              }
              const hethong = {
                cumRapChieu: cumRapChieu,
                maHeThongRap: results1[0].maHeThongRap,
                tenHeThongRap: results1[0].tenHeThongRap,
                logo: results1[0].logo,
              };
              heThongRapChieu.push(hethong);
              resolve(heThongRapChieu);
            }
          );
        });
      }
      // Kiểm tra xem results0 có phần tử và maPhim không phải là undefined hay không
      if (
        results0.length > 0 &&
        results0[0] &&
        results0[0].maPhim !== undefined
      ) {
        const final = {
          heThongRapChieu: heThongRapChieu,
          maPhim: results0[0].maPhim,
          tenPhim: results0[0].tenPhim,
          biDanh: results0[0].biDanh,
          trailer: results0[0].trailer,
          hinhAnh: results0[0].hinhAnh,
          moTa: results0[0].moTa,
          daoDien: results0[0].daoDien,
          dienVien: results0[0].dienVien,
          quocGia: results0[0].quocGia,
          theLoai: results0[0].theLoai,
          dinhDang: results0[0].dinhDang,
          maNhom: "GP09",
          ngayKhoiChieu: results0[0].ngayKhoiChieu,
          danhGia: results0[0].danhGia,
        };
        return res.send(final);
      } else {
        console.error(
          "Không tìm thấy thông tin phim trong kết quả truy vấn hoặc maPhim không được định nghĩa."
        );
        // Xử lý trường hợp không tìm thấy dữ liệu hoặc lỗi khác
        return res
          .status(404)
          .send("Không tìm thấy thông tin phim hoặc có lỗi khác.");
      }
    }
  );
});

// QuanLyPhim

app.get("/api/QuanLyPhim/LayDanhSachPhim", function (req, res) {
  dbConn.query(
    "SELECT * FROM phiminsert",
    [],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

// app.get("/api/QuanLyPhim/LayThongTinPhim", function (req, res) {
//   dbConn.query(
//     "SELECT * FROM phiminsert JOIN phiminsertvalichchieuinsert ON phiminsert.maPhim = phiminsertvalichchieuinsert.phiminsert JOIN lichchieuinsert ON lichchieuinsert.maLichChieu = phiminsertvalichchieuinsert.lichchieuinsert WHERE phiminsert.maPhim = ?",
//     [req.query.MaPhim],
//     async (error, results0, fields) => {
//       if (error) throw error;
//       let lichchieu = [];
//       for (const result0 of results0) {
//         lichchieu = await new Promise((resolve, reject) => {
//           dbConn.query(
//             "SELECT * FROM lichchieuinsert JOIN cumrapvalichchieuinsert ON lichchieuinsert.maLichChieu = cumrapvalichchieuinsert.lichchieuinsert JOIN cumrap ON cumrap.id = cumrapvalichchieuinsert.cumrap WHERE lichchieuinsert.maLichChieu = ?",
//             [result0.maLichChieu],
//             async (error, results1, fields) => {
//               if (error) throw error;
//               let thongtinrap = {};
//               for (const result1 of results1) {
//                 thongtinrap = await new Promise((resolve, reject) => {
//                   dbConn.query(
//                     "SELECT * FROM danhsachrap JOIN cumrap ON danhsachrap.maCumRap = cumrap.id JOIN hethongrapvacumrap ON cumrap.id = hethongrapvacumrap.cumrap JOIN hethongrap ON hethongrap.id = hethongrapvacumrap.hethongrap WHERE danhsachrap.maRap = ?",
//                     [result1.maRap],
//                     async (error, results2, fields) => {
//                       if (error) throw error;
//                       thongtinrap = {
//                         maRap: parseInt(results2[0].maRap),
//                         tenRap: results2[0].tenRap,
//                         maCumRap: results2[0].maCumRap,
//                         tenCumRap: results2[0].tenCumRap,
//                         maHeThongRap: results2[0].maHeThongRap,
//                         tenHeThongRap: results2[0].tenHeThongRap,
//                       };
//                       resolve(thongtinrap);
//                     }
//                   );
//                 });
//                 const val = {
//                   thongTinRap: thongtinrap,
//                   maLichChieu: result1.maLichChieu,
//                   maRap: result1.maRap,
//                   maPhim: result0.maPhim,
//                   tenPhim: result0.tenPhim,
//                   ngayChieuGioChieu: result1.ngayChieuGioChieu,
//                   giaVe: result1.giaVe,
//                   thoiLuong: result1.thoiLuong,
//                 };
//                 lichchieu.push(val);
//               }
//               resolve(lichchieu);
//             }
//           );
//         });
//       }
//       const final = {
//         lichchieu: lichchieu,
//         maPhim: results0[0].maPhim,
//         tenPhim: results0[0].tenPhim,
//         biDanh: results0[0].biDanh,
//         trailer: results0[0].trailer,
//         hinhAnh: results0[0].hinhAnh,
//         moTa: results0[0].moTa,
//         maNhom: "GP09",
//         ngayKhoiChieu: results0[0].ngayKhoiChieu,
//         danhGia: results0[0].danhGia,
//       };
//       return res.send(final);
//     }
//   );
// });
app.get("/api/QuanLyPhim/LayThongTinPhim", async function (req, res) {
  try {
    const results0 = await queryAsync(
      "SELECT * FROM phiminsert JOIN phiminsertvalichchieuinsert ON phiminsert.maPhim = phiminsertvalichchieuinsert.phiminsert JOIN lichchieuinsert ON lichchieuinsert.maLichChieu = phiminsertvalichchieuinsert.lichchieuinsert WHERE phiminsert.maPhim = ?",
      [req.query.MaPhim]
    );

    if (results0.length === 0) {
      return res.status(404).send("Không tìm thấy thông tin phim.");
    }

    let lichchieu = [];

    for (const result0 of results0) {
      const results1 = await queryAsync(
        "SELECT * FROM lichchieuinsert JOIN cumrapvalichchieuinsert ON lichchieuinsert.maLichChieu = cumrapvalichchieuinsert.lichchieuinsert JOIN cumrap ON cumrap.id = cumrapvalichchieuinsert.cumrap WHERE lichchieuinsert.maLichChieu = ?",
        [result0.maLichChieu]
      );

      let thongtinrap = {};

      for (const result1 of results1) {
        const results2 = await queryAsync(
          "SELECT * FROM danhsachrap JOIN cumrap ON danhsachrap.maCumRap = cumrap.id JOIN hethongrapvacumrap ON cumrap.id = hethongrapvacumrap.cumrap JOIN hethongrap ON hethongrap.id = hethongrapvacumrap.hethongrap WHERE danhsachrap.maRap = ?",
          [result1.maRap]
        );

        thongtinrap = {
          maRap: parseInt(results2[0].maRap),
          tenRap: results2[0].tenRap,
          maCumRap: results2[0].maCumRap,
          tenCumRap: results2[0].tenCumRap,
          maHeThongRap: results2[0].maHeThongRap,
          tenHeThongRap: results2[0].tenHeThongRap,
        };

        const val = {
          thongTinRap: thongtinrap,
          maLichChieu: result1.maLichChieu,
          maRap: result1.maRap,
          maPhim: result0.maPhim,
          tenPhim: result0.tenPhim,
          ngayChieuGioChieu: result1.ngayChieuGioChieu,
          giaVe: result1.giaVe,
          thoiLuong: result1.thoiLuong,
        };

        lichchieu.push(val);
      }
    }

    const final = {
      lichchieu: lichchieu,
      maPhim: results0[0].maPhim,
      tenPhim: results0[0].tenPhim,
      biDanh: results0[0].biDanh,
      trailer: results0[0].trailer,
      hinhAnh: results0[0].hinhAnh,
      moTa: results0[0].moTa,
      daoDien: results0[0].daoDien,
      dienVien: results0[0].dienVien,
      quocGia: results0[0].quocGia,
      theLoai: results0[0].theLoai,
      dinhDang: results0[0].dinhDang,
      maNhom: "GP09",
      ngayKhoiChieu: results0[0].ngayKhoiChieu,
      danhGia: results0[0].danhGia,
    };

    return res.send(final);
  } catch (error) {
    console.error("Lỗi trong quá trình xử lý: ", error);
    return res.status(500).send("Đã xảy ra lỗi trong quá trình xử lý.");
  }
});

// Hàm thực hiện truy vấn với Promise
function queryAsync(sql, values) {
  return new Promise((resolve, reject) => {
    dbConn.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// QuanLyDatVe

app.get("/api/QuanLyDatVe/LayDanhSachPhongVe", function (req, res) {
  dbConn.query(
    "SELECT * FROM lichchieuinsert JOIN phiminsertvalichchieuinsert ON lichchieuinsert.maLichChieu = phiminsertvalichchieuinsert.lichchieuinsert JOIN phiminsert ON phiminsert.maPhim = phiminsertvalichchieuinsert.phiminsert JOIN cumrapvalichchieuinsert ON lichchieuinsert.maLichChieu = cumrapvalichchieuinsert.lichchieuinsert JOIN cumrap ON cumrap.cid = cumrapvalichchieuinsert.cumrap WHERE maLichChieu = ?",
    [req.query.MaLichChieu],
    async (error, results, fields) => {
      if (error) throw error;
      let danhSachGhe = Array.apply(null, Array(160)).map(function () {});
      danhSachGhe = await new Promise((resolve, reject) => {
        dbConn.query(
          "SELECT * FROM datve WHERE maLichChieu = ?",
          [req.query.MaLichChieu],
          async (error, results1, fields) => {
            if (error) throw error;
            for (const result1 of results1) {
              danhSachGhe[result1.tenGhe] = {
                maGhe: result1.maGhe,
                tenGhe: result1.tenGhe,
                maRap: result1.maRap,
                loaiGhe: result1.loaiGhe,
                stt: result1.tenGhe,
                giaVe: result1.giaVe,
                daDat: true,
                taiKhoanNguoiDat: result1.taiKhoanNguoiDat,
              };
            }
            resolve(danhSachGhe);
          }
        );
      });
      for (let i = 0; i < 160; i++) {
        if (danhSachGhe[i] === undefined) {
          danhSachGhe[i] = {
            maGhe: i,
            tenGhe: i > 9 ? String(i) : "0" + String(i),
            maRap: results[0].maRap,
            loaiGhe: i > 44 && i < 90 ? "Vip" : "Thuong",
            stt: i > 9 ? String(i) : "0" + String(i),
            giaVe:
              i > 44 && i < 90 ? results[0].giaVe + 15000 : results[0].giaVe,
            daDat: false,
            taiKhoanNguoiDat: null,
          };
        }
      }
      return res.send({
        thongTinPhim: {
          maLichChieu: results[0].maLichChieu,
          tenCumRap: results[0].tenCumRap,
          tenRap: results[0].tenRap,
          diaChi: results[0].diaChi,
          tenPhim: results[0].tenPhim,
          hinhAnh: results[0].hinhAnh,
          ngayChieu: results[0].ngayChieuGioChieu,
          gioChieu: results[0].ngayChieuGioChieu,
        },
        danhSachGhe: danhSachGhe,
      });
    }
  );
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function padZero(value) {
  return String(value).padStart(2, "0");
}

function sortObject(o) {
  var sorted = {},
    key,
    a = [];

  for (key in o) {
    if (o.hasOwnProperty(key)) {
      a.push(key);
    }
  }

  a.sort();

  for (key = 0; key < a.length; key++) {
    sorted[a[key]] = o[a[key]];
  }
  return sorted;
}

app.post("/api/QuanLyDatVe/DatVe", async (req, res) => {
  for (const ve of req.body.danhSachVe) {
    await new Promise((resolve, reject) => {
      dbConn.query(
        "INSERT INTO datve SET ? ",
        {
          tenGhe: ve.maGhe,
          loaiGhe: ve.giaVe > 75000 ? "Vip" : "Thuong",
          giaVe: ve.giaVe,
          taiKhoanNguoiDat: req.body.taiKhoanNguoiDung,
          maLichChieu: req.body.maLichChieu,
        },
        function (error, results, fields) {
          if (error) throw error;
        }
      );
      resolve();
    });
  }
  return res.send("Success");
});

app.post("/api/QuanLyDatVe/TaoLichChieu", async (req, res) => {
  dbConn.query(
    "INSERT INTO lichchieuinsert SET ? ",
    {
      ngayChieuGioChieu: req.body.ngayChieuGioChieu,
      maRap: req.body.maRap,
      tenRap: req.body.tenRap,
      giaVe: req.body.giaVe,
      thoiLuong: 120,
    },
    function (error, results, fields) {
      if (error) throw error;
      dbConn.query(
        "INSERT INTO phiminsertvalichchieuinsert SET ? ",
        {
          phiminsert: req.body.maPhim,
          lichchieuinsert: results.insertId,
        },
        function (error, results0, fields) {
          if (error) throw error;
        }
      );
      dbConn.query(
        "SELECT * FROM cumrap JOIN hethongrapvacumrap ON cumrap.cid = hethongrapvacumrap.cumrap WHERE tenCumRap = ?",
        [req.body.cumRap],
        function (error, results1, fields) {
          if (error) throw error;
          dbConn.query(
            "INSERT INTO cumrapvalichchieuinsert SET ? ",
            {
              cumrap: results1[0].cid,
              lichchieuinsert: results.insertId,
            },
            function (error, results2, fields) {
              if (error) throw error;
              console.log(results1[0].hethongrap);
              dbConn.query(
                "SELECT * FROM hethongrapvaphim WHERE maHeThongRap = ? AND maPhim = ?",
                [results1[0].hethongrap, req.body.maPhim],
                function (error, results3, fields) {
                  if (error) throw error;
                  if (!(results3.length > 0)) {
                    dbConn.query(
                      "INSERT INTO hethongrapvaphim SET ? ",
                      {
                        maHeThongRap: results1[0].hethongrap,
                        maPhim: req.body.maPhim,
                      },
                      function (error, results0, fields) {
                        if (error) throw error;
                      }
                    );
                  }
                }
              );
            }
          );
        }
      );
      return res.send("Success");
    }
  );
});

// QuanLyPhim

// app.post('/api/QuanLyPhim/ThemPhim', async (req, res) => {
//     const final = await new Promise((resolve, reject) => {
//         dbConn.query(`INSERT INTO phiminsert (tenPhim, biDanh, trailer, hinhAnh,moTa, maNhom, ngayKhoiChieu, danhGia) VALUES ("${req.body.tenPhim}","${req.body.biDanh}", "${req.body.trailer}", "${req.body.hinhAnh}", "${req.body.moTa}", "${req.body.maNhom}", "${req.body.ngayKhoiChieu}", "${req.body.danhGia}")`
//        , function (error, results, fields) {
//             if (error) throw error;
//             resolve(res.send("Success"));
//         });
//     })
//     return final;
// });

app.post("/api/QuanLyPhim/ThemPhim", async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      dbConn.query(
        "INSERT INTO phiminsert SET ? ",
        {
          tenPhim: req.body.tenPhim,
          biDanh: req.body.biDanh,
          trailer: req.body.trailer,
          hinhAnh: req.body.hinhAnh,
          moTa: req.body.moTa,
          daoDien: req.body.daoDien,
          dienVien: req.body.dienVien,
          quocGia: req.body.quocGia,
          theLoai: req.body.theLoai,
          dinhDang: req.body.dinhDang,
          maNhom: req.body.maNhom,
          ngayKhoiChieu: req.body.ngayKhoiChieu,
          danhGia: req.body.danhGia,
        },
        function (error, results, fields) {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });

    res.send("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/QuanLyPhim/CapNhatPhim", async (req, res) => {
  const final = await new Promise((resolve, reject) => {
    dbConn.query(
      "UPDATE phiminsert SET ? WHERE maPhim = ?",
      [
        {
          tenPhim: req.body.tenPhim,
          biDanh: req.body.biDanh,
          trailer: req.body.trailer,
          hinhAnh: req.body.hinhAnh,
          moTa: req.body.moTa,
          daoDien: req.body.daoDien,
          dienVien: req.body.dienVien,
          quocGia: req.body.quocGia,
          theLoai: req.body.theLoai,
          dinhDang: req.body.dinhDang,
          maNhom: req.body.maNhom,
          ngayKhoiChieu: req.body.ngayKhoiChieu,
          danhGia: req.body.danhGia,
        },
        req.body.maPhim,
      ],
      function (error, results, fields) {
        if (error) throw error;
        resolve(res.send("Success"));
      }
    );
  });
  return final;
});

app.delete("/api/QuanLyPhim/XoaPhim", function (req, res) {
  dbConn.query(
    "DELETE FROM phiminsert WHERE MaPhim=?",
    [req.query.MaPhim],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});
app.post("/api/QuanLyNguoiDung/QuenMatKhau", async (req, res) => {
  const { email } = req.body;

  // Tìm kiếm người dùng trong database
  const user = await new Promise((resolve, reject) => {
    dbConn.query(
      "SELECT * FROM nguoidungvm WHERE email = ?",
      [email],
      (error, results) => {
        if (error) return reject(error);
        resolve(results[0]);
      }
    );
  });
  if (!user)
    return res.status(404).send("Email không tồn tại, vui lòng kiểm tra lại.");

  const token = jwt.sign({ email: email }, "secretKey", { expiresIn: "1h" });

  await new Promise((resolve, reject) => {
    dbConn.query(
      "UPDATE nguoidungvm SET resetPasswordToken = ? WHERE email = ?",
      [token, email],
      (error, results) => {
        if (error) {
          reject(error);
          return res.status(500).send("Lỗi khi lưu token");
        }
        resolve();
      }
    );
  });

  const resetLink = `http://localhost:3000/reset-password/${token}`;
  if (!user) {
    return res.status(404).send("Email không tồn tại, vui lòng kiểm tra lại.");
  }
  const mailOptions = {
    from: "Cosmo Cinemas VietNam <cosmocinemaldh@gmail.com>",
    to: email,
    subject: "Đặt lại mật khẩu",
    html: `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="padding: 20px; text-align: center;">
          <img src="https://res.cloudinary.com/thientam2829/image/upload/v1709083061/hl7eyjomgkfcz9muyoly.png" alt="Cosmo Cinemas Logo" style="width: 200px;">
        </div>
        <div style="background: #ffffff; padding: 20px; text-align: center;">
          <h2 style="color:#0B1F3E;">Xin chào,</h2>
          <p style="font-size: 18px; color: #333; line-height: 1.6;">
            Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Nhấn vào đường link bên dưới để thực hiện thao tác này:
          </p>
          <a href="${resetLink}" style="display: inline-block; padding: 20px 40px; background-color: #264b80; color: #fff; text-decoration: none; border-radius: 5px; margin: 20px 0;">
            Đặt lại mật khẩu
          </a>
          <p style="font-size: 14px;">Nếu bạn không thực hiện yêu cầu , vui lòng bỏ qua email này.</p>
        </div>
        <div style="background: #264b80; padding: 20px; text-align: center;">
          <p style="font-size: 14px; color: #fff;">Trân trọng!<br>Cosmo Cinemas VietNam Support Team!</p>
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Lỗi khi gửi mail");
    } else {
      console.log("Email sent: " + info.response);
      res.send(
        "Email xác nhận đã được gửi, vui lòng kiểm tra hòm thư của bạn."
      );
    }
  });
});

// app.post(
//   "/api/QuanLyNguoiDung/XacMinhTokenVaCapNhatMatKhau",
//   async (req, res) => {
//     const { token, newPassword } = req.body;
//     try {
//       if (!token) {
//         return res.status(400).send("Token không được cung cấp.");
//       }

//       const decoded = jwt.verify(token, "secretKey");
//       const email = decoded.email;

//       const hashPassword = md5(newPassword);
//       dbConn.query(
//         "UPDATE nguoidungvm SET matKhau = ? WHERE email = ?",
//         [hashPassword, email],
//         function (error, results) {
//           if (error) {
//             return res.status(500).send("Lỗi khi cập nhật mật khẩu");
//           }
//           res.send("Cập nhật mật khẩu thành công");
//         }
//       );
//     } catch (error) {
//       console.log("Error:", error.message);
//       res
//         .status(400)
//         .send("Token không hợp lệ hoặc đã hết hạn: " + error.message);
//     }
//   }
// );
app.post(
  "/api/QuanLyNguoiDung/XacMinhTokenVaCapNhatMatKhau",
  async (req, res) => {
    const { token, newPassword } = req.body;

    try {
      const decoded = jwt.verify(token, "secretKey");
      const email = decoded.email;
      const user = await new Promise((resolve, reject) => {
        dbConn.query(
          "SELECT * FROM nguoidungvm WHERE resetPasswordToken = ?",
          [token],
          (error, results) => {
            if (error || results.length === 0) {
              reject("Token không hợp lệ hoặc đã hết hạn");
            } else {
              resolve(results[0]);
            }
          }
        );
      });
      if (user.email !== email)
        return res.status(400).send("Token không hợp lệ.");

      const hashPassword = md5(newPassword);
      dbConn.query(
        "UPDATE nguoidungvm SET matKhau = ?, resetPasswordToken = NULL WHERE email = ?",
        [hashPassword, email],
        (error, results) => {
          if (error) return res.status(500).send("Lỗi khi cập nhật mật khẩu");
          res.send("Cập nhật mật khẩu thành công");
        }
      );
    } catch (error) {
      console.log("Error:", error.message);
      res
        .status(400)
        .send("Token không hợp lệ hoặc đã hết hạn: " + error.message);
    }
  }
);

app.get("/api/QuanLyTinTuc/LayTatCaTinTuc", function (req, res) {
  dbConn.query("SELECT * FROM tintuc", [], function (error, results, fields) {
    if (error) throw error;
    return res.send(results);
  });
});
app.get("/api/QuanLyTinTuc/LayThongTinTinTuc/:id", function (req, res) {
  const id = req.params.id;
  dbConn.query(
    "SELECT * FROM tintuc WHERE id = ?",
    [id],
    function (error, results, fields) {
      if (error) {
        console.error("Lỗi khi truy vấn cơ sở dữ liệu:", error);
        res.status(500).send("Lỗi khi truy vấn cơ sở dữ liệu");
      } else {
        if (results.length > 0) {
          return res.send(results[0]);
        } else {
          return res.status(404).send("Không tìm thấy tin tức phù hợp");
        }
      }
    }
  );
});
app.delete("/api/QuanLyTinTuc/XoaTinTuc/:id", function (req, res) {
  const id = req.params.id;
  dbConn.query(
    "DELETE FROM tintuc WHERE id = ?",
    [id],
    function (error, results, fields) {
      if (error) {
        console.error("Lỗi khi truy vấn cơ sở dữ liệu:", error);
        res.status(500).send("Lỗi khi xóa tin tức từ cơ sở dữ liệu");
      } else {
        if (results.affectedRows > 0) {
          res.send({ message: "Tin tức đã được xóa thành công" });
        } else {
          res.status(404).send("Tin tức không tồn tại hoặc đã bị xóa trước đó");
        }
      }
    }
  );
});
app.put("/api/QuanLyTinTuc/ChinhSuaTinTuc/:id", function (req, res) {
  const id = req.params.id;
  const { tieude, noidung, hinhAnh } = req.body;
  dbConn.query(
    "UPDATE tintuc SET tieude = ?, noidung = ?, hinhAnh = ? WHERE id = ?",
    [tieude, noidung, hinhAnh, id],
    function (error, results, fields) {
      if (error) {
        console.error("Lỗi khi cập nhật cơ sở dữ liệu:", error);
        res.status(500).send("Lỗi khi cập nhật tin tức trong cơ sở dữ liệu");
      } else {
        if (results.affectedRows > 0) {
          res.send({ message: "Tin tức đã được cập nhật thành công" });
        } else {
          res.status(404).send("Không tìm thấy tin tức để cập nhật");
        }
      }
    }
  );
});
app.post("/api/QuanLyTinTuc/ThemTinTuc", function (req, res) {
  const { tieude, noidung, hinhAnh } = req.body;
  dbConn.query(
    "INSERT INTO tintuc (tieude, noidung, hinhAnh) VALUES (?, ?, ?)",
    [tieude, noidung, hinhAnh],
    function (error, results, fields) {
      if (error) {
        console.error("Lỗi khi thêm tin tức vào cơ sở dữ liệu:", error);
        res.status(500).send("Lỗi khi thêm tin tức vào cơ sở dữ liệu");
      } else {
        res.status(201).send({
          message: "Tin tức đã được thêm mới thành công",
          id: results.insertId,
        });
      }
    }
  );
});
