import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";

function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/api/QuanLyNhanVien/LayTatCaNhanVien");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Typography
        variant="h4"
        style={{ padding: "20px 0", textAlign: "center" }}
      >
        Danh Sách Nhân Viên
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Họ Tên</TableCell>
            <TableCell>Ngày Sinh</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>SĐT</TableCell>
            <TableCell>Địa Chỉ</TableCell>
            <TableCell>Ngày Vào Làm</TableCell>
            <TableCell>Loại Nhân Viên</TableCell>
            <TableCell>Nơi Làm Việc</TableCell>
            <TableCell>Lương</TableCell>
            <TableCell>Trạng Thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.hoten}</TableCell>
              <TableCell>{employee.ngaysinh}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.sdt}</TableCell>
              <TableCell>{employee.diachi}</TableCell>
              <TableCell>{employee.ngayvaolam}</TableCell>
              <TableCell>{employee.loainhanvien}</TableCell>
              <TableCell>{employee.noilamviec}</TableCell>
              <TableCell>{employee.luong}</TableCell>
              <TableCell>
                {employee.trangthai ? "Còn Làm" : "Nghỉ Việc"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Employee;
