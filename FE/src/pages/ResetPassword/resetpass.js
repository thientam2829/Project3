import React, { useState } from "react";
import axios from "axios";

function ResetPasswordForm({ token }) {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Mật khẩu không khớp");
      return;
    }

    try {
      const url = `http://localhost:4000/api/QuanLyNguoiDung/QuenMatKhau`;

      await axios.post(
        url,
        { password },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      setSuccess(true);
    } catch (error) {
      setError(error.response.data.msg);
    }
  };

  if (success) {
    return <div>Mật khẩu đã được cập nhật!</div>;
  }

  return (
    <form onSubmit={resetPasswordHandler}>
      {error && <p>{error}</p>}

      <input
        type="password"
        placeholder="Mật khẩu mới"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Xác nhận mật khẩu"
        onChange={(e) => setConfirmPass(e.target.value)}
      />

      <button>Cập nhật</button>
    </form>
  );
}

export default ResetPasswordForm;
