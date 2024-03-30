import React from "react";

import useApiThoiLuongDanhGia from "../../utilities/useApiThoiLuongDanhGia";

export default function ThoiLuongDanhGia(props) {
  const { thoiLuong } = useApiThoiLuongDanhGia(props.maPhim);
  const style = {
    fontSize: 12,
    color: "#9b9b9b",
  };
  return (
    <>
      <span style={{ style }}>{`${thoiLuong ?? "120"} phút `}</span>
    </>
  );
}
