import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";

// Dữ liệu giả cho các câu hỏi và câu trả lời
const faqData = [
  {
    question:
      "01 email/số điện thoại có thể đăng ký được nhiều tài khoản không?",
    answer:
      "Với một email/số điện thoại, bạn chỉ có thể đăng kí được một tài khoản tại Cosmo Cinemas. ",
  },
  {
    question: "Tôi phải làm sao nếu quên mật khẩu ?",
    answer:
      "Bạn có thể lấy lại mật khẩu bằng cách chọn chức năng quên mật khẩu trên website Cosmo Cinemas và làm theo các bước của hệ thống yêu cầu..",
  },
  { question: "Làm cách nào để mua vé trực tuyến ?", answer: "" },
];
const Breadcrumb = ({ title }) => {
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/faq">FAQ</Link>
      <span>{title}</span>
    </div>
  );
};
const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main-container">
      <Breadcrumb />
      <div className="faq-container">
        <h1>FAQ</h1>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="terms-sidebar">
        <h3>Thông tin khác</h3>
        <div className="sidebar-links">
          <Link to="/dieukhoansudung" className="sidebar-link">
            Điều khoản sử dụng
          </Link>
          <Link to="/chinhsachbaomat" className="sidebar-link">
            Chính sách bảo mật
          </Link>
          <Link to="/faq" className="sidebar-link">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
