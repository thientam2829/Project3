import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@material-ui/core";
import AddBannerForm from "./form";
const BannerList = () => {
  const [bannerList, setBannerList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchBannerList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/QuanLyBanner/LayDanhSachBanner"
      );
      setBannerList(response.data);
    } catch (error) {
      console.error("Error fetching banner list:", error);
    }
  };
  useEffect(() => {
    fetchBannerList();
  }, []);

  const handleDeleteBanner = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/QuanLyBanner/XoaBanner/${id}`
      );
      if (response.data) {
        setBannerList(bannerList.filter((banner) => banner.id !== id));
        alert("Banner đã được xóa thành công");
      }
    } catch (error) {
      console.error("Lỗi khi xóa banner:", error);
      alert("Xóa banner thất bại");
    }
  };

  return (
    <TableContainer component={Paper}>
      <div className="toolbar">
        <Button
          style={{
            backgroundColor: "rgb(238, 130, 59)",
            borderColor: "rgb(238, 130, 59)",
            cursor: "pointer",
            width: "15%",
          }}
          variant="contained"
          color="primary"
          onClick={() => setShowAddForm(true)}
        >
          Thêm Banner
        </Button>
      </div>
      <AddBannerForm
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        onAddNews={() => {
          fetchBannerList();
          setShowAddForm(false);
        }}
      />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hình Ảnh</TableCell>
            <TableCell align="left">Tên Banner</TableCell>
            <TableCell>Hành Động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bannerList.map((banner) => (
            <TableRow key={banner.id}>
              <TableCell component="th" scope="row">
                <img
                  src={banner.hinhAnh}
                  alt={banner.tieuDe}
                  style={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
              </TableCell>
              <TableCell align="left">{banner.tenPhim}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteBanner(banner.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BannerList;
