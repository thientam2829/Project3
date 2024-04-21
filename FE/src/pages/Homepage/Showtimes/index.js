import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import BtnPlay from "../../../components/BtnPlay";
export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const phanLoaiImages = {
    K: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/zxdfisgfqftyz9ww3jht.jpg",
    P: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/aycnuu1ywue6dky5jgqy.png",
    T13: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/hshdxztahqcwkg94dg3t.png",
    T16: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j143mnq0r8cfgv2qwcly.png",
    T18: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j2zoijbegsdpdfuk5gr6.png",
  };
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/QuanLyPhim/LayDanhSachPhim`
      );

      const moviesWithDateObjects = response.data.map((movie) => {
        const [day, month, year] = movie.ngayKhoiChieu.split("/");
        const correctDateFormat = `${year}-${month}-${day}`;

        return {
          ...movie,
          ngayKhoiChieuDate: new Date(correctDateFormat),
        };
      });

      const sortedMovies = moviesWithDateObjects.sort(
        (a, b) => b.ngayKhoiChieuDate - a.ngayKhoiChieuDate
      );
      const latestMovies = sortedMovies.slice(0, 8);

      setMovies(latestMovies.map(({ ngayKhoiChieuDate, ...rest }) => rest));
    } catch (error) {
      console.error("Failed to fetch movies data:", error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <div className="filmcard" id="lichchieu">
      <h4 className="movie-header">Phim đang chiếu</h4>
      <div
        className="movies-list"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.maPhim}
            className="movie-card"
            style={{ margin: "10px" }}
          >
            <div className="movie-card-inner">
              <div className="movie-card-front">
                <img
                  style={{
                    width: "300px",
                    height: "450px",
                    objectFit: "cover",
                  }}
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                />
                <div className="play-trailer">
                  <BtnPlay
                    cssRoot="play"
                    width={48}
                    height={48}
                    urlYoutube={movie.trailer}
                  />
                </div>
              </div>

              <div className="movie-card-back">
                <h3>
                  {movie.tenPhim}
                  {movie.phanLoai && phanLoaiImages[movie.phanLoai] ? (
                    <img
                      src={phanLoaiImages[movie.phanLoai]}
                      alt={`Phân loại ${movie.phanLoai}`}
                      style={{
                        maxWidth: "25px",
                        height: "auto",
                        marginLeft: "10px",
                      }}
                    />
                  ) : null}
                </h3>
              </div>
            </div>
            <div className="movie-card-footer">
              <Link to={`/detail/${movie.maPhim}`} className="btn btn-primary">
                Chi Tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-button">
        <Link to="/phimdangchieu" className="btn btn-secondary">
          Xem Thêm <NavigateNextIcon />
        </Link>
      </div>
    </div>
  );
}
