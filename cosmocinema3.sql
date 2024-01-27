-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2024 at 11:56 AM
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
(19, 3, 16553),
(24, 6, 16558);

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
(189, '29', 'Vip', 100000, 'admin', 16541),
(190, '90', 'Vip', 150000, 'admin', 16546),
(191, '91', 'Vip', 150000, 'admin', 16546),
(192, '92', 'Vip', 150000, 'thientam', 16546),
(193, '93', 'Vip', 150000, 'thientam', 16546),
(194, '94', 'Vip', 150000, 'thientam', 16546);

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
(9, 1, 1348),
(10, 1, 1282),
(11, 1, 1349),
(13, 1, 1337),
(14, 1, 1352),
(16, 1, 1354),
(17, 1, 1355),
(19, 1, 1342);

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
(16553, '15/01/2024 16:17:00', 473, 'Rạp 3', 100000, 120),
(16558, '27/01/2024 15:20:00', 502, 'Rạp 2', 100000, 120);

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
(26, 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin@gmail.com', '099356765', 'GP09', 'QuanTri', 'ADMIN', NULL, 1),
(33, 'thientam', 'e10adc3949ba59abbe56e057f20f883e', 'thientam2829@gmail.com', '0763344621', 'GP09', 'KhachHang', 'Nguyen Thien Tam', NULL, 1),
(38, 'thientam2829', 'e10adc3949ba59abbe56e057f20f883e', 'tamnt.124010121035@vtc.edu.vn', '0763344621', 'GP09', 'KhachHang', 'ABC', '513952', 0);

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
  `moTa` varchar(500) NOT NULL,
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
(1282, 'Bàn Tay Diệt Quỷ', 'ban-tay-diet-quy', 'https://www.youtube.com/watch?v=xOgySa1AJRk', 'https://res.cloudinary.com/thientam2829/image/upload/v1703561285/163874001_4284368834921028_5814864480728608284_n_wbvsk8.jpg', 'Một võ sĩ MMA nọ tung ra những cú đấm vì chính nghĩa khi một linh mục trừ tà giúp anh khám phá sức mạnh thần thánh trong lòng bàn tay.', 'Kim Joo-Hwan', 'Park Seo Jun,Ahn Sung Ki,Woo Do Hwan', 'Hàn Quốc', 'Hành Động', '2D', 'GP09', '01/10/2024', 5),
(1337, 'Hậu Cung Chân Hoàn Truyện', 'chan-hoan-truyen', 'https://www.youtube.com/watch?v=vWfRK1_YRh4', 'https://res.cloudinary.com/thientam2829/image/upload/v1704765171/wx5adrvszk6gooelwqia.jpg', 'Trung Hoa năm 1722, tại nơi hậu cung thối nát đầy những dối trá, lọc lừa, các phi tần sẵn sàng trả mọi giá để có được quyền uy và sự sủng ái của Hoàng đế.', 'Trịnh Hiểu Long', 'Tôn Lệ,Trần Kiến Bân,Thái Thiếu Phân...', 'Trung Quốc', 'Chính Kịch', '2D', 'GP09', '08/01/2024', 5),
(1342, 'Quỷ Cẩu', 'quỷ-cẩu', 'https://www.youtube.com/watch?v=cYCOcxWgPVU', 'http://res.cloudinary.com/thientam2829/image/upload/v1706346799/q0gjmhqqynjwcjevc2kk.jpg', 'Nam về quê để lo đám tang cho bố sau cái chết kinh hoàng của ông, trong khi phải che giấu bạn gái đang mang thai. Nam mơ thấy gia đình bị giết sau khi mai táng bố, và Mít – con chó trắng của gia đình có biểu hiện kì lạ. Ông Quyết, bà Thúy, và bà Liễu thì tin vào thầy cúng, còn Nam nghi ngờ về lò mổ chó truyền thống của gia đình và phải điều tra để giải quyết sự kiện kỳ lạ đang diễn ra.', 'Lưu Thành Luân', ' Quang Tuấn, NSND Kim Xuân, Vân Dung, Quốc Quân, Nam Thư, Mie….', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', 'Invalid Date', 5),
(1348, 'Kẻ ăn hồn', 'kẻ-ăn-hồn', 'https://www.youtube.com/embed/w3VI43L_Mn8', 'http://res.cloudinary.com/khanhbatluc/image/upload/v1702888839/pjawyy2mywmgdoav9pno.jpg', 'Suất chiếu sớm kẻ ăn hồn đem đến sự kinh dị cho người xem gay cấn đến phút cuois cungfm rất ám ảnh người xem.', 'Trần Hữu Tấn', 'Hoàng Hà, Võ Điền Gia Huy, Huỳnh Thanh Trực, NSƯT Chiều Xuân, Nghệ sĩ Viết Liên, NSND Ngọc Thư, Nguyễn Hữu Tiến, Nguyễn Phước Lộc, Nghinh Lộc, Lý Hồng Ân, Vũ Đức Ngọc…', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '02/01/2024', 5),
(1349, 'Tết ở Làng địa ngục', 'tết-ở-làng-địa-ngục', 'https://www.youtube.com/watch?v=C2V38ghWHlQ', 'http://res.cloudinary.com/thientam2829/image/upload/v1704956529/okiiqyylfz1hhlu2osvz.jpg', 'Các hậu duệ của một băng cướp khét tiếng điều tra hàng loạt án mạng tàn bạo ở làng của họ. Liệu đây là nghiệp chướng hay \"tác phẩm\" của kẻ báo thù?', 'Trần Hữu Tấn', 'Quang Tuấn,Phú Đôn,Võ Tấn Phát...', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '01/11/2024', 5),
(1352, 'Những Bác Sĩ Tài Hoa', 'nhung-bac-si-tai-hoa', 'https://www.youtube.com/watch?v=xqIM2cenBAs', 'https://res.cloudinary.com/thientam2829/image/upload/v1704964251/lacwxtxjznu4phqgmrg8.png', 'Năm bác sĩ – là những người bạn từ thời còn ở trường y – cùng tái hợp ở một bệnh viện với tư cách là đồng nghiệp trong mảng khách hàng VIP.', 'Shin Won Ho,Lee Woo Jung', 'Cho Jung Seok,Yoo Yeon Seok,Jung Kyung Ho...', 'Hàn Quốc', 'Chính Kịch', '2D', 'GP09', '15/1/2024', 10),
(1354, 'Nhà Vịt Di Cư', 'nhà-vịt-di-cư', 'https://www.youtube.com/watch?v=Ua0Z19hNR2M', 'http://res.cloudinary.com/thientam2829/image/upload/v1705307528/mgkda2t8lnhgeeyj2qm8.jpg', 'Nhà Vịt Di Cư theo chân một gia đình vịt trời gồm vịt bố, vịt mẹ, cậu con trai tuổi teen Dax và vịt út Gwen, trong lần đầu tiên trải nghiệm chuyến di cư tiến về phía nam để trú đông. Thế nhưng, niềm vui vẻ sự háo hức kéo dài không bao lâu, gia đình vịt nhận ra, họ đang bay ngược chiều với tất cả các đàn vịt khác.Không kịp quay đầu, họ bất ngờ gặp phải loạt “chướng ngại vật” là những tòa nhà cao tầng của thành phố hiện đại.Liên tiếp sau đó là những thước phim đầy kịch tính nhưng vô cùng hài hước.', 'Benjamin Renner', 'Kumail Nanjiani, Elizabeth Banks, Caspar Jennings, Tresi Gazal, Awkwafina,…', 'Mỹ', 'Hoạt Hình', '2D', 'GP09', '27/1/2024', 5),
(1355, 'Rượu Cốt Người', 'rượu-cốt-người', 'https://www.youtube.com/watch?v=NU26G3rOIZo', 'http://res.cloudinary.com/thientam2829/image/upload/v1705310285/egqittnxlultaozzvf5z.jpg', 'Trương Tử Kiệt (Lư Hãn Đình), một chàng trai quyết định tham gia tour du lịch trên đảo hoang cùng bạn bè để quên đi nỗi đau trước cái chết đột ngột của bạn gái Ava (Viên Lễ Lâm). Nhưng chuyến hành trình về miền hoang dã lại không vui như kì vọng. Bốn người bạn bắt đầu gặp thấy những điều kì lạ, rồi những sự kiện siêu nhiên đáng sợ lần lượt xảy ra. Không lâu sau, họ phát hiện sự tồn tại của một thế lực tà ác cổ xưa và nó đang rình rập, theo dõi họ mọi lúc mọi nơi. Chuyến đi tưởng chừng rất vui vẻ', 'Sầm Gia Ngạn', ' Lư Hãn Đình, Viên Lễ Lâm, Khương Đại Vệ,…', 'Trung Quốc', 'Kinh Dị', '2D', 'GP09', 'Invalid Date', 5);

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
(15, 1348, 16545),
(16, 1282, 16546),
(17, 1349, 16547),
(19, 1337, 16549),
(20, 1352, 16550),
(22, 1354, 16552),
(23, 1355, 16553),
(28, 1342, 16558);

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
-- Table structure for table `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL,
  `tieude` varchar(250) NOT NULL,
  `noidung` text NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `ngaydang` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tintuc`
--

INSERT INTO `tintuc` (`id`, `tieude`, `noidung`, `hinhAnh`, `ngaydang`) VALUES
(1, '[Review] Migration: Nhà Vịt Có Đủ Sức Thành Hiện Tượng Như Minions?', 'Từ ngày Minions trở thành hiện tượng toàn cầu, độ nổi tiếng của studio Illumination cũng tăng theo cấp số nhân.<br> <br> Ngoài việc chú trọng vào phát triển các phim hoạt hình liên quan đến những quả chuối biết đi như Despicable Me và Minions, Illumination mạnh tay đầu tư cho các phim hoạt hình khác. Họ không ngại thử sức đề tài mới như The Secret Life Of Pets, The Grinch và Sing.<br><br> Tất cả đều đạt thành công lớn. Đẳng Cấp Thú Cưng và Đấu Trường Âm Nhạc đều ra mắt phần mới và tiếp tục được khán giả toàn cầu ủng hộ.<br><br> Lần này, Illumination tiếp tục đưa khán giả khám phá cuộc sống của các động vật hoang dã trong Migration.<br><br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706060544/lhzplreubaruluhahvw1.webp\" alt=\"News\" /> <br><br> Ở vùng ao yên bình nọ thuộc vùng New England, ngày qua ngày, gia đình vịt cổ xanh Mack sống vui vẻ bên nhau. Vịt bố Mack luôn chú trọng dạy các con tránh xa nguy hiểm, rằng chim diệc là kẻ săn mồi nguy hiểm, ngoài nơi chúng sống thì không nên đi đâu cả.Tuy nhiên, vào buổi nọ, lời răn đe mang tính lí thuyết của Mack trở nên lung lay khi đàn vịt di trú bay ngang qua. Câu chuyện kể về vùng đất Jamaica xa xôi, ấm áp với dòng nước phát sáng khiến vịt mẹ Pam và hai vịt con Dax – Gwen khao khát đi xa. Dĩ nhiên, vì bản tính thích an toàn, Mack làm sao đồng ý nổi. Sau một hồi tranh cãi, rốt cuộc, vịt bố phải chịu thua ba mẹ con. Cả nhà Mack cùng người chú Dan quyết định tới Jamaica mở mang tầm mắt! Chuyến phiêu lưu khởi đầu rất thuận lợi. Thế nhưng, do lần đầu ra khỏi nơi cư trú, nhà vịt đã bay nhầm đường. Thay vì đến Jamaica, chúng bay nhầm vào… thành phố New York!<br><br> Sau Sing (2016), Migration là tác phẩm gốc đầu tiên của Illumination, không phải hậu truyện hoặc chuyển thể. Nhờ kinh nghiệm dày dặn từ The Secret Life Of Pets và Sing, chẳng quá khó khăn cho ekip Illumination thực hiện bộ phim thứ 14 với nhân vật chính là động vật. Những chú vịt thân thiện, hiền lành, “nhà quê” (theo lời bồ câu Chump). Mỗi thành viên nhà Mack có điểm mạnh lẫn điểm yếu, điểm tốt và chưa tốt dần hiện ra trên chuyến hành trình. Mâu thuẫn âm ỉ trong gia đình cũng bùng lên thông qua biến cố. Tuy nhiên, nhà vịt luôn yêu thương nhau và cùng vượt qua hoạn nạn. <br><br> Migration khai thác đề tài “nhà vịt di cư” nghe qua khá mới lạ nhưng tựu trung vẫn là bình mới rượu cũ. Gia đình đoàn kết vượt qua khó khăn và đối diện với nỗi sợ bản thân để khám phá khía cạnh mới trong cuộc sống đều là hai đề tài quen thuộc của bộ môn nghệ thuật thứ 7. Dẫu vậy, phim ghi điểm bởi lối kể chuyện gãy gọn, súc tích. Các tình huống giải quyết nhanh gọn. Từ trẻ em đến người lớn, ai cũng dễ dàng hiểu được và cảm được.<br><br> Đạo diễn kiêm biên kịch phim Benjamin Renner mô tả Migration như phim kinh điển Little Miss Sunshine phiên bản vịt. Dĩ nhiên, mọi mâu thuẫn rắc rối đều giảm nhẹ hết cỡ. Phim tương tự The Secret Life Of Pets, cách giải quyết vấn đề theo hướng “logic phim hoạt hình” – chẳng theo logic nào cả. Người xem sẽ có dịp cười lăn cười bò, cười rung cả ghế rạp chiếu phim bởi hàng tá bất ngờ mà Migration mang lại. Những quy luật tự nhiên gần như vô nghĩa, hệt như cách Minions phụng sự cho Napoleon hay lên làm lãnh đạo Anh quốc nhờ rút được thanh gươm báu.<br><br> Chính vì vậy, so với Sing, Migration ít tình huống cảm động rơi nước mắt. Các nhân vật hài hước, đơn giản và “vô tri”. Mâu thuẫn gia đình, vợ chồng, cha mẹ - con gái hay sự bướng bỉnh tuổi dậy thì trôi tuột trên màn ảnh, những tình tiết hài hước ấn tượng hơn. Ngược lại, đồ họa của Migration thật sự là thử thách với ekip làm phim. Thiết kế sản xuất Colin Stimpson mô tả: “Vịt là sinh vật kì lạ, cực kì phức tạp và bề ngoài rất giống nhau.” Benjamin Renner kể rằng anh cùng năm chục họa sĩ hãng Illumination đã dày công nghiên cứu loài vịt để thực hiện dự án. Cuối cùng, ekip cũng tạo ra gia đình Mack – Pam – Dax – Gwen và Dan mỗi vịt một vẻ. Dễ thương, gần gũi, ấn tượng và không lẫn vào đâu được.<br><br><img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706060973/novystteou9ktniesxtk.jpg\" alt=\"News\" /><br><br> Tuy nhiên, hiệu ứng trung bình Nhà Vịt Di Cư đem lại phần nào cho thấy tình trạng đáng báo động ở Illumination. Họ đang quá phụ thuộc vào Minions. Ngoài những quả chuối biết đi, hãng chẳng có mấy nhân vật đủ làm công chúng nhớ năm này qua năm nọ. Đây là điều hãng cần khắc phục trong tương lai để sự nổi tiếng của Minions bớt lấn át các phim mới khác.<br><br> Từ nội dung đến chất lượng đồ họa đều đủ sức hấp dẫn khán giả, Migration là tựa phim tuyệt vời, đáng cho cả gia đình cùng dành thời gian ra rạp đầu năm.\r\n', 'https://res.cloudinary.com/thientam2829/image/upload/v1705913821/gsulnvf5uajdu9hgjbnm.jpg', '2024-01-23 04:22:24'),
(2, '[Review] Quỷ Cẩu: Dũng Cảm Chọn Thông Điệp Gây Tranh Cãi!\r\n', '“Thịt chó” đã, đang và sẽ gây nên hàng trăm ngàn cuộc tranh luận khắp mạng xã hội. Vì vậy, khi chọn đề tài nhạy cảm này làm tác phẩm đầu tay, đạo diễn Lưu Thành Luân xác định đây là bài toán khó nhưng vẫn quyết tâm thực hiện bởi: \"Tôi yêu thú cưng, nhất là chó, nên dễ đồng cảm với câu chuyện liên quan chúng. Kịch bản, thông điệp Quỷ Cẩu có thể truyền tải tinh thần bảo vệ thú cưng mà tôi mong muốn. Tôi nghĩ điều gì mình thích và đồng điệu, sẽ dễ kể cho người ta cảm hơn\".<br> <br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706345986/tpxy4zaz6nfpbpmij58s.jpg\" alt=\"quycau\" /> <br> <br> Lấy cảm hứng từ truyền thuyết “Chó đội nón mê”, Lưu Thành Luân kể câu chuyện “nghiệp báo” về gia đình bán thịt chó ở vùng quê. Khi ông Mạnh (Anh Tuấn) – chủ lò thịt chó lớn nhất xứ đột ngột qua đời, cậu con trai Nam (Quang Tuấn) đang sinh sống tại thành phố dẫn theo bạn gái (Mie) về chịu tang. Người đứng đầu chết bất đắc kì tử làm hàng loạt mâu thuẫn âm ỉ bấy lâu bùng nổ. Cộng thêm sự quấy phá của con chó trắng mũi đỏ cũng góp phần khiến cả nhà gặp biết bao tai ương kì dị.<br><br>Quỷ Cẩu mang thông điệp “bình cũ, rượu cũ”: Ma quỷ đáng sợ nhưng con người còn đáng sợ hơn. Tác phẩm vẫn đi vào lối mòn lạm dụng jumpscare và âm thanh như nhiều phim kinh dị Việt Nam khác. Dẫu vậy, không thể phủ nhận cố gắng của đoàn làm phim trong việc khai thác đề tài “lạ mà quen”, chưa từng xuất hiện trên màn ảnh rộng!<br><br>Kịch bản đơn giản nhưng mạch lạc, đủ chặt chẽ với phim kinh dị có kinh phí thấp. Mâu thuẫn chẳng xa lạ gì với làng quê Việt Nam. Đó là xung đột sinh ra bởi người chồng, người anh, người cha gia trưởng. Chuyển biến tâm trạng thành viên trong gia đình thuyết phục. Nạn cờ bạc, mại dâm… cũng được lồng ghép khéo léo. Điều này khiến nhiều người xem đồng cảm. Quỷ Cẩu còn ăn điểm ở việc xây dựng thông minh sự xuất hiện của dàn diễn viên hai miền mà không gây ra tranh cãi về giọng. Lời thoại tự nhiên, gần gũi với đời sống.<br><br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706346139/z1tysg7zi3amrbubkfoc.png\" alt=\"quycau2\" /><br><br> Đặc biệt, điểm sáng nhất phim chắc chắn là cảnh quay làm thịt chó. Ekip xác nhận không dùng thịt chó quay phim. Nhà sản xuất Võ Thanh Hòa chia sẻ: \"Những cảnh gia đình nhân vật chính giết mổ thịt chó là sự kết hợp của đạo cụ từ silicon, thịt dê và hiệu ứng kỹ xảo. Ê kíp đã kết hợp ba yếu tố này tùy theo cảnh quay để tạo cảm giác chân thật nhất\".<br><br>Có thể nói, đây là chi tiết ấn tượng nhất phim. Thật khó tin khi hình ảnh sởn gai ốc trên màn ảnh dùng “hàng giả”. So với kĩ xảo chó trắng mũi đỏ còn chưa tốt, hình ảnh “thịt” chó khiến khán giả rợn người hơn nhiều. Ekip cũng ghi điểm bởi góc quay, khung hình ấn tượng, gây rợn người chỉ bằng những cảnh các nhân vật chế biến và ăn thịt động vật.<br><br> Ngoài ra, Quỷ Cẩu ghi điểm lớn bởi dàn diễn viên già trẻ mỗi người một vẻ; ít nhưng ấn tượng từ vai chính, phụ, quần chúng…<br><br>\r\nQuang Tuấn là chàng thơ quen thuộc của dòng phim kinh dị với Thất Sơn Tâm Linh, Bóng Đè, Tết Ở Làng Địa Ngục. Tuy vậy, Nam là nhân vật khó lẫn vào đâu được, chẳng lẫn lộn nhầm với trưởng làng Thập hay thầy lang Huỳnh. Anh thể hiện thành công chàng thanh niên mạnh mẽ, nhiệt huyết, khao khát thoát khỏi lề thói cũ kĩ. Tuy lớn lên trong gia đình bán thịt chó, Nam dám khẳng định “Con không ăn thịt chó.” trước mặt làng xóm. Nam mạnh mẽ và lí trí và cũng đủ nhạy cảm lẫn thông minh để tìm cách chống lại tình thế nhà bị “cạn phước”.<br><br>Một lần nữa, NSND Kim Xuân “chiếm spotlight” bộ phim bà tham gia bởi năng lực vượt trội. Người vợ cam chịu khóc chồng, người mẹ bất lực bảo vệ con mình và người đàn bà bỗng hóa quỷ trong cơn ghen tuông… Ba cảm xúc khác nhau rõ rệt ấy được lột tả trọn vẹn và xuất sắc, nhất là ở khung hình cận mặt. Các nghệ sĩ gạo cội như Đào Anh Tuấn, Quốc Quân và Vân Dung thể hiện tuyệt vời. Ông Mạnh “độc tài”, ông Quyết tàn độc bởi anh trai chèn ép quá lâu, bà Thúy mồm mép tép nhảy.... Đây đều là những vai diễn để lại dấu ấn khó quên với khán giả.<br><br>\r\n<img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706346338/oqz4n1rdyuqibcp5vqks.png\" alt=\"quycau\" /><br><br>\r\nTrước ngày Quỷ Cẩu ra mắt, Nam Thư và Mie chịu nhiều nghi ngờ về diễn xuất, khi phải đứng cạnh dàn nghệ sĩ thực lực. Thế nhưng, hai cô gái đã có màn trình diễn thuyết phục. Gái làng chơi hoàn lương lẳng lơ và cô gái thành thị hiền lành nhẫn nhịn là điểm nhấn, đẩy mâu thuẫn gia đình ông Mạnh lên cao trào. Đáng tiếc, phần kĩ xảo của phim chiếu rạp Quỷ Cẩu vướng điểm trừ lớn. CGI ngô nghê chẳng khác những bộ phim thập niên 90. Lẽ ra, ekip nên tập trung vào điểm mạnh là cách xây dựng nhân vật, cảnh quay và các đạo cụ chân thật hơn là để hình tượng “chó đội nón mê” xuất hiện nhưng không đủ gây sợ hãi mà lại phản tác dụng đến thấy buồn cười. Mong rằng, với sự ủng hộ nhiệt tình của khán giả - tính đến nay hơn 400.000 người ra rạp chiếu phim, đạo diễn Lưu Thành Luân sẽ có nhiều tác phẩm thành công hơn trong tương lai.\r\n\r\n\r\n\r\n\r\n\r\n\r\n', 'https://res.cloudinary.com/thientam2829/image/upload/v1706346585/gbjvipkfl0pb9vouqr2i.webp', '2024-01-27 09:06:05');

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
-- Indexes for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `clid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  MODIFY `maGhe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

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
  MODIFY `hpid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `laythongtincanhanvm`
--
ALTER TABLE `laythongtincanhanvm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lichchieuinsert`
--
ALTER TABLE `lichchieuinsert`
  MODIFY `maLichChieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16559;

--
-- AUTO_INCREMENT for table `nguoidungvm`
--
ALTER TABLE `nguoidungvm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `phiminsert`
--
ALTER TABLE `phiminsert`
  MODIFY `maPhim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1698;

--
-- AUTO_INCREMENT for table `phiminsertvalichchieuinsert`
--
ALTER TABLE `phiminsertvalichchieuinsert`
  MODIFY `plid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
