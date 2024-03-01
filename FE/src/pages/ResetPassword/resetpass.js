import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/QuanLyNguoiDung/XacMinhTokenVaCapNhatMatKhau",
        { newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}></div>
                <div className="login-wrap p-4 p-md-5">
                  <h3 className="mb-4">Đặt lại mật khẩu</h3>
                  <form onSubmit={handleSubmit} className="signin-form">
                    <div className="form-group">
                      <label>Mật khẩu mới * </label>
                      <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Xác nhận mật khẩu * </label>
                      <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        style={{
                          backgroundColor: "rgb(238, 130, 59)",
                          borderColor: "rgb(238, 130, 59)",
                          cursor: "pointer",
                          width: "100%",
                        }}
                        type="submit"
                        className="btn btn-success mt-3 container"
                      >
                        Đặt lại mật khẩu
                      </button>
                    </div>
                    {message && <p className="text-danger">{message}</p>}
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
