import React, { useState, useEffect } from "react";
import axios from "axios";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import "./style.css";
const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/QuanLyTinTuc/LayTatCaTinTuc"
      );
      setNewsItems(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  const handleDeleteNewsItem = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/QuanLyTinTuc/XoaTinTuc/${id}`
      );
      if (response.data) {
        // Cập nhật state để xóa tin tức khỏi danh sách hiển thị
        setNewsItems(newsItems.filter((item) => item.id !== id));
        alert("Tin tức đã được xóa thành công");
      }
    } catch (error) {
      console.error("Lỗi khi xóa tin tức:", error);
      alert("Xóa tin tức thất bại");
    }
  };
  return (
    <TableContainer component={Paper}>
      <h2 style={{ textTransform: "uppercase", margin: "20px 0" }}>
        Danh sách tin tức
      </h2>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hình Ảnh</TableCell>
            <TableCell align="left">Tiêu Đề</TableCell>
            <TableCell>Hành Động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsItems.map((newsItem) => (
            <TableRow key={newsItem.id}>
              <TableCell component="th" scope="row">
                <img
                  src={newsItem.hinhAnh}
                  alt={newsItem.tieude}
                  style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
              </TableCell>
              <TableCell align="left">{newsItem.tieude}</TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteNewsItem(newsItem.id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  style={{ color: "rgb(238, 130, 59)" }}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsList;