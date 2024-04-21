import axiosClient from "./axiosClient";
const statisticalApi = {
  getThongKeDoanhThuPhim: () => {
    const path = "/ThongKe/DoanhThuPhim";
    return axiosClient.get(path);
  },
  getThongKeDoanhThuPhimTheoRap: () => {
    const path = "/ThongKe/doanhthuphimtheorap";
    return axiosClient.get(path);
  },
  getThongKeDoanhThuTheoThang: () => {
    const path = "/ThongKe/DoanhThuTheoThang";
    return axiosClient.get(path);
  },
};
export default statisticalApi;
