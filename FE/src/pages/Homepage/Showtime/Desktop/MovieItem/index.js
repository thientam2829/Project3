import React from "react";
import { Link, useHistory } from "react-router-dom";
import BtnPlay from "../../../../../components/BtnPlay";
import useStyles from "./styles";
import useApiThoiLuongDanhGia from "../../../../../utilities/useApiThoiLuongDanhGia";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./movie.css";
const phanLoaiImages = {
  K: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/zxdfisgfqftyz9ww3jht.jpg",
  P: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/aycnuu1ywue6dky5jgqy.png",
  T13: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/hshdxztahqcwkg94dg3t.png",
  T16: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j143mnq0r8cfgv2qwcly.png",
  T18: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j2zoijbegsdpdfuk5gr6.png",
};
function MovieItem({ movie, comingMovie }) {
  const classes = useStyles({ bg: movie.hinhAnh, comingMovie });
  const history = useHistory();
  const { thoiLuong } = useApiThoiLuongDanhGia(movie.maPhim);
  return (
    <>
      <div
        style={{
          padding: "15px",
          cursor: "pointer",
        }}
      >
        <div className="film">
          <div className="film__img">
            <div className={`film__poster ${classes.addbg}`}>
              <div
                className="film__overlay"
                onClick={() =>
                  history.push(`/detail/${movie.maPhim}`, { comingMovie })
                }
              />
              <div className="play__trailer">
                <BtnPlay
                  cssRoot={"play"}
                  width={48}
                  height={48}
                  urlYoutube={movie.trailer}
                />
              </div>
            </div>
          </div>
          <div className="film__content">
            <div className={`film__name ${thoiLuong ? "" : "not_hide"}`}>
              <div className="name">
                <div className="name__content">
                  {movie.phanLoai && phanLoaiImages[movie.phanLoai] ? (
                    <img
                      src={phanLoaiImages[movie.phanLoai]}
                      alt={`Phân loại ${movie.phanLoai}`}
                      style={{ maxWidth: "25px", height: "auto" }}
                    />
                  ) : (
                    <p>Không có dữ liệu</p>
                  )}
                  <p style={{ fontSize: "20px", color: "white" }}>
                    {movie.tenPhim}
                  </p>
                </div>
              </div>
              <p className="pt-2">
                {thoiLuong ? (
                  <span className="text_info">{thoiLuong} phút</span>
                ) : (
                  <span className="text_info">{movie.danhGia}</span>
                )}
              </p>
            </div>

            <div className={`film__button`}>
              {(thoiLuong || comingMovie) && (
                <Link
                  style={{
                    background: comingMovie ? "#60c5ef" : "rgb(238, 130, 59)",
                  }}
                  to={{
                    pathname: `/detail/${movie.maPhim}`,
                    state: { comingMovie },
                  }}
                >
                  {comingMovie ? "THÔNG TIN PHIM" : "MUA VÉ"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieItem;
