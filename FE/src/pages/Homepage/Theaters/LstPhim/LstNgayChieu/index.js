import React, { Fragment, useMemo } from "react";
import formatDate from "../../../../../utilities/formatDate";
import ButtonCheckout from "../../../../../components/ButtonCheckout";
import useStyles from "./style";

export default function LstGioChieu({ lstLichChieuTheoPhim }) {
  const classes = useStyles();

  const formatDateToDMY = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const today = useMemo(() => {
    const now = new Date();
    return formatDateToDMY(now.toISOString().slice(0, 10));
  }, []);

  const tomorrow = useMemo(() => {
    const temp = new Date();
    temp.setDate(temp.getDate() + 1);
    return formatDateToDMY(temp.toISOString().slice(0, 10));
  }, []);

  const mangChiChuaNgay = lstLichChieuTheoPhim.map((item) =>
    item.ngayChieuGioChieu.slice(0, 10)
  );
  const MangNgayKhongTrungLap = [...new Set(mangChiChuaNgay)];
  const validDates = MangNgayKhongTrungLap.filter(
    (date) => date === today || date === tomorrow
  );

  const filterByDay = (date) =>
    lstLichChieuTheoPhim.filter(
      (item) => item.ngayChieuGioChieu.slice(0, 10) === date
    );

  return (
    <div className={classes.lstNgayChieu}>
      {validDates.length ? (
        validDates.map((date) => (
          <Fragment key={date}>
            <p className={classes.ngayChieu}>{formatDate(date).dateFull}</p>
            <div className={classes.groupTime}>
              {filterByDay(date).map((lichChieuTheoPhim) => (
                <Fragment key={lichChieuTheoPhim.maLichChieu}>
                  <ButtonCheckout lichChieuTheoPhim={lichChieuTheoPhim} />
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))
      ) : (
        <p>No showtimes for today or tomorrow.</p>
      )}
    </div>
  );
}
