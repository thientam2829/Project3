import axiosClient from "./axiosClient";
const ticketsApi = {
  tongTienMuaVe: (taiKhoan) => {
    const url = `/QuanLyVe/TongTienMuaVe/${taiKhoan}`;
    return axiosClient.get(url);
  },

  tongSoVeDaMua: (taiKhoan) => {
    const url = `/QuanLyVe/TongSoVeDaMua/${taiKhoan}`;
    return axiosClient.get(url);
  },

  tenPhimDaMua: (taiKhoan) => {
    const url = `/QuanLyVe/TenPhimDaMua/${taiKhoan}`;
    return axiosClient.get(url);
  },
};

export default ticketsApi;
