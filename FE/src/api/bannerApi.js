import axiosClient from "./axiosClient";
const bannerApi = {
  layDanhSachBanner: () => {
    return axiosClient.get("/QuanLyBanner/LayDanhSachBanner");
  },
  xoaBanner: (id) => {
    return axiosClient.delete(`/QuanLyBanner/XoaBanner/${id}`);
  },

  themBanner: (bannerData) => {
    return axiosClient.post("/QuanLyBanner/ThemBanner", bannerData);
  },
  getFilmOptions: () => {
    return axiosClient.get("/getFilmOptions");
  },
};
export default bannerApi;
