import axiosClient from "./axiosClient";

const newsApi = {
  layTatCaTinTuc: () => {
    return axiosClient.get("/QuanLyTinTuc/LayTatCaTinTuc");
  },

  layThongTinTinTuc: (id) => {
    return axiosClient.get(`/QuanLyTinTuc/LayThongTinTinTuc/${id}`);
  },

  themTinTuc: ({ tieude, noidung, hinhAnh }) => {
    return axiosClient.post("/QuanLyTinTuc/ThemTinTuc", {
      tieude,
      noidung,
      hinhAnh,
    });
  },

  chinhSuaTinTuc: (id, { tieude, noidung, hinhAnh }) => {
    return axiosClient.put(`/QuanLyTinTuc/ChinhSuaTinTuc/${id}`, {
      tieude,
      noidung,
      hinhAnh,
    });
  },

  xoaTinTuc: (id) => {
    return axiosClient.delete(`/QuanLyTinTuc/XoaTinTuc/${id}`);
  },
};

export default newsApi;
