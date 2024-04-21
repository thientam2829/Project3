import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

export default function BtnGoToCheckout({ lichChieuTheoPhim }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <button
      className={classes.button}
      onClick={() =>
        history.push(
          `/datve/${lichChieuTheoPhim.maLichChieu}`,
          `/datve/${lichChieuTheoPhim.maLichChieu}`
        )
      }
    >
      <span className={classes.inTime}>
        {lichChieuTheoPhim.ngayChieuGioChieu.slice(11, 16)}
      </span>
    </button>
  );
}
