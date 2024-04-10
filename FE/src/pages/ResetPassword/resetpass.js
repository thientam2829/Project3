import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import usersApi from "../../api/usersApi";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const handleVerifyAndResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Mật khẩu xác nhận không khớp.",
      });
      return;
    }

    try {
      const response = await usersApi.postResetMatKhau({
        email,
        otp,
        newPassword,
      });
      if (response.data === "Cập nhật mật khẩu thành công") {
        Swal.fire({
          icon: "success",
          title: "Thành công",
          text: "Mật khẩu của bạn đã được cập nhật thành công.",
          timer: 3000,
        }).then(() => {
          history.push("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Thất bại",
          text: "Có lỗi xảy ra, vui lòng thử lại.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: error.response?.data || "Có lỗi xảy ra khi đặt lại mật khẩu.",
      });
    }
  };

  return (
    <>
      <section className="ftco-section" style={{ padding: "6em" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}>
                  <img
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    className="rounded-md"
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1709452945/yiogehwbo4yefreukipq.jpg"
                    alt="Reset Password"
                  />
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-4">Đặt lại mật khẩu</h3>
                  <form
                    onSubmit={handleVerifyAndResetPassword}
                    className="signin-form"
                  >
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>OTP *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Mật khẩu mới *</label>
                      <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Xác nhận mật khẩu *</label>
                      <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button
                        style={{
                          backgroundColor: "rgb(238, 130, 59)",
                          borderColor: "rgb(238, 130, 59)",
                          cursor: "pointer",
                          width: "100%",
                        }}
                        className="btn btn-success mt-3 container"
                        type="submit"
                      >
                        Đặt lại mật khẩu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
