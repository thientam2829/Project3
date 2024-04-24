import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";
import ScrollToTopOnPathChange from "../../components/Scroll";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import moviesApi from "../../api/moviesApi";
import newsApi from "../../api/newApi";

const Breadcrumb = ({ title }) => {
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

const NewsPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNewsAndMovies = async () => {
      setLoading(true);
      try {
        const responseNews = await newsApi.layThongTinTinTuc(id);
        setNewsItem(responseNews.data);

        const responseMovies = await moviesApi.getDanhSachPhim();
        // Assuming responseMovies.data is an array of movie objects with a 'releaseDate' property
        const sortedMovies = responseMovies.data
          .sort((a, b) => new Date(a.ngayKhoiChieu) - new Date(b.ngayKhoiChieu))
          .slice(0, 3); // Sorting and picking the top 3 latest movies
        setMovies(sortedMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsAndMovies();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

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
