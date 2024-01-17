-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 02:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cosmocinema3`
--

-- --------------------------------------------------------

--
-- Table structure for table `cumrap`
--

CREATE TABLE `cumrap` (
  `cid` int(11) NOT NULL,
  `maCumRap` varchar(255) NOT NULL,
  `tenCumRap` varchar(255) NOT NULL,
  `diaChi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cumrap`
--

INSERT INTO `cumrap` (`cid`, `maCumRap`, `tenCumRap`, `diaChi`) VALUES
(1, 'cosmo-3-2', 'Cosmo Cinemas - Lê Đại Hành', '184 Lê Đại Hành, phường 15, quận 11'),
(2, 'cosmo-bitexco', 'Cosmo Cinemas - Bitexco', 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1'),
(3, 'cosmo-pham-hung', 'Cosmo Cinemas - Phạm Hùng', 'L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh'),
(4, 'cosmo-vincom-le-van-viet', 'Cosmo Cinemas - Vincom Lê Văn Việt', 'L4-Vincom Plaza, 50 Lê Văn Việt, Q.9'),
(5, 'cosmo-vincom-quang-trung', 'Cosmo Cinemas - Vincom Quang Trung', 'B1-Vincom QT, 190 Quang Trung, Gò Vấp'),
(6, 'cosmo-vincom-thao-dien', 'Cosmo Cinemas- Vincom Thảo Điền', 'L5-Megamall, 159 XL Hà Nội, Q.2');

-- --------------------------------------------------------

--
-- Table structure for table `cumrapvalichchieuinsert`
--

CREATE TABLE `cumrapvalichchieuinsert` (
  `clid` int(11) NOT NULL,
  `cumrap` int(11) NOT NULL,
  `lichchieuinsert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cumrapvalichchieuinsert`
--

INSERT INTO `cumrapvalichchieuinsert` (`clid`, `cumrap`, `lichchieuinsert`) VALUES
(1, 1, 15235),
(2, 2, 16531),
(3, 3, 15289),
(4, 4, 15343),
(5, 6, 16532),
(6, 1, 16540),
(7, 3, 16541),
(8, 5, 16542),
(9, 5, 16543),
(10, 5, 16544),
(11, 4, 16545),
(12, 1, 16546),
(13, 5, 16547),
(14, 1, 16548),
(15, 6, 16549),
(16, 2, 16550),
(17, 2, 16551),
(18, 1, 16552),
(19, 3, 16553);

-- --------------------------------------------------------

--
-- Table structure for table `danhsachrap`
--

CREATE TABLE `danhsachrap` (
  `did` int(11) NOT NULL,
  `maRap` varchar(255) NOT NULL,
  `tenRap` varchar(255) NOT NULL,
  `maCumRap` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `danhsachrap`
--

INSERT INTO `danhsachrap` (`did`, `maRap`, `tenRap`, `maCumRap`) VALUES
(1, '451', 'Rạp 1', 1),
(2, '452', 'Rạp 2', 1),
(3, '453', 'Rạp 3', 1),
(4, '454', 'Rạp 4', 1),
(5, '455', 'Rạp 5', 1),
(6, '456', 'Rạp 6', 1),
(7, '457', 'Rạp 7', 1),
(8, '458', 'Rạp 8', 1),
(9, '459', 'Rạp 9', 1),
(10, '460', 'Rạp 10', 1),
(11, '461', 'Rạp 1', 2),
(12, '462', 'Rạp 2', 2),
(13, '463', 'Rạp 3', 2),
(14, '464', 'Rạp 4', 2),
(15, '465', 'Rạp 5', 2),
(16, '466', 'Rạp 6', 2),
(17, '467', 'Rạp 7', 2),
(18, '468', 'Rạp 8', 2),
(19, '469', 'Rạp 9', 2),
(20, '470', 'Rạp 10', 2),
(21, '471', 'Rạp 1', 3),
(22, '472', 'Rạp 2', 3),
(23, '473', 'Rạp 3', 3),
(24, '474', 'Rạp 4', 3),
(25, '475', 'Rạp 5', 3),
(26, '476', 'Rạp 6', 3),
(27, '477', 'Rạp 7', 3),
(28, '478', 'Rạp 8', 3),
(29, '479', 'Rạp 9', 3),
(30, '480', 'Rạp 10', 3),
(31, '481', 'Rạp 1', 4),
(32, '482', 'Rạp 2', 4),
(33, '483', 'Rạp 3', 4),
(34, '484', 'Rạp 4', 4),
(35, '485', 'Rạp 5', 4),
(36, '486', 'Rạp 6', 4),
(37, '487', 'Rạp 7', 4),
(38, '488', 'Rạp 8', 4),
(39, '489', 'Rạp 9', 4),
(40, '490', 'Rạp 10', 4),
(41, '491', 'Rạp 1', 5),
(42, '492', 'Rạp 2', 5),
(43, '493', 'Rạp 3', 5),
(44, '494', 'Rạp 4', 5),
(45, '495', 'Rạp 5', 5),
(46, '496', 'Rạp 6', 5),
(47, '497', 'Rạp 7', 5),
(48, '498', 'Rạp 8', 5),
(49, '499', 'Rạp 9', 5),
(50, '500', 'Rạp 10', 5),
(51, '501', 'Rạp 1', 6),
(52, '502', 'Rạp 2', 6),
(53, '503', 'Rạp 3', 6),
(54, '504', 'Rạp 4', 6),
(55, '505', 'Rạp 5', 6),
(56, '506', 'Rạp 6', 6),
(57, '507', 'Rạp 7', 6),
(58, '508', 'Rạp 8', 6),
(59, '509', 'Rạp 9', 6),
(60, '510', 'Rạp 10', 6);

-- --------------------------------------------------------

--
-- Table structure for table `danhsachvedat`
--

CREATE TABLE `danhsachvedat` (
  `vid` int(11) NOT NULL,
  `maLichChieu` int(11) NOT NULL,
  `taiKhoanNguoiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `danhsachvedatvevm`
--

CREATE TABLE `danhsachvedatvevm` (
  `vmid` int(11) NOT NULL,
  `danhSachVeDatId` int(11) NOT NULL,
  `veVMId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `datve`
--

CREATE TABLE `datve` (
  `maGhe` int(11) NOT NULL,
  `tenGhe` varchar(255) NOT NULL,
  `loaiGhe` varchar(255) NOT NULL,
  `giaVe` double NOT NULL,
  `taiKhoanNguoiDat` varchar(255) NOT NULL,
  `maLichChieu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datve`
--

INSERT INTO `datve` (`maGhe`, `tenGhe`, `loaiGhe`, `giaVe`, `taiKhoanNguoiDat`, `maLichChieu`) VALUES
(26, '26', 'Thuong', 75000, 'admin', 16532),
(31, '31', 'Thuong', 75000, 'admin', 16532),
(42, '42', 'Thuong', 75000, 'admin', 16532),
(43, '43', 'Thuong', 75000, 'admin', 16532),
(44, '44', 'Thuong', 75000, 'admin', 15289),
(45, '45', 'Vip', 90000, 'admin', 16532),
(46, '46', 'Vip', 90000, 'admin', 15289),
(61, '61', 'Vip', 90000, 'admin', 16532),
(63, '63', 'Vip', 90000, 'admin', 16532),
(159, '159', 'Thuong', 75000, 'admin', 16532),
(160, '0', 'Thuong', 75000, 'admin', 16532),
(161, '45', 'Vip', 90000, 'admin', 15289),
(162, '61', 'Vip', 90000, 'admin', 15289),
(163, '77', 'Vip', 90000, 'admin', 15289),
(164, '0', 'Thuong', 75000, 'admin', 15289),
(165, '78', 'Vip', 90000, 'admin', 15289),
(166, '142', 'Thuong', 75000, 'admin', 15289),
(167, '159', 'Thuong', 75000, 'admin', 15289),
(168, '0', 'Vip', 100000, 'okok', 16541),
(169, '1', 'Vip', 100000, 'okok', 16541),
(170, '2', 'Vip', 100000, 'okok', 16541),
(171, '16', 'Vip', 100000, 'okok', 16541),
(172, '17', 'Vip', 100000, 'okok', 16541),
(173, '18', 'Vip', 100000, 'okok', 16541),
(174, '32', 'Vip', 100000, 'okok', 16541),
(175, '33', 'Vip', 100000, 'okok', 16541),
(176, '34', 'Vip', 100000, 'okok', 16541),
(177, '58', 'Vip', 90000, 'okok', 15235),
(178, '59', 'Vip', 90000, 'okok', 15235),
(179, '60', 'Vip', 90000, 'okok', 15235),
(180, '62', 'Vip', 90000, 'okok', 15235),
(181, '73', 'Vip', 90000, 'okok', 15235),
(182, '74', 'Vip', 90000, 'okok', 15235),
(183, '77', 'Vip', 90000, 'okok', 15235),
(184, '78', 'Vip', 90000, 'okok', 15235),
(185, '89', 'Vip', 90000, 'okok', 15235),
(186, '90', 'Thuong', 75000, 'okok', 15235),
(187, '88', 'Vip', 90000, 'okok', 15235),
(188, '26', 'Vip', 100000, 'admin', 16541),
(189, '29', 'Vip', 100000, 'admin', 16541);

-- --------------------------------------------------------

--
-- Table structure for table `hethongrap`
--

CREATE TABLE `hethongrap` (
  `hid` int(11) NOT NULL,
  `maHeThongRap` varchar(255) NOT NULL,
  `tenHeThongRap` varchar(255) NOT NULL,
  `biDanh` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hethongrap`
--

INSERT INTO `hethongrap` (`hid`, `maHeThongRap`, `tenHeThongRap`, `biDanh`, `logo`) VALUES
(1, 'COSMO', 'Cosmo Cinema', 'cosmo', 'https://res.cloudinary.com/thientam2829/image/upload/v1704167236/cinema_i7hluw.png');

-- --------------------------------------------------------

--
-- Table structure for table `hethongrapvacumrap`
--

CREATE TABLE `hethongrapvacumrap` (
  `hcid` int(11) NOT NULL,
  `hethongrap` int(11) NOT NULL,
  `cumrap` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hethongrapvacumrap`
--

INSERT INTO `hethongrapvacumrap` (`hcid`, `hethongrap`, `cumrap`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `hethongrapvaphim`
--

CREATE TABLE `hethongrapvaphim` (
  `hpid` int(11) NOT NULL,
  `maHeThongRap` int(11) NOT NULL,
  `maPhim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hethongrapvaphim`
--

INSERT INTO `hethongrapvaphim` (`hpid`, `maHeThongRap`, `maPhim`) VALUES
(4, 1, 1284),
(5, 1, 1283),
(6, 1, 1345),
(7, 1, 1346),
(9, 1, 1348),
(10, 1, 1282),
(11, 1, 1349),
(13, 1, 1337),
(14, 1, 1352),
(16, 1, 1354),
(17, 1, 1355);

-- --------------------------------------------------------

--
-- Table structure for table `laythongtincanhanvm`
--

CREATE TABLE `laythongtincanhanvm` (
  `id` int(11) NOT NULL,
  `taiKhoan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lichchieuinsert`
--

CREATE TABLE `lichchieuinsert` (
  `maLichChieu` int(11) NOT NULL,
  `ngayChieuGioChieu` varchar(255) NOT NULL,
  `maRap` int(11) NOT NULL,
  `tenRap` varchar(255) NOT NULL,
  `giaVe` double NOT NULL,
  `thoiLuong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lichchieuinsert`
--

INSERT INTO `lichchieuinsert` (`maLichChieu`, `ngayChieuGioChieu`, `maRap`, `tenRap`, `giaVe`, `thoiLuong`) VALUES
(15235, '19/12/2023 14:54:00', 451, 'Rạp 1', 75000, 120),
(15289, '19/12/2023 14:54:00', 452, 'Rạp 2', 75000, 120),
(15343, '19/12/2023 14:54:00', 453, 'Rạp 3', 75000, 120),
(16531, '19/12/2023 14:54:00', 475, 'Rạp 5', 75000, 120),
(16532, '19/12/2023 14:54:00', 476, 'Rạp 6', 75000, 120),
(16540, '19/12/2023 14:54:00', 460, 'Rạp 10', 75000, 120),
(16541, '10/05/2023 14:54:00', 472, 'Rạp 2', 100000, 120),
(16542, '16/05/2023 11:03:00', 498, 'Rạp 8', 75000, 120),
(16543, '16/05/2023 11:03:00', 498, 'Rạp 8', 75000, 120),
(16544, '19/12/2023 20:40:00', 494, 'Rạp 4', 75000, 120),
(16545, '11/01/2024 14:04:00', 482, 'Rạp 2', 100000, 120),
(16546, '10/01/2024 15:19:00', 460, 'Rạp 10', 150000, 120),
(16547, '12/01/2024 16:48:00', 493, 'Rạp 3', 100000, 120),
(16548, '19/01/2024 15:00:00', 458, 'Rạp 8', 120000, 120),
(16549, '20/01/2024 16:20:00', 504, 'Rạp 4', 150000, 120),
(16550, '16/01/2024 16:30:00', 465, 'Rạp 5', 75000, 120),
(16551, '16/01/2024 16:25:00', 461, 'Rạp 1', 120000, 120),
(16552, '15/01/2024 18:26:00', 451, 'Rạp 1', 120000, 120),
(16553, '15/01/2024 16:17:00', 473, 'Rạp 3', 100000, 120);

-- --------------------------------------------------------

--
-- Table structure for table `nguoidungvm`
--

CREATE TABLE `nguoidungvm` (
  `id` int(11) NOT NULL,
  `taiKhoan` varchar(255) NOT NULL,
  `matKhau` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `soDt` varchar(255) NOT NULL,
  `maNhom` varchar(255) NOT NULL,
  `maLoaiNguoiDung` varchar(255) NOT NULL,
  `hoTen` varchar(255) NOT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `daXacThuc` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nguoidungvm`
--

INSERT INTO `nguoidungvm` (`id`, `taiKhoan`, `matKhau`, `email`, `soDt`, `maNhom`, `maLoaiNguoiDung`, `hoTen`, `otp`, `daXacThuc`) VALUES
(5, 'user2', '098f6bcd4621d373cade4e832627b4f6', 'user2@gmail.com', '0659824511', 'GP09', 'KhachHang', 'Thien2', NULL, 0),
(6, 'plz', 'e10adc3949ba59abbe56e057f20f883e', 'plz@gmail.com', '0654235988', 'GP09', 'KhachHang', 'plz', NULL, 0),
(16, 'final', '202cb962ac59075b964b07152d234b70', 'final@gmail.com', '0654748511', 'GP09', 'KhachHang', 'final', NULL, 0),
(17, 'ttt', '9990775155c3518a0d7917f7780b24aa', 'ttt@gmail.com', '0654859688', 'GP09', 'KhachHang', 'ttt', NULL, 0),
(18, 'done', '202cb962ac59075b964b07152d234b70', 'done@gmail.com', '0865474855', 'GP09', 'KhachHang', 'done', NULL, 0),
(19, 'dones', '202cb962ac59075b964b07152d234b70', 'dones@gmail.com', '0548745155', 'GP09', 'KhachHang', 'dones', NULL, 0),
(20, 'zzz', '202cb962ac59075b964b07152d234b70', 'zzz@gmail.com', '0654812577', 'GP09', 'KhachHang', 'zzz', NULL, 0),
(21, 'swal', '202cb962ac59075b964b07152d234b70', 'swal@gmail.com', '0541258488', 'GP09', 'KhachHang', 'swal', NULL, 0),
(24, 'uaalo', '74c43b7ec689955c9c1517294e92500f', 'khanh@gmail.com', '0987898789', 'GP09', 'QuanTri', 'khanh', NULL, 0),
(25, 'testttt', 'e10adc3949ba59abbe56e057f20f883e', 'hihi@gmail.com', '0877979', 'GP09', 'KhachHang', 'hihihih', NULL, 0),
(26, 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin@gmail.com', '099356765', 'GP09', 'QuanTri', 'khanhnguyen', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `phiminsert`
--

CREATE TABLE `phiminsert` (
  `maPhim` int(11) NOT NULL,
  `tenPhim` varchar(255) NOT NULL,
  `biDanh` varchar(255) NOT NULL,
  `trailer` varchar(255) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `moTa` varchar(255) NOT NULL,
  `daoDien` varchar(255) DEFAULT NULL,
  `dienVien` varchar(255) DEFAULT NULL,
  `quocGia` varchar(255) DEFAULT NULL,
  `theLoai` varchar(255) DEFAULT NULL,
  `dinhDang` varchar(255) DEFAULT NULL,
  `maNhom` varchar(255) NOT NULL,
  `ngayKhoiChieu` varchar(255) NOT NULL,
  `danhGia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phiminsert`
--

INSERT INTO `phiminsert` (`maPhim`, `tenPhim`, `biDanh`, `trailer`, `hinhAnh`, `moTa`, `daoDien`, `dienVien`, `quocGia`, `theLoai`, `dinhDang`, `maNhom`, `ngayKhoiChieu`, `danhGia`) VALUES
(1282, 'Bàn Tay Diệt Quỷ', 'ban-tay-diet-quy', 'https://www.youtube.com/watch?v=xOgySa1AJRk', 'https://res.cloudinary.com/thientam2829/image/upload/v1703561285/163874001_4284368834921028_5814864480728608284_n_wbvsk8.jpg', 'Một võ sĩ MMA nọ tung ra những cú đấm vì chính nghĩa khi một linh mục trừ tà giúp anh khám phá sức mạnh thần thánh trong lòng bàn tay.', NULL, NULL, NULL, NULL, NULL, 'GP09', '10/1/2024', 5),
(1283, 'Lật Mặt : 48h', 'lật-mặt-:-48h', 'https://www.youtube.com/embed/w3VI43L_Mn8', 'http://res.cloudinary.com/thientam2829/image/upload/v1704956471/rh1kk4nq1nueromtra7m.jpg', 'Phải chạy trốn khỏi băng nhóm tội phạm sau một giao dịch nhầm lẫn, tay võ sĩ đã giải nghệ có 2 ngày để giải quyết ân oán với tên trùm. Nếu thất bại, anh có thể mất cả vợ lẫn con.', NULL, NULL, NULL, NULL, NULL, 'GP09', 'Invalid Date', 5),
(1284, 'Cuộc Chiến Sinh Tử', 'cuoc-chien-sinh-tu-abc', 'https://www.youtube.com/embed/_rUC3-pNLyc', 'http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg', 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.', NULL, NULL, NULL, NULL, NULL, 'GP09', '19/12/2023', 6),
(1337, 'Hậu Cung Chân Hoàn Truyện', 'chan-hoan-truyen', 'https://www.youtube.com/watch?v=GwLG8dIz8z0', 'https://res.cloudinary.com/thientam2829/image/upload/v1704765171/wx5adrvszk6gooelwqia.jpg', 'Trung Hoa năm 1722, tại nơi hậu cung thối nát đầy những dối trá, lọc lừa, các phi tần sẵn sàng trả mọi giá để có được quyền uy và sự sủng ái của Hoàng đế.', NULL, NULL, NULL, NULL, NULL, 'GP09', '20/1/2024', 5),
(1345, 'Tấm vé định mệnh (Lật mặt 6) ', 'tấm-vé-định-mệnh-(lật-mặt-6)', 'https://www.youtube.com/embed/2EnP2tVC00Q', 'http://res.cloudinary.com/khanhbatluc/image/upload/v1684209323/kil5ymkubhn2zfinxz3d.jpg', '  Lý Hải\n  Lý Hải, Quốc Cường, Trung Dũng, Huy Khánh, Thanh Thức, Trần Kim Hải, Huỳnh Thi, Diệp Bảo Ngọc, Tú Tri, Quỳnh Như, Tạ Lâm, bé Thùy Linh…\n  Hài, Hành Động, Hồi hộp, Tâm Lý\n  28/04/2023\n  132 phút\n  Tiếng Việt - Phụ đề Tiếng Anh\n  C16 - PHIM ĐƯỢC ', NULL, NULL, NULL, NULL, NULL, 'GP09', 'Invalid Date', 5),
(1346, 'VỆ BINH DẢI NGÂN HÀ 3', 'vệ-binh-dải-ngân-hà-3', 'https://www.youtube.com/embed/2EnP2tVC00Q', 'http://res.cloudinary.com/khanhbatluc/image/upload/v1684209482/de866pt5wwttl7e4ex4t.png', 'James Gunn\n  Chris Pratt, Zoe Saldana, Dave Bautista\n  Hành Động, Phiêu Lưu, Thần thoại\n  03/05/2023\n  149 phút\n  Tiếng Anh - Phụ đề Tiếng Việt\n  C13 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 13 TUỔI TRỞ LÊN (13+)', NULL, NULL, NULL, NULL, NULL, 'GP09', '19/12/2023', 5),
(1348, 'Kẻ ăn hồn', 'kẻ-ăn-hồn', 'https://www.youtube.com/embed/w3VI43L_Mn8', 'http://res.cloudinary.com/khanhbatluc/image/upload/v1702888839/pjawyy2mywmgdoav9pno.jpg', 'Suất chiếu sớm kẻ ăn hồn đem đến sự kinh dị cho người xem gay cấn đến phút cuois cungfm rất ám ảnh người xem.', NULL, NULL, NULL, NULL, NULL, 'GP09', '20/12/2023', 5),
(1349, 'Tết ở Làng địa ngục', 'tết-ở-làng-địa-ngục', 'https://www.youtube.com/watch?v=C2V38ghWHlQ', 'http://res.cloudinary.com/thientam2829/image/upload/v1704956529/okiiqyylfz1hhlu2osvz.jpg', 'Các hậu duệ của một băng cướp khét tiếng điều tra hàng loạt án mạng tàn bạo ở làng của họ. Liệu đây là nghiệp chướng hay \"tác phẩm\" của kẻ báo thù?', NULL, NULL, NULL, NULL, NULL, 'GP09', '11/01/2024', 5),
(1352, 'Những Bác Sĩ Tài Hoa', 'nhung-bac-si-tai-hoa', 'https://www.youtube.com/watch?v=xqIM2cenBAs', 'https://res.cloudinary.com/thientam2829/image/upload/v1704964251/lacwxtxjznu4phqgmrg8.png', 'Năm bác sĩ – là những người bạn từ thời còn ở trường y – cùng tái hợp ở một bệnh viện với tư cách là đồng nghiệp trong mảng khách hàng VIP.', 'Shin Won Ho,Lee Woo Jung', 'Cho Jung Seok,Yoo Yeon Seok,Jung Kyung Ho...', 'Hàn Quốc', 'Chính Kịch', '2D', 'GP09', '15/1/2024', 10),
(1354, 'Nhà Vịt Di Cư', 'nhà-vịt-di-cư', 'https://www.youtube.com/watch?v=Ua0Z19hNR2M', 'http://res.cloudinary.com/thientam2829/image/upload/v1705307528/mgkda2t8lnhgeeyj2qm8.jpg', 'Bộ phim đã hé lộ về chuyến phiêu lưu đầy thú vị và nhiều sắc màu của đàn vịt trời. Đến mùa di cư, những đàn vịt nối đuôi nhau bay lượn vô cùng nhộn nhịp trên bầu trời. Một gia đình vịt nọ được dẫn dắt bởi vịt bố, cũng đã sẵn sàng “cất cánh” cho chuyến bay', 'Benjamin Renner', 'Kumail Nanjiani, Elizabeth Banks, Caspar Jennings, Tresi Gazal, Awkwafina,…', 'Mỹ', 'Hoạt Hình', '2D', 'GP09', '15/01/2024', 5),
(1355, 'Rượu Cốt Người', 'rượu-cốt-người', 'https://www.youtube.com/watch?v=NU26G3rOIZo', 'http://res.cloudinary.com/thientam2829/image/upload/v1705310285/egqittnxlultaozzvf5z.jpg', 'Trương Tử Kiệt (Lư Hãn Đình), một chàng trai quyết định tham gia tour du lịch trên đảo hoang cùng bạn bè để quên đi nỗi đau trước cái chết đột ngột của bạn gái Ava (Viên Lễ Lâm). Nhưng chuyến hành trình về miền hoang dã lại không vui như kì vọng. Bốn ngườ', 'Sầm Gia Ngạn', ' Lư Hãn Đình, Viên Lễ Lâm, Khương Đại Vệ,…', 'Trung Quốc', 'Kinh Dị', '2D', 'GP09', '15/01/2024', 5);

-- --------------------------------------------------------

--
-- Table structure for table `phiminsertvalichchieuinsert`
--

CREATE TABLE `phiminsertvalichchieuinsert` (
  `plid` int(11) NOT NULL,
  `phiminsert` int(11) NOT NULL,
  `lichchieuinsert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phiminsertvalichchieuinsert`
--

INSERT INTO `phiminsertvalichchieuinsert` (`plid`, `phiminsert`, `lichchieuinsert`) VALUES
(4, 1284, 15343),
(5, 1283, 15235),
(11, 1283, 16541),
(12, 1345, 16542),
(13, 1346, 16543),
(15, 1348, 16545),
(16, 1282, 16546),
(17, 1349, 16547),
(19, 1337, 16549),
(20, 1352, 16550),
(22, 1354, 16552),
(23, 1355, 16553);

-- --------------------------------------------------------

--
-- Table structure for table `thongtindangnhapvm`
--

CREATE TABLE `thongtindangnhapvm` (
  `id` int(11) DEFAULT NULL,
  `taiKhoan` varchar(255) NOT NULL,
  `matKhau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vevm`
--

CREATE TABLE `vevm` (
  `id` int(11) NOT NULL,
  `maGhe` int(11) NOT NULL,
  `giaVe` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cumrap`
--
ALTER TABLE `cumrap`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `cumrapvalichchieuinsert`
--
ALTER TABLE `cumrapvalichchieuinsert`
  ADD PRIMARY KEY (`clid`),
  ADD KEY `cumraps` (`cumrap`),
  ADD KEY `lichchieuinsert` (`lichchieuinsert`);

--
-- Indexes for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  ADD PRIMARY KEY (`did`),
  ADD KEY `maCumRap` (`maCumRap`);

--
-- Indexes for table `danhsachvedat`
--
ALTER TABLE `danhsachvedat`
  ADD PRIMARY KEY (`vid`);

--
-- Indexes for table `danhsachvedatvevm`
--
ALTER TABLE `danhsachvedatvevm`
  ADD PRIMARY KEY (`vmid`),
  ADD KEY `danhSachVeDatId` (`danhSachVeDatId`),
  ADD KEY `veVMId` (`veVMId`);

--
-- Indexes for table `datve`
--
ALTER TABLE `datve`
  ADD PRIMARY KEY (`maGhe`),
  ADD KEY `mlc` (`maLichChieu`);

--
-- Indexes for table `hethongrap`
--
ALTER TABLE `hethongrap`
  ADD PRIMARY KEY (`hid`);

--
-- Indexes for table `hethongrapvacumrap`
--
ALTER TABLE `hethongrapvacumrap`
  ADD PRIMARY KEY (`hcid`),
  ADD KEY `hethongrap` (`hethongrap`),
  ADD KEY `cumrap` (`cumrap`);

--
-- Indexes for table `hethongrapvaphim`
--
ALTER TABLE `hethongrapvaphim`
  ADD PRIMARY KEY (`hpid`),
  ADD KEY `maHeThongRap` (`maHeThongRap`),
  ADD KEY `maPhim` (`maPhim`);

--
-- Indexes for table `laythongtincanhanvm`
--
ALTER TABLE `laythongtincanhanvm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lichchieuinsert`
--
ALTER TABLE `lichchieuinsert`
  ADD PRIMARY KEY (`maLichChieu`);

--
-- Indexes for table `nguoidungvm`
--
ALTER TABLE `nguoidungvm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phiminsert`
--
ALTER TABLE `phiminsert`
  ADD PRIMARY KEY (`maPhim`);

--
-- Indexes for table `phiminsertvalichchieuinsert`
--
ALTER TABLE `phiminsertvalichchieuinsert`
  ADD PRIMARY KEY (`plid`),
  ADD UNIQUE KEY `lichchieuinsert` (`lichchieuinsert`),
  ADD KEY `cphim` (`phiminsert`);

--
-- Indexes for table `vevm`
--
ALTER TABLE `vevm`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cumrap`
--
ALTER TABLE `cumrap`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cumrapvalichchieuinsert`
--
ALTER TABLE `cumrapvalichchieuinsert`
  MODIFY `clid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `danhsachvedat`
--
ALTER TABLE `danhsachvedat`
  MODIFY `vid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danhsachvedatvevm`
--
ALTER TABLE `danhsachvedatvevm`
  MODIFY `vmid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `datve`
--
ALTER TABLE `datve`
  MODIFY `maGhe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;

--
-- AUTO_INCREMENT for table `hethongrap`
--
ALTER TABLE `hethongrap`
  MODIFY `hid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hethongrapvacumrap`
--
ALTER TABLE `hethongrapvacumrap`
  MODIFY `hcid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hethongrapvaphim`
--
ALTER TABLE `hethongrapvaphim`
  MODIFY `hpid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `laythongtincanhanvm`
--
ALTER TABLE `laythongtincanhanvm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lichchieuinsert`
--
ALTER TABLE `lichchieuinsert`
  MODIFY `maLichChieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16554;

--
-- AUTO_INCREMENT for table `nguoidungvm`
--
ALTER TABLE `nguoidungvm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `phiminsert`
--
ALTER TABLE `phiminsert`
  MODIFY `maPhim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1356;

--
-- AUTO_INCREMENT for table `phiminsertvalichchieuinsert`
--
ALTER TABLE `phiminsertvalichchieuinsert`
  MODIFY `plid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `vevm`
--
ALTER TABLE `vevm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cumrapvalichchieuinsert`
--
ALTER TABLE `cumrapvalichchieuinsert`
  ADD CONSTRAINT `cumraps` FOREIGN KEY (`cumrap`) REFERENCES `cumrap` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lichchieuinsert` FOREIGN KEY (`lichchieuinsert`) REFERENCES `lichchieuinsert` (`maLichChieu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  ADD CONSTRAINT `maCumRap` FOREIGN KEY (`maCumRap`) REFERENCES `cumrap` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `danhsachvedatvevm`
--
ALTER TABLE `danhsachvedatvevm`
  ADD CONSTRAINT `danhSachVeDatId` FOREIGN KEY (`danhSachVeDatId`) REFERENCES `danhsachvedat` (`vid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `veVMId` FOREIGN KEY (`veVMId`) REFERENCES `vevm` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `datve`
--
ALTER TABLE `datve`
  ADD CONSTRAINT `mlc` FOREIGN KEY (`maLichChieu`) REFERENCES `lichchieuinsert` (`maLichChieu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hethongrapvacumrap`
--
ALTER TABLE `hethongrapvacumrap`
  ADD CONSTRAINT `cumrap` FOREIGN KEY (`cumrap`) REFERENCES `cumrap` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hethongrap` FOREIGN KEY (`hethongrap`) REFERENCES `hethongrap` (`hid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hethongrapvaphim`
--
ALTER TABLE `hethongrapvaphim`
  ADD CONSTRAINT `maHeThongRap` FOREIGN KEY (`maHeThongRap`) REFERENCES `hethongrap` (`hid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `maPhim` FOREIGN KEY (`maPhim`) REFERENCES `phiminsert` (`maPhim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `phiminsertvalichchieuinsert`
--
ALTER TABLE `phiminsertvalichchieuinsert`
  ADD CONSTRAINT `clichchieu` FOREIGN KEY (`lichchieuinsert`) REFERENCES `lichchieuinsert` (`maLichChieu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cphim` FOREIGN KEY (`phiminsert`) REFERENCES `phiminsert` (`maPhim`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
