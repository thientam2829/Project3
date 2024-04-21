import axiosClient from "./axiosClient";
const employeeApi = {
  getTatCaNhanVien: () => {
    const path = "QuanLyNhanVien/LayTatCaNhanVien";
    return axiosClient.get(path);
  },
  getCumRap: () => {
    const path = "/cumrap";
    return axiosClient.get(path);
  },
  deleteNhanVien: (id) => {
    const path = `/QuanLyNhanVien/XoaNhanVien/${id}`;
    return axiosClient.delete(path);
  },
  chinhSuaNhanVien: (id, employeeData) => {
    const path = `/QuanLyNhanVien/ChinhSuaNhanVien/${id}`;
    return axiosClient.put(path, employeeData);
  },
  themNhanVien: (employeeData) => {
    const path = `/QuanLyNhanVien/ThemNhanVien`;
    return axiosClient.post(path, employeeData);
  },
};
export default employeeApi;
