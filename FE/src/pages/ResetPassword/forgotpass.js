import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        console.error("Email is not defined or empty");
        return;
      }

      const response = await fetch(
        "http:localhost:4000/api/QuanLyNguoiDung/QuenMatKhau",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setSuccessMessage(result.message); // Thay đổi dòng này tùy theo cấu trúc phản hồi từ server
        setErrorMessage(""); // Đặt lại lỗi nếu có
      } else {
        const errorResult = await response.json();
        setSuccessMessage("");
        setErrorMessage(errorResult.error); // Thay đổi dòng này tùy theo cấu trúc phản hồi từ server
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("");
      setErrorMessage("Failed to send reset email");
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ForgotPassword;
