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
  Button,
  IconButton,
} from "@material-ui/core";
import axios from "axios";
import AddOrEditNhanVienForm from "./dialog";
import { format, parseISO } from "date-fns";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
function Employee() {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [cumRapList, setCumRapList] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
    fetchCumRap();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/QuanLyNhanVien/LayTatCaNhanVien"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  const fetchCumRap = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/cumrap");
      setCumRapList(response.data);
    } catch (error) {
      console.error("Error fetching cụm rạp:", error);
    }
  };
  const handleDeleteEmployee = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá nhân viên này không?")) {
      axios
        .delete(`http://localhost:4000/api/QuanLyNhanVien/XoaNhanVien/${id}`)
        .then((response) => {
          alert("Nhân viên đã được xoá thành công!");
          fetchEmployees();
        })
        .catch((error) => {
          console.error("Có lỗi xảy ra khi xoá nhân viên: ", error);
          alert("Có lỗi xảy ra, không thể xoá nhân viên!");
        });
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getCumRapName = (cumRapId) => {
    const cumRap = cumRapList.find((cr) => cr.cid === cumRapId);
    return cumRap ? cumRap.tenCumRap : "sssss";
  };
  const handleEditClick = (employee) => {
    setCurrentEmployee(employee);
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{
          backgroundColor: "rgb(238, 130, 59)",
          borderColor: "rgb(238, 130, 59)",
          cursor: "pointer",
          width: "15%",
        }}
      >
        Thêm Nhân Viên
      </Button>

      <AddOrEditNhanVienForm
        open={open}
        onClose={() => {
          handleClose();
          setCurrentEmployee(null);
        }}
        currentEmployee={currentEmployee}
        fetchEmployees={fetchEmployees}
      />

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
              <TableCell>Ngày Bắt Đầu</TableCell>
              <TableCell>Loại Nhân Viên</TableCell>
              <TableCell>Nơi Làm Việc</TableCell>
              <TableCell>Lương</TableCell>
              <TableCell>Trạng Thái</TableCell>
              <TableCell>Hành Động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.hoten}</TableCell>
                <TableCell>
                  {format(parseISO(employee.ngaysinh), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.sdt}</TableCell>
                <TableCell>{employee.diachi}</TableCell>
                <TableCell>
                  {format(parseISO(employee.ngayvaolam), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>{employee.loainhanvien}</TableCell>
                <TableCell>{getCumRapName(employee.noilamviec)}</TableCell>
                <TableCell>{employee.luong}</TableCell>
                <TableCell>
                  {employee.trangthai ? "Đang Làm Việc" : "Nghỉ Việc"}
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    style={{ color: "#f50057" }}
                    onClick={() => handleDeleteEmployee(employee.id)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    style={{ color: "rgb(238, 130, 59)" }}
                    onClick={() => handleEditClick(employee)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Employee;
