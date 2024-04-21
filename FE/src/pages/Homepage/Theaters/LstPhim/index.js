import React, { memo, useMemo } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./style";
import ThoiLuongDanhGia from "../../../../components/ThoiLuongDanhGia/thoiLuongDanhGia";
import LstNgayChieu from "./LstNgayChieu/";

function Index(props) {
  const history = useHistory();
  const classes = useStyles();

  const today = useMemo(() => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  }, []);

  // Filtering unique movies that have at least one showing for today or later
  const seenTitles = new Set();
  const uniqueMovies = useMemo(() => {
    return props.lstPhim.filter((phim) => {
      const duplicate = seenTitles.has(phim.tenPhim);
      if (!duplicate) {
        seenTitles.add(phim.tenPhim);
        return phim.lstLichChieuTheoPhim.some((showing) => {
          return showing.ngayChieuGioChieu.slice(0, 10) >= today;
        });
      }
      return false;
    });
  }, [props.lstPhim, today]);

  return (
    <div className={classes.lstPhim} hidden={props.hidden}>
      {uniqueMovies.map((phim) => (
        <div
          onClick={() => history.push(`/detail/${phim.maPhim}`)}
          className={classes.phim}
          key={phim.maPhim}
        >
          <div className={classes.phim__info}>
            <img
              src={phim.hinhAnh}
              className={classes.phim__img}
              alt={phim.tenPhim}
            />
            <div className={classes.phim__text}>
              <p className={classes.phim__text_name}>{phim.tenPhim}</p>
              <ThoiLuongDanhGia maPhim={phim.maPhim} />
            </div>
          </div>
          <div>
            <LstNgayChieu lstLichChieuTheoPhim={phim.lstLichChieuTheoPhim} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Index);
