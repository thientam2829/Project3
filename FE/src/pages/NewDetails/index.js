import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import ScrollToTopOnPathChange from "../../components/Scroll";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const Breadcrumb = ({ title }) => {
  const history = useHistory();
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/tintuc">Tin tức</Link>
      <span> / </span>
      <span>{title}</span>
    </div>
  );
};

const NewsPage = ({ match }) => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const responseNews = await axios.get(
          `http://localhost:4000/api/QuanLyTinTuc/LayThongTinTinTuc/${id}`
        );
        setNewsItem(responseNews.data);
        const responseMovies = await axios.get(
          `http://localhost:4000/api/QuanLyPhim/LayDanhSachPhim`
        );
        setMovies(responseMovies.data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchNews();
  }, [id]);
  function splitContentIntoThreeParts(content) {
    const partLength = Math.ceil(content.length / 5);
    return [
      content.substring(0, partLength),
      content.substring(partLength, 2 * partLength),
      content.substring(2 * partLength),
    ];
  }

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;
  const contentParts = newsItem
    ? splitContentIntoThreeParts(newsItem.noidung)
    : [];
  return (
    <>
      <ScrollToTopOnPathChange />
      <div className="news-container">
        <div className="news-article">
          {newsItem ? (
            <article>
              <Breadcrumb title={newsItem?.tieude || ""} />
              <h1>{newsItem.tieude}</h1>
              <div
                className="noidung"
                dangerouslySetInnerHTML={{ __html: newsItem.noidung }}
              />
              <p>{newsItem.ngaydang}</p>
            </article>
          ) : (
            <p>Không tìm thấy tin tức</p>
          )}
        </div>
        <div className="movies-sidebar">
          <h4 style={{ color: "#ee823b" }}>Phim Đang Chiếu</h4>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/detail/${movie.maPhim}`}
              className="movie-item"
            >
              <img src={movie.hinhAnh} alt={movie.tenPhim} />
              <h5 style={{ color: "white" }}>{movie.tenPhim}</h5>
            </Link>
          ))}
          <Link to="/phimdangchieu" className="btn btn-primary">
            Xem Thêm <NavigateNextIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
