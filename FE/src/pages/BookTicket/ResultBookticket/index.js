import React from "react";

import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import useStyles from "./style";
import { colorTheater } from "../../../constants/theaterData";
import QRCode from "react-qr-code";
export default function ResultBookTicket() {
  const {
    isMobile,
    amount,
    email,
    phone,
    paymentMethod,
    listSeatSelected,
    successBookTicketTicketMessage,
    errorBookTicketMessage,
    danhSachPhongVe: { thongTinPhim },
  } = useSelector((state) => state.BookTicketReducer);
  const { currentUser } = useSelector((state) => state.authReducer);
  const classes = useStyles({
    thongTinPhim,
    color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()],
    isMobile,
  });
  const handleDownloadTicket = () => {
    const input = document.getElementById("ticketContainer");
    html2canvas(input)
      .then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "ticket.png"; // Tên file khi tải về
        a.click();
      })
      .catch((err) =>
        console.error("Something went wrong when downloading the ticket", err)
      );
  };
  return (
    <div id="ticketContainer">
      <div className={classes.resultBookTicket}>
        <div className={classes.infoTicked}>
          <div className={classes.infoTicked__img}></div>
          <div className={classes.infoTicked__txt}>
            <p className={classes.tenPhim}>{thongTinPhim?.tenPhim}</p>
            <p className={classes.text__first}>
              <span>{thongTinPhim?.tenCumRap.split("-")[0]}</span>
              <span className={classes.text__second}>
                -{thongTinPhim?.tenCumRap.split("-")[1]}
              </span>
            </p>
            <p className={classes.diaChi}>{thongTinPhim?.diaChi}</p>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td valign="top">Suất chiếu:</td>
                  <td valign="top">{`${thongTinPhim?.gioChieu} ${thongTinPhim?.ngayChieu}`}</td>
                </tr>
                <tr>
                  <td valign="top">Phòng:</td>
                  <td>{thongTinPhim?.tenRap}</td>
                </tr>
                <tr>
                  <td valign="top">Ghế:</td>
                  <td>{listSeatSelected?.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div>
            <h3 className={classes.infoResult_label}>Thông tin đặt vé</h3>
            <table className={`${classes.table} table`}>
              <tbody>
                <tr>
                  <td valign="top">Họ tên:</td>
                  <td>{currentUser?.hoTen}</td>
                </tr>
                <tr>
                  <td valign="top">Điện thoại:</td>
                  <td valign="top">{phone}</td>
                </tr>
                <tr>
                  <td valign="top">Email:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td valign="top">Trạng thái:</td>
                  <td>
                    {successBookTicketTicketMessage && (
                      <span>
                        Đặt vé thành công{" "}
                        <span className={classes.paymentColor}>
                          {paymentMethod}
                        </span>
                      </span>
                    )}
                    {errorBookTicketMessage && (
                      <span>
                        Đặt vé thất bại:{" "}
                        <span className={classes.errorColor}>
                          {errorBookTicketMessage}
                        </span>
                      </span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td valign="top">Tổng tiền:</td>
                  <td valign="top">
                    <span>{`${amount.toLocaleString("vi-VI")} đ`}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            {successBookTicketTicketMessage && (
              <div>
                <h3 className={classes.infoResult_label}>Mã QR thông tin vé</h3>
                <div className={classes.qrCode}>
                  <QRCode
                    value={`${currentUser?.hoTen} - ${
                      thongTinPhim?.tenPhim
                    } - ${thongTinPhim?.gioChieu} ${
                      thongTinPhim?.ngayChieu
                    } - ${listSeatSelected?.join(", ")}`}
                  />
                </div>
                <p className={classes.noteresult}>
                  Sử dụng mã QR này khi đến rạp để kiểm tra vé!
                </p>
              </div>
            )}
            <button onClick={handleDownloadTicket}>Tải Vé</button>
          </div>
        </div>
      </div>
    </div>
  );
}
