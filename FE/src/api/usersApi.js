import axiosClient from "./axiosClient";

const usersApi = {
  postDangKy: (user) => {
    const path = "/QuanLyNguoiDung/DangKy";
    return axiosClient.post(path, user);
  },
  xacThucOTP: (email, otp) => {
    const url = `/QuanLyNguoiDung/XacThucOTP`;
    return axiosClient.post(url, { email, otp });
  },
  checkEmailAvailability: (email) => {
    const url = `/check-email/${email}`;
    return axiosClient.get(url);
  },
  postDangNhap: (user) => {
    const path = "/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(path, user);
  },

  getDanhSachNguoiDung: () => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";
    return axiosClient.get(path);
  },

  getDanhSachNguoiDungPhanTrang: (soTrang, soPhanTuTrenTrang) => {
    const path = "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09";
    return axiosClient.get(path, { soTrang, soPhanTuTrenTrang });
  },

  postThemNguoiDung: (user) => {
    const path = "/QuanLyNguoiDung/ThemNguoiDung";

    return axiosClient.post(path, user);
  },

  deleteUser: (taiKhoan) => {
    const path = `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return axiosClient.delete(path);
  },

  editTaiKhoan: (user) => {
    const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(path, user);
  },

  getThongTinTaiKhoan: (info) => {
    const path = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(path, info);
  },
  postQuenMatKhau: (email) => {
    const path = "/QuanLyNguoiDung/QuenMatKhau";
    return axiosClient.post(path, { email });
  },
  postResetMatKhau: ({ email, otp, newPassword }) => {
    const path = "/QuanLyNguoiDung/CapNhatMatKhau";
    return axiosClient.post(path, { email, otp, newPassword });
  },
};

export default usersApi;
