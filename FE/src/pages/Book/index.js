import { useEffect, useState } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axiosClient from "../../api/axiosClient";

const Movie = () => {
    const [listBook, setBook] = useState([]);

    const getBooking = () => {
        const path = "/getBooking";
        return axiosClient.get(path); 
    }
    
    
    useEffect(() => {
        getBooking().then((e) => {
            setBook(e.data)
        })
    },[])

    return (
        <div style={{ height: "100vh", paddingBottom: '150px' }}>
            <h2 style={{ textTransform : 'uppercase', margin: '20px' }}>Danh sách đặt chỗ</h2>
<TableContainer component={Paper}>
      <Table sx={{ width: 650 }} style={{ msOverflowY : 'scroll', margin : '20px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width : '100px' }}>Mã ghế</TableCell>
            <TableCell align="right">Rạp</TableCell>
            <TableCell align="right">Tên Người đặt</TableCell>
            <TableCell align="right">Loại ghế</TableCell>
            <TableCell align="right">Ngày giờ chiếu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listBook.map((row) => (
            <TableRow
              key={row.maGhe}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ width : '100px' }} component="th" scope="row">
                {row.maGhe}
              </TableCell>
                  <TableCell  align="right">{row.maRap} - {row.tenRap }</TableCell>
              <TableCell align="right">{row.taiKhoanNguoiDat}</TableCell>
              <TableCell align="right">{row.loaiGhe}</TableCell>
              <TableCell align="right">{row.ngayChieuGioChieu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </TableContainer>
        
        </div>

    )
}

export default Movie