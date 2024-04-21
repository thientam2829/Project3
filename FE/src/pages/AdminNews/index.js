// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import EditIcon from "@material-ui/icons/Edit";
// import { useHistory } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from "@material-ui/core";
// import "./style.css";
// const NewsList = () => {
//   const [newsItems, setNewsItems] = useState([]);

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:4000/api/QuanLyTinTuc/LayTatCaTinTuc"
//       );
//       setNewsItems(response.data);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);
//   const handleDeleteNewsItem = async (id) => {
//     9;
//     try {
//       const response = await axios.delete(
//         `http://localhost:4000/api/QuanLyTinTuc/XoaTinTuc/${id}`
//       );
//       if (response.data) {
//         setNewsItems(newsItems.filter((item) => item.id !== id));
//         alert("Tin tức đã được xóa thành công");
//       }
//     } catch (error) {
//       console.error("Lỗi khi xóa tin tức:", error);
//       alert("Xóa tin tức thất bại");
//     }
//   };
//   return (
//     <TableContainer component={Paper}>
//       <h2 style={{ textTransform: "uppercase", margin: "20px 0" }}>
//         Danh sách tin tức
//       </h2>
//       <Table aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Hình Ảnh</TableCell>
//             <TableCell align="left">Tiêu Đề</TableCell>
//             <TableCell>Hành Động</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {newsItems.map((newsItem) => (
//             <TableRow key={newsItem.id}>
//               <TableCell component="th" scope="row">
//                 <img
//                   src={newsItem.hinhAnh}
//                   alt={newsItem.tieude}
//                   style={{
//                     width: "200px",
//                     height: "auto",
//                     borderRadius: "6px",
//                   }}
//                 />
//               </TableCell>
//               <TableCell align="left">{newsItem.tieude}</TableCell>
//               <TableCell>
//                 <IconButton
//                   aria-label="delete"
//                   onClick={() => handleDeleteNewsItem(newsItem.id)}
//                 >
//                   <DeleteForeverIcon />
//                 </IconButton>
//                 <IconButton
//                   aria-label="edit"
//                   style={{ color: "rgb(238, 130, 59)" }}
//                 >
//                   <EditIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default NewsList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
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
import AddNewsForm from "./form";
import "./style.css";
import newsApi from "../../api/newApi";
const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await newsApi.layTatCaTinTuc();
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
      const response = await newsApi.xoaTinTuc(id);
      if (response.data) {
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
          Thêm Tin Tức
        </Button>
      </div>
      <AddNewsForm
        open={showAddForm}
        onClose={() => {
          setShowAddForm(false);
          setCurrentNews(null);
        }}
        onAddOrEditNews={() => {
          fetchNews();
          setShowAddForm(false);
          setCurrentNews(null);
        }}
        currentNews={currentNews}
      />

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
                    width: "100px",
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
                  style={{ color: "#f50057" }}
                >
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton
                  aria-label="edit"
                  style={{ color: "rgb(238, 130, 59)" }}
                  onClick={() => {
                    setCurrentNews(newsItem);
                    setShowAddForm(true);
                  }}
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
