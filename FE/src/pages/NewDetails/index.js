import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Header from "../../layouts/MainLayout/Header";
import Footer from "../../layouts/MainLayout/Footer";
const NewsPage = ({ match }) => {
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/QuanLyTinTuc/LayThongTinTinTuc/${match.params.id}`
        );
        setNewsItem(response.data);
      } catch (err) {
        setError("Không thể tải tin tức");
        console.error(err);
      }
      setLoading(false);
    };

    fetchNews();
  }, [match.params.id]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div>
        {newsItem ? (
          <article>
            <h1>{newsItem.tieude}</h1>
            <p>{newsItem.noidung}</p>
            <p>{newsItem.ngaydang}</p>
          </article>
        ) : (
          <p>Không tìm thấy tin tức</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
