import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./style.css";
import { OPEN_MODAL } from "../../reducers/constants/ModalTrailer";
import { useDispatch } from "react-redux";
import ConfirmationNumberTwoToneIcon from "@material-ui/icons/ConfirmationNumberTwoTone";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ScrollToTopOnPathChange from "../../components/Scroll";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  movieCardFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  btnMuaVe: {
    margin: theme.spacing(1),
    textTransform: "none",
  },
}));
const Breadcrumb = () => {
  const history = useHistory();
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/phimdangchieu">Phim đang chiếu</Link>
    </div>
  );
};
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/QuanLyPhim/LayDanhSachPhim`
      );

      const moviesWithDateObjects = response.data.map((movie) => {
        // Giả định ngayKhoiChieu có định dạng dd/mm/yyyy, chuyển đổi nó sang yyyy/mm/dd
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
      // Chỉ gán trường dữ liệu cần thiết để không thay đổi cấu trúc ban đầu của dữ liệu phim
      setMovies(sortedMovies.map(({ ngayKhoiChieuDate, ...rest }) => rest));
    } catch (error) {
      console.error("Failed to fetch movies data:", error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
  const dispatch = useDispatch();
  const openModal = (urlYoutube) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        open: true,
        urlYoutube: urlYoutube,
      },
    });
  };
  return (
    <>
      <ScrollToTopOnPathChange />
      <Breadcrumb title="Phim đang chiếu" />
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.maPhim} className="movie-card">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.tenPhim}</h3>
            <div className={classes.movieCardFooter}>
              <Button
                component={Link}
                to={`/detail/${movie.maPhim}`}
                className={classes.btnMuaVe}
                variant="contained"
                color="primary"
                startIcon={<ConfirmationNumberTwoToneIcon />}
              >
                Mua Vé
              </Button>
              <Button
                className={classes.btnMuaVe}
                variant="contained"
                color="secondary"
                onClick={() => openModal(movie.trailer)}
                startIcon={<PlayCircleOutlineIcon />}
              >
                Xem Trailer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
