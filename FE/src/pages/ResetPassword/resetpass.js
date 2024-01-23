import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  // Parse token từ URL
  const token = new URLSearchParams(location.search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/QuanLyNguoiDung/XacMinhTokenVaCapNhatMatKhau",
        { token, newPassword }
      );
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Đặt lại mật khẩu</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
