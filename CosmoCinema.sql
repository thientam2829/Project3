-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2024 at 06:52 AM
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
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `maPhim` int(11) NOT NULL,
  `tenPhim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `hinhAnh`, `maPhim`, `tenPhim`) VALUES
(1, 'https://res.cloudinary.com/thientam2829/image/upload/v1708940752/twon6edxym4kx5xxgofv.jpg', 1355, 'MAI'),
(2, 'https://res.cloudinary.com/thientam2829/image/upload/v1704964023/g9nkun003qhrehk4jtrk.png', 1352, 'Những Bác Sĩ Tài Hoa'),
(9, 'https://res.cloudinary.com/thientam2829/image/upload/v1710897965/q336x6mczd2dngohh06p.jpg', 1702, 'Exhuma: Quật Mộ Trùng Ma'),
(12, 'https://res.cloudinary.com/thientam2829/image/upload/v1712724258/ymwlhz6x1p12axrjnzk5.png', 1701, 'KUNG FU PANDA 4');

-- --------------------------------------------------------

--
-- Table structure for table `chi_tiet_phim`
--

CREATE TABLE `chi_tiet_phim` (
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
  `phanLoai` enum('P','K','T13','T16','T18') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chi_tiet_phim`
--

INSERT INTO `chi_tiet_phim` (`maPhim`, `tenPhim`, `biDanh`, `trailer`, `hinhAnh`, `moTa`, `daoDien`, `dienVien`, `quocGia`, `theLoai`, `dinhDang`, `maNhom`, `ngayKhoiChieu`, `phanLoai`) VALUES
(1282, 'Bàn Tay Diệt Quỷ', 'ban-tay-diet-quy', 'https://www.youtube.com/watch?v=xOgySa1AJRk', 'https://res.cloudinary.com/thientam2829/image/upload/v1703561285/163874001_4284368834921028_5814864480728608284_n_wbvsk8.jpg', 'Một võ sĩ MMA nọ tung ra những cú đấm vì chính nghĩa khi một linh mục trừ tà giúp anh khám phá sức mạnh thần thánh trong lòng bàn tay.', 'Kim Joo-Hwan', 'Park Seo Jun,Ahn Sung Ki,Woo Do Hwan', 'Hàn Quốc', 'Hành Động', '2D', 'GP09', '01/10/2024', 'P'),
(1337, 'Đào, Phở và Piano', 'dao-pho-va-piano', 'https://www.youtube.com/watch?v=qn1t_biQigc&t=12s', 'https://res.cloudinary.com/thientam2829/image/upload/v1708938878/aw07r0fkhvduakqhvf7u.webp', 'Lấy bối cảnh trận chiến đông xuân kéo dài 60 ngày đêm từ cuối năm 1946 đến đầu năm 1947 ở Hà Nội, câu chuyện theo chân chàng dân quân Văn Dân và chuyện tình với nàng tiểu thư đam mê dương cầm Thục Hương. Khi những người khác đã di tản lên chiến khu, họ quyết định cố thủ lại mảnh đất thủ đô đã tan hoang vì bom đạn, mặc cho những hiểm nguy đang chờ đợi trước mắt', 'Phi Tiến Sơn', 'NSƯT Trần Lực, NSND Trung Hiếu, Doãn Quốc Đam, Tuấn Hưng, Nguyệt Hằng, Anh Tuấn,..', 'Việt Nam', 'Lịch Sử, Tình Cảm', '2D', 'GP09', '27/2/2024', 'P'),
(1342, 'Quỷ Cẩu', 'quỷ-cẩu', 'https://www.youtube.com/watch?v=cYCOcxWgPVU', 'http://res.cloudinary.com/thientam2829/image/upload/v1706346799/q0gjmhqqynjwcjevc2kk.jpg', 'Nam về quê để lo đám tang cho bố sau cái chết kinh hoàng của ông, trong khi phải che giấu bạn gái đang mang thai. Nam mơ thấy gia đình bị giết sau khi mai táng bố, và Mít – con chó trắng của gia đình có biểu hiện kì lạ. Ông Quyết, bà Thúy, và bà Liễu thì tin vào thầy cúng, còn Nam nghi ngờ về lò mổ chó truyền thống của gia đình và phải điều tra để giải quyết sự kiện kỳ lạ đang diễn ra.', 'Lưu Thành Luân', ' Quang Tuấn, NSND Kim Xuân, Vân Dung, Quốc Quân, Nam Thư, Mie….', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '26/02/2024', 'P'),
(1348, 'Kẻ Ăn Hồn', 'kẻ-ăn-hồn', 'https://www.youtube.com/embed/w3VI43L_Mn8', 'http://res.cloudinary.com/khanhbatluc/image/upload/v1702888839/pjawyy2mywmgdoav9pno.jpg', 'Suất chiếu sớm kẻ ăn hồn đem đến sự kinh dị cho người xem gay cấn đến phút cuois cungfm rất ám ảnh người xem.', 'Trần Hữu Tấn', 'Hoàng Hà, Võ Điền Gia Huy, Huỳnh Thanh Trực, NSƯT Chiều Xuân, Nghệ sĩ Viết Liên, NSND Ngọc Thư, Nguyễn Hữu Tiến, Nguyễn Phước Lộc, Nghinh Lộc, Lý Hồng Ân, Vũ Đức Ngọc…', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '01/02/2024', 'P'),
(1349, 'Tết ở Làng địa ngục', 'tết-ở-làng-địa-ngục', 'https://www.youtube.com/watch?v=C2V38ghWHlQ', 'http://res.cloudinary.com/thientam2829/image/upload/v1704956529/okiiqyylfz1hhlu2osvz.jpg', 'Các hậu duệ của một băng cướp khét tiếng điều tra hàng loạt án mạng tàn bạo ở làng của họ. Liệu đây là nghiệp chướng hay \"tác phẩm\" của kẻ báo thù?', 'Trần Hữu Tấn', 'Quang Tuấn,Phú Đôn,Võ Tấn Phát...', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '01/11/2024', 'P'),
(1352, 'Những Bác Sĩ Tài Hoa', 'nhung-bac-si-tai-hoa', 'https://www.youtube.com/watch?v=xqIM2cenBAs', 'https://res.cloudinary.com/thientam2829/image/upload/v1704964251/lacwxtxjznu4phqgmrg8.png', 'Năm bác sĩ – là những người bạn từ thời còn ở trường y – cùng tái hợp ở một bệnh viện với tư cách là đồng nghiệp trong mảng khách hàng VIP.', 'Shin Won Ho,Lee Woo Jung', 'Cho Jung Seok,Yoo Yeon Seok,Jung Kyung Ho...', 'Hàn Quốc', 'Chính Kịch', '2D', 'GP09', '15/1/2024', 'P'),
(1354, 'Nhà Vịt Di Cư', 'nhà-vịt-di-cư', 'https://www.youtube.com/watch?v=Ua0Z19hNR2M', 'http://res.cloudinary.com/thientam2829/image/upload/v1705307528/mgkda2t8lnhgeeyj2qm8.jpg', 'Nhà Vịt Di Cư theo chân một gia đình vịt trời gồm vịt bố, vịt mẹ, cậu con trai tuổi teen Dax và vịt út Gwen, trong lần đầu tiên trải nghiệm chuyến di cư tiến về phía nam để trú đông. Thế nhưng, niềm vui vẻ sự háo hức kéo dài không bao lâu, gia đình vịt nhận ra, họ đang bay ngược chiều với tất cả các đàn vịt khác.Không kịp quay đầu, họ bất ngờ gặp phải loạt “chướng ngại vật” là những tòa nhà cao tầng của thành phố hiện đại.Liên tiếp sau đó là những thước phim đầy kịch tính nhưng vô cùng hài hước.', 'Benjamin Renner', 'Kumail Nanjiani, Elizabeth Banks, Caspar Jennings, Tresi Gazal, Awkwafina,…', 'Mỹ', 'Hoạt Hình', '2D', 'GP09', '27/1/2024', 'P'),
(1355, 'MAI', 'mai', 'https://www.youtube.com/watch?v=EX6clvId19s', 'http://res.cloudinary.com/thientam2829/image/upload/v1708940698/hhnmj8z4u01onfi89o9z.png', '\"Mai\" xoay quanh cuộc đời của một người phụ nữ đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử. Họ cho mình những khoảnh khắc tự do, say đắm và tràn đầy tiếng cười. Liệu cặp đôi ấy có nắm giữ được niềm hạnh phúc đó dài lâu khi miệng đời lắm khi cay nghiệt, bất công?', 'Trấn Thành', 'Phương Anh Đào, Tuấn Trần, Trấn Thành, Uyển Ân, Hồng Đào, NSND Việt Anh, NSND Ngọc Giàu...', 'Việt Nam', 'Tình Cảm', '2D', 'GP09', '03/04/2024', 'T16'),
(1701, 'KUNG FU PANDA 4', 'kung-fu-panda-4', 'https://www.youtube.com/watch?v=egkeFvm26pc', 'http://res.cloudinary.com/thientam2829/image/upload/v1710817481/cqpptsehxgyzn9wiixhs.jpg', 'Sau khi Po được chọn trở thành Thủ lĩnh tinh thần của Thung lũng Bình Yên, Po cần tìm và huấn luyện một Chiến binh Rồng mới, trong khi đó một mụ phù thủy độc ác lên kế hoạch triệu hồi lại tất cả những kẻ phản diện mà Po đã đánh bại về cõi linh hồn.', ' Mike Mitchell', ' Jack Black, Dustin Hoffman, James Hong, Awkwafina, .', 'Mỹ', 'Hoạt Hình', '2D', 'GP09', '09/04/2024', 'K'),
(1702, 'Exhuma: Quật Mộ Trùng Ma', 'exhuma:-quật-mộ-trùng-ma', 'https://www.youtube.com/watch?v=7LH-TIcPqks', 'http://res.cloudinary.com/thientam2829/image/upload/v1710820645/w7xr9vimebcp91nksbl2.jpg', 'Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.', 'Jang Jae Hyun', ' Choi Min Sik, Yoo Hai Jin, Kim Go Eun, Lee Do Hyun,...', 'Hàn Quốc', 'Kinh Dị', '2D', 'GP09', '01/04/2024', 'T18'),
(1705, 'Lật Mặt : 48h', 'lật-mặt-:-48h', 'https://www.youtube.com/watch?v=C2V38ghWHlQ', 'http://res.cloudinary.com/thientam2829/image/upload/v1712626864/gjd3wfapmhgamuwuai0s.jpg', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Trần Hữu Tấn', 'Kumail Nanjiani, Elizabeth Banks, Caspar Jennings, Tresi Gazal, Awkwafina,…', 'Việt Nam', 'Kinh Dị', '2D', 'GP09', '09/04/2024', 'T18');

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
-- Table structure for table `cumrap_va_lichchieu`
--

CREATE TABLE `cumrap_va_lichchieu` (
  `clid` int(11) NOT NULL,
  `cumrap` int(11) NOT NULL,
  `lichchieuinsert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cumrap_va_lichchieu`
--

INSERT INTO `cumrap_va_lichchieu` (`clid`, `cumrap`, `lichchieuinsert`) VALUES
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
(13, 5, 16547),
(14, 1, 16548),
(15, 6, 16549),
(16, 2, 16550),
(17, 2, 16551),
(18, 1, 16552),
(19, 3, 16553),
(24, 6, 16558),
(25, 5, 16560),
(27, 1, 16562),
(28, 2, 16563),
(29, 2, 16564),
(30, 1, 16565),
(33, 1, 16568),
(34, 4, 16569);

-- --------------------------------------------------------

--
-- Table structure for table `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `hoTen` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `noiDung` varchar(500) NOT NULL,
  `maPhim` int(11) NOT NULL,
  `soSao` int(11) NOT NULL,
  `thoiGian` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `danhgia`
--

INSERT INTO `danhgia` (`id`, `hoTen`, `email`, `noiDung`, `maPhim`, `soSao`, `thoiGian`) VALUES
(1, 'Nguyen Thien Tam', 'thientam2829@gmail.com', '', 1702, 5, '2024-03-30 06:58:17'),
(2, 'thien tam', 'thientam2829@gmail.com', 'Phim tạm ổn', 1355, 8, '2024-03-30 08:07:54'),
(3, 'Kha Nguyen', 'duong.ld@vtc.edu.vn', 'Phim khá ổn', 1355, 5, '2024-03-30 08:43:06'),
(4, 'Ninh Anh Bui', 'an.lg@vtc.edu.vn', 'Góc quay, cảnh quay quá xuất sắc ko có gì bàn luận. \nCòn về nội dung, theo ý kiến riêng của mình. Film phản ánh đúng hiện trạng và thực tế xã hội. Nhưng cốt film thì chưa đạt đỉnh điểm, cảm xúc vẫn nửa chừng, chưa dâng trào mãnh liệt. Kết film, đứng dậy đi về mà cảm giác cứ lưng chừng, kiểu cấn cấn sao á. Ko thật sự thoả mãn tâm lý ng xem', 1355, 7, '2024-04-02 04:12:56'),
(5, 'Tung Duong', 'duong.ld@vtc.edu.vn', 'Kịch bản dễ đoán. Mô típ cũ: công tử bad boy yêu gái mát xa nhà nghèo gặp nhiều chuân chuyên. Có chăng thêm yếu tố single mom để hợp thời đại. Nhưng về bản chất vẫn chỉ có vậy. Nhiều cảnh khiên cưỡng, lời thoại sáo mòn. Diễn xuất của diễn viên cũng chỉ ở mức khá', 1355, 4, '2024-04-02 04:13:47');

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
-- Table structure for table `datve`
--

CREATE TABLE `datve` (
  `maGhe` int(11) NOT NULL,
  `tenGhe` varchar(255) NOT NULL,
  `loaiGhe` varchar(255) NOT NULL,
  `giaVe` double NOT NULL,
  `taiKhoanNguoiDat` varchar(255) NOT NULL,
  `ngayDat` datetime DEFAULT NULL,
  `maLichChieu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datve`
--

INSERT INTO `datve` (`maGhe`, `tenGhe`, `loaiGhe`, `giaVe`, `taiKhoanNguoiDat`, `ngayDat`, `maLichChieu`) VALUES
(26, '26', 'Thuong', 75000, 'admin', NULL, 16532),
(31, '31', 'Thuong', 75000, 'admin', NULL, 16532),
(42, '42', 'Thuong', 75000, 'admin', NULL, 16532),
(43, '43', 'Thuong', 75000, 'admin', NULL, 16532),
(44, '44', 'Thuong', 75000, 'admin', NULL, 15289),
(45, '45', 'Vip', 90000, 'admin', NULL, 16532),
(46, '46', 'Vip', 90000, 'admin', NULL, 15289),
(61, '61', 'Vip', 90000, 'admin', NULL, 16532),
(63, '63', 'Vip', 90000, 'admin', NULL, 16532),
(162, '61', 'Vip', 90000, 'admin', NULL, 15289),
(164, '0', 'Thuong', 75000, 'admin', NULL, 15289),
(166, '142', 'Thuong', 75000, 'admin', NULL, 15289),
(168, '0', 'Vip', 100000, 'okok', NULL, 16541),
(169, '1', 'Vip', 100000, 'okok', NULL, 16541),
(170, '2', 'Vip', 100000, 'okok', NULL, 16541),
(171, '16', 'Vip', 100000, 'okok', NULL, 16541),
(175, '33', 'Vip', 100000, 'okok', NULL, 16541),
(176, '34', 'Vip', 100000, 'okok', NULL, 16541),
(178, '59', 'Vip', 90000, 'okok', NULL, 15235),
(179, '60', 'Vip', 90000, 'okok', NULL, 15235),
(180, '62', 'Vip', 90000, 'okok', NULL, 15235),
(184, '78', 'Vip', 90000, 'okok', NULL, 15235),
(185, '89', 'Vip', 90000, 'okok', NULL, 15235),
(189, '29', 'Vip', 100000, 'admin', NULL, 16541),
(191, '91', 'Vip', 150000, 'admin', NULL, 16546),
(192, '92', 'Vip', 150000, 'thientam', NULL, 16546),
(193, '93', 'Vip', 150000, 'thientam', NULL, 16546),
(194, '94', 'Vip', 150000, 'thientam', NULL, 16546),
(195, '95', 'Vip', 150000, 'thientam', NULL, 16546),
(196, '101', 'Vip', 100000, 'thientam2', '2024-02-26 17:12:22', 16560),
(197, '102', 'Vip', 100000, 'thientam2', '2024-02-26 17:13:54', 16560),
(198, '103', 'Vip', 100000, 'thientam2', '2024-02-26 17:14:22', 16560),
(199, '104', 'Vip', 100000, 'thientam2', '2024-02-26 17:14:32', 16560),
(200, '105', 'Vip', 100000, 'thientam2', '2024-03-26 17:14:41', 16560),
(201, '106', 'Vip', 100000, 'thientam2', '2024-02-26 17:14:52', 16560),
(202, '107', 'Vip', 100000, 'thientam', '2024-03-19 16:58:58', 16560),
(203, '108', 'Vip', 100000, 'thientam', '2024-03-19 17:13:13', 16560),
(204, '109', 'Vip', 100000, 'thientam', '2024-03-19 17:13:26', 16560),
(205, '110', 'Vip', 100000, 'thientam', '2024-03-19 17:13:35', 16560),
(206, '111', 'Vip', 100000, 'thientam', '2024-03-19 17:13:43', 16560),
(210, '122', 'Vip', 120000, 'admin', '2024-03-24 16:45:26', 16552),
(211, '123', 'Vip', 120000, 'admin', '2024-03-24 16:45:26', 16552),
(212, '124', 'Vip', 120000, 'admin', '2024-03-24 16:45:26', 16552),
(213, '125', 'Vip', 120000, 'admin', '2024-03-24 16:45:26', 16552),
(214, '126', 'Vip', 120000, 'admin', '2024-03-24 16:45:26', 16552),
(218, '103', 'Vip', 100000, 'admin', '2024-04-09 09:45:38', 16568),
(219, '104', 'Vip', 100000, 'admin', '2024-04-09 09:45:38', 16568);

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
(19, 1, 1342),
(21, 1, 1701),
(22, 1, 1702),
(23, 1, 1705);

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
(16558, '27/01/2024 15:20:00', 502, 'Rạp 2', 100000, 120),
(16559, '03/03/2024 17:30:00', 510, 'Rạp 10', 120000, 120),
(16560, '03/03/2024 19:27:00', 495, 'Rạp 5', 100000, 120),
(16562, '20/03/2024 09:41:00', 452, 'Rạp 2', 75000, 120),
(16563, '19/03/2024 10:06:00', 462, 'Rạp 2', 100000, 120),
(16564, '19/03/2024 10:50:00', 461, 'Rạp 1', 120000, 120),
(16565, '25/03/2024,  13:45', 0, 'Rạp 2', 120000, 120),
(16568, '09/04/2024 09:41:00', 451, 'Rạp 1', 100000, 120),
(16569, '09/04/2024 09:09:00', 482, 'Rạp 2', 120000, 120);

-- --------------------------------------------------------

--
-- Table structure for table `lich_chieu`
--

CREATE TABLE `lich_chieu` (
  `plid` int(11) NOT NULL,
  `chi_tiet_phim` int(11) NOT NULL,
  `lichchieuinsert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lich_chieu`
--

INSERT INTO `lich_chieu` (`plid`, `chi_tiet_phim`, `lichchieuinsert`) VALUES
(15, 1348, 16545),
(17, 1349, 16547),
(19, 1337, 16549),
(20, 1352, 16550),
(22, 1354, 16552),
(23, 1355, 16553),
(28, 1342, 16558),
(29, 1355, 16560),
(32, 1701, 16563),
(33, 1702, 16564),
(34, 1282, 16565),
(37, 1705, 16568),
(38, 1349, 16569);

-- --------------------------------------------------------

--
-- Table structure for table `nguoi_dung`
--

CREATE TABLE `nguoi_dung` (
  `id` int(11) NOT NULL,
  `taiKhoan` varchar(255) NOT NULL,
  `matKhau` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `soDt` varchar(255) NOT NULL,
  `maNhom` varchar(255) NOT NULL,
  `maLoaiNguoiDung` varchar(255) NOT NULL,
  `hoTen` varchar(255) NOT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `daXacThuc` tinyint(1) DEFAULT 0,
  `otpCreatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nguoi_dung`
--

INSERT INTO `nguoi_dung` (`id`, `taiKhoan`, `matKhau`, `email`, `soDt`, `maNhom`, `maLoaiNguoiDung`, `hoTen`, `otp`, `daXacThuc`, `otpCreatedAt`) VALUES
(1, 'admin', '1234567', 'cosmocinemaldh@gmail.com', '0343344658', 'GP09', 'QuanTri', 'Admin', NULL, 1, NULL),
(26, 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin@gmail.com', '099356765', 'GP09', 'QuanTri', 'ADMIN', NULL, 1, NULL),
(53, 'thientam', 'e10adc3949ba59abbe56e057f20f883e', 'thientam29282@gmail.com', '0763344621', 'GP09', 'KhachHang', 'thien tam', NULL, 1, NULL),
(54, 'thientam2829', 'e10adc3949ba59abbe56e057f20f883e', 'thientam2829@gmail.com', '0763344621', 'GP09', 'KhachHang', 'Nguyen Thien Tam', NULL, 1, NULL),
(58, 'thientam', 'e10adc3949ba59abbe56e057f20f883e', 'tamnt.124010121035@vtc.edu.vn', '0763344621', 'GP09', 'KhachHang', 'Nguyen Thien Tam', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `nhan_vien`
--

CREATE TABLE `nhan_vien` (
  `id` int(11) NOT NULL,
  `hoten` varchar(255) NOT NULL,
  `ngaysinh` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `sdt` varchar(15) NOT NULL,
  `diachi` text NOT NULL,
  `ngayvaolam` date NOT NULL,
  `loainhanvien` enum('Quản Lý','Nhân viên','Nhân viên bán thời gian') NOT NULL,
  `noilamviec` int(11) NOT NULL,
  `luong` decimal(15,2) NOT NULL,
  `trangthai` tinyint(1) NOT NULL COMMENT '1: còn làm, 0: nghỉ việc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhan_vien`
--

INSERT INTO `nhan_vien` (`id`, `hoten`, `ngaysinh`, `email`, `sdt`, `diachi`, `ngayvaolam`, `loainhanvien`, `noilamviec`, `luong`, `trangthai`) VALUES
(6, 'Nguyễn Hoàng Nhật Kha', '2023-01-31', 'kha.nhn@vtc.edu.vn', '0763344621', 'QUẬN TÂN BÌNH - HCM', '2023-12-14', 'Quản Lý', 1, 499998.00, 1),
(7, 'Thanh Anh', '2000-04-09', 'duong.ld@vtc.edu.vn', '0763344621', 'HCM', '2024-04-10', 'Nhân viên bán thời gian', 3, 2500000.00, 1);

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
(1, '[Review] Migration: Nhà Vịt Có Đủ Sức Thành Hiện Tượng Như Minions?', 'Từ ngày Minions trở thành hiện tượng toàn cầu, độ nổi tiếng của studio Illumination cũng tăng theo cấp số nhân.<br> <br> Ngoài việc chú trọng vào phát triển các phim hoạt hình liên quan đến những quả chuối biết đi như Despicable Me và Minions, Illumination mạnh tay đầu tư cho các phim hoạt hình khác. Họ không ngại thử sức đề tài mới như The Secret Life Of Pets, The Grinch và Sing.<br><br> Tất cả đều đạt thành công lớn. Đẳng Cấp Thú Cưng và Đấu Trường Âm Nhạc đều ra mắt phần mới và tiếp tục được khán giả toàn cầu ủng hộ.<br><br> Lần này, Illumination tiếp tục đưa khán giả khám phá cuộc sống của các động vật hoang dã trong Migration.<br><br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706060544/lhzplreubaruluhahvw1.webp\" alt=\"News\" /> <br><br> Ở vùng ao yên bình nọ thuộc vùng New England, ngày qua ngày, gia đình vịt cổ xanh Mack sống vui vẻ bên nhau. Vịt bố Mack luôn chú trọng dạy các con tránh xa nguy hiểm, rằng chim diệc là kẻ săn mồi nguy hiểm, ngoài nơi chúng sống thì không nên đi đâu cả.Tuy nhiên, vào buổi nọ, lời răn đe mang tính lí thuyết của Mack trở nên lung lay khi đàn vịt di trú bay ngang qua. Câu chuyện kể về vùng đất Jamaica xa xôi, ấm áp với dòng nước phát sáng khiến vịt mẹ Pam và hai vịt con Dax – Gwen khao khát đi xa. Dĩ nhiên, vì bản tính thích an toàn, Mack làm sao đồng ý nổi. Sau một hồi tranh cãi, rốt cuộc, vịt bố phải chịu thua ba mẹ con. Cả nhà Mack cùng người chú Dan quyết định tới Jamaica mở mang tầm mắt! Chuyến phiêu lưu khởi đầu rất thuận lợi. Thế nhưng, do lần đầu ra khỏi nơi cư trú, nhà vịt đã bay nhầm đường. Thay vì đến Jamaica, chúng bay nhầm vào… thành phố New York!<br><br> Sau Sing (2016), Migration là tác phẩm gốc đầu tiên của Illumination, không phải hậu truyện hoặc chuyển thể. Nhờ kinh nghiệm dày dặn từ The Secret Life Of Pets và Sing, chẳng quá khó khăn cho ekip Illumination thực hiện bộ phim thứ 14 với nhân vật chính là động vật. Những chú vịt thân thiện, hiền lành, “nhà quê” (theo lời bồ câu Chump). Mỗi thành viên nhà Mack có điểm mạnh lẫn điểm yếu, điểm tốt và chưa tốt dần hiện ra trên chuyến hành trình. Mâu thuẫn âm ỉ trong gia đình cũng bùng lên thông qua biến cố. Tuy nhiên, nhà vịt luôn yêu thương nhau và cùng vượt qua hoạn nạn. <br><br> Migration khai thác đề tài “nhà vịt di cư” nghe qua khá mới lạ nhưng tựu trung vẫn là bình mới rượu cũ. Gia đình đoàn kết vượt qua khó khăn và đối diện với nỗi sợ bản thân để khám phá khía cạnh mới trong cuộc sống đều là hai đề tài quen thuộc của bộ môn nghệ thuật thứ 7. Dẫu vậy, phim ghi điểm bởi lối kể chuyện gãy gọn, súc tích. Các tình huống giải quyết nhanh gọn. Từ trẻ em đến người lớn, ai cũng dễ dàng hiểu được và cảm được.<br><br> Đạo diễn kiêm biên kịch phim Benjamin Renner mô tả Migration như phim kinh điển Little Miss Sunshine phiên bản vịt. Dĩ nhiên, mọi mâu thuẫn rắc rối đều giảm nhẹ hết cỡ. Phim tương tự The Secret Life Of Pets, cách giải quyết vấn đề theo hướng “logic phim hoạt hình” – chẳng theo logic nào cả. Người xem sẽ có dịp cười lăn cười bò, cười rung cả ghế rạp chiếu phim bởi hàng tá bất ngờ mà Migration mang lại. Những quy luật tự nhiên gần như vô nghĩa, hệt như cách Minions phụng sự cho Napoleon hay lên làm lãnh đạo Anh quốc nhờ rút được thanh gươm báu.<br><br> Chính vì vậy, so với Sing, Migration ít tình huống cảm động rơi nước mắt. Các nhân vật hài hước, đơn giản và “vô tri”. Mâu thuẫn gia đình, vợ chồng, cha mẹ - con gái hay sự bướng bỉnh tuổi dậy thì trôi tuột trên màn ảnh, những tình tiết hài hước ấn tượng hơn. Ngược lại, đồ họa của Migration thật sự là thử thách với ekip làm phim. Thiết kế sản xuất Colin Stimpson mô tả: “Vịt là sinh vật kì lạ, cực kì phức tạp và bề ngoài rất giống nhau.” Benjamin Renner kể rằng anh cùng năm chục họa sĩ hãng Illumination đã dày công nghiên cứu loài vịt để thực hiện dự án. Cuối cùng, ekip cũng tạo ra gia đình Mack – Pam – Dax – Gwen và Dan mỗi vịt một vẻ. Dễ thương, gần gũi, ấn tượng và không lẫn vào đâu được.<br><br><img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706060973/novystteou9ktniesxtk.jpg\" alt=\"News\" /><br><br> Tuy nhiên, hiệu ứng trung bình Nhà Vịt Di Cư đem lại phần nào cho thấy tình trạng đáng báo động ở Illumination. Họ đang quá phụ thuộc vào Minions. Ngoài những quả chuối biết đi, hãng chẳng có mấy nhân vật đủ làm công chúng nhớ năm này qua năm nọ. Đây là điều hãng cần khắc phục trong tương lai để sự nổi tiếng của Minions bớt lấn át các phim mới khác.<br><br> Từ nội dung đến chất lượng đồ họa đều đủ sức hấp dẫn khán giả, Migration là tựa phim tuyệt vời, đáng cho cả gia đình cùng dành thời gian ra rạp đầu năm.\r\n', 'https://res.cloudinary.com/thientam2829/image/upload/v1705913821/gsulnvf5uajdu9hgjbnm.jpg', '2024-01-22 21:22:24'),
(2, '[Review] Quỷ Cẩu: Dũng Cảm Chọn Thông Điệp Gây Tranh Cãi!\r\n', '“Thịt chó” đã, đang và sẽ gây nên hàng trăm ngàn cuộc tranh luận khắp mạng xã hội. Vì vậy, khi chọn đề tài nhạy cảm này làm tác phẩm đầu tay, đạo diễn Lưu Thành Luân xác định đây là bài toán khó nhưng vẫn quyết tâm thực hiện bởi: \"Tôi yêu thú cưng, nhất là chó, nên dễ đồng cảm với câu chuyện liên quan chúng. Kịch bản, thông điệp Quỷ Cẩu có thể truyền tải tinh thần bảo vệ thú cưng mà tôi mong muốn. Tôi nghĩ điều gì mình thích và đồng điệu, sẽ dễ kể cho người ta cảm hơn\".<br> <br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706345986/tpxy4zaz6nfpbpmij58s.jpg\" alt=\"quycau\" /> <br> <br> Lấy cảm hứng từ truyền thuyết “Chó đội nón mê”, Lưu Thành Luân kể câu chuyện “nghiệp báo” về gia đình bán thịt chó ở vùng quê. Khi ông Mạnh (Anh Tuấn) – chủ lò thịt chó lớn nhất xứ đột ngột qua đời, cậu con trai Nam (Quang Tuấn) đang sinh sống tại thành phố dẫn theo bạn gái (Mie) về chịu tang. Người đứng đầu chết bất đắc kì tử làm hàng loạt mâu thuẫn âm ỉ bấy lâu bùng nổ. Cộng thêm sự quấy phá của con chó trắng mũi đỏ cũng góp phần khiến cả nhà gặp biết bao tai ương kì dị.<br><br>Quỷ Cẩu mang thông điệp “bình cũ, rượu cũ”: Ma quỷ đáng sợ nhưng con người còn đáng sợ hơn. Tác phẩm vẫn đi vào lối mòn lạm dụng jumpscare và âm thanh như nhiều phim kinh dị Việt Nam khác. Dẫu vậy, không thể phủ nhận cố gắng của đoàn làm phim trong việc khai thác đề tài “lạ mà quen”, chưa từng xuất hiện trên màn ảnh rộng!<br><br>Kịch bản đơn giản nhưng mạch lạc, đủ chặt chẽ với phim kinh dị có kinh phí thấp. Mâu thuẫn chẳng xa lạ gì với làng quê Việt Nam. Đó là xung đột sinh ra bởi người chồng, người anh, người cha gia trưởng. Chuyển biến tâm trạng thành viên trong gia đình thuyết phục. Nạn cờ bạc, mại dâm… cũng được lồng ghép khéo léo. Điều này khiến nhiều người xem đồng cảm. Quỷ Cẩu còn ăn điểm ở việc xây dựng thông minh sự xuất hiện của dàn diễn viên hai miền mà không gây ra tranh cãi về giọng. Lời thoại tự nhiên, gần gũi với đời sống.<br><br> <img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706346139/z1tysg7zi3amrbubkfoc.png\" alt=\"quycau2\" /><br><br> Đặc biệt, điểm sáng nhất phim chắc chắn là cảnh quay làm thịt chó. Ekip xác nhận không dùng thịt chó quay phim. Nhà sản xuất Võ Thanh Hòa chia sẻ: \"Những cảnh gia đình nhân vật chính giết mổ thịt chó là sự kết hợp của đạo cụ từ silicon, thịt dê và hiệu ứng kỹ xảo. Ê kíp đã kết hợp ba yếu tố này tùy theo cảnh quay để tạo cảm giác chân thật nhất\".<br><br>Có thể nói, đây là chi tiết ấn tượng nhất phim. Thật khó tin khi hình ảnh sởn gai ốc trên màn ảnh dùng “hàng giả”. So với kĩ xảo chó trắng mũi đỏ còn chưa tốt, hình ảnh “thịt” chó khiến khán giả rợn người hơn nhiều. Ekip cũng ghi điểm bởi góc quay, khung hình ấn tượng, gây rợn người chỉ bằng những cảnh các nhân vật chế biến và ăn thịt động vật.<br><br> Ngoài ra, Quỷ Cẩu ghi điểm lớn bởi dàn diễn viên già trẻ mỗi người một vẻ; ít nhưng ấn tượng từ vai chính, phụ, quần chúng…<br><br>\r\nQuang Tuấn là chàng thơ quen thuộc của dòng phim kinh dị với Thất Sơn Tâm Linh, Bóng Đè, Tết Ở Làng Địa Ngục. Tuy vậy, Nam là nhân vật khó lẫn vào đâu được, chẳng lẫn lộn nhầm với trưởng làng Thập hay thầy lang Huỳnh. Anh thể hiện thành công chàng thanh niên mạnh mẽ, nhiệt huyết, khao khát thoát khỏi lề thói cũ kĩ. Tuy lớn lên trong gia đình bán thịt chó, Nam dám khẳng định “Con không ăn thịt chó.” trước mặt làng xóm. Nam mạnh mẽ và lí trí và cũng đủ nhạy cảm lẫn thông minh để tìm cách chống lại tình thế nhà bị “cạn phước”.<br><br>Một lần nữa, NSND Kim Xuân “chiếm spotlight” bộ phim bà tham gia bởi năng lực vượt trội. Người vợ cam chịu khóc chồng, người mẹ bất lực bảo vệ con mình và người đàn bà bỗng hóa quỷ trong cơn ghen tuông… Ba cảm xúc khác nhau rõ rệt ấy được lột tả trọn vẹn và xuất sắc, nhất là ở khung hình cận mặt. Các nghệ sĩ gạo cội như Đào Anh Tuấn, Quốc Quân và Vân Dung thể hiện tuyệt vời. Ông Mạnh “độc tài”, ông Quyết tàn độc bởi anh trai chèn ép quá lâu, bà Thúy mồm mép tép nhảy.... Đây đều là những vai diễn để lại dấu ấn khó quên với khán giả.<br><br>\r\n<img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1706346338/oqz4n1rdyuqibcp5vqks.png\" alt=\"quycau\" /><br><br>\r\nTrước ngày Quỷ Cẩu ra mắt, Nam Thư và Mie chịu nhiều nghi ngờ về diễn xuất, khi phải đứng cạnh dàn nghệ sĩ thực lực. Thế nhưng, hai cô gái đã có màn trình diễn thuyết phục. Gái làng chơi hoàn lương lẳng lơ và cô gái thành thị hiền lành nhẫn nhịn là điểm nhấn, đẩy mâu thuẫn gia đình ông Mạnh lên cao trào. Đáng tiếc, phần kĩ xảo của phim chiếu rạp Quỷ Cẩu vướng điểm trừ lớn. CGI ngô nghê chẳng khác những bộ phim thập niên 90. Lẽ ra, ekip nên tập trung vào điểm mạnh là cách xây dựng nhân vật, cảnh quay và các đạo cụ chân thật hơn là để hình tượng “chó đội nón mê” xuất hiện nhưng không đủ gây sợ hãi mà lại phản tác dụng đến thấy buồn cười. Mong rằng, với sự ủng hộ nhiệt tình của khán giả - tính đến nay hơn 400.000 người ra rạp chiếu phim, đạo diễn Lưu Thành Luân sẽ có nhiều tác phẩm thành công hơn trong tương lai.\r\n\r\n\r\n\r\n\r\n\r\n\r\n', 'https://res.cloudinary.com/thientam2829/image/upload/v1706346585/gbjvipkfl0pb9vouqr2i.webp', '2024-01-27 09:06:05'),
(3, 'Hospital Playlist chữa lành cảm xúc về những bác sĩ tài hoa và đức độ.', '<p>Giữa lúc nhiều phim truyền hình nhấn vào các âm mưu, tội ác hay bi kịch khiến khán giả mệt mỏi, Hospital Playlist miệt mài với con đường riêng: một bộ phim chữa lành cảm xúc về những bác sĩ tài hoa và đức độ.</p><br><p>Hospital Playlist được coi là sự kết hợp của Grey\'s Anatomy - phim y khoa nổi tiếng của Mỹ và Friends - sitcom hài về một nhóm bạn gắn bó với nhau hàng chục năm trời.Với Friends là nguồn cảm hứng, nhà làm phim Hospital Playlist đã xây dựng nên 5 nhân vật chính cũng là nhóm bạn thân thiết suốt 20 năm từ khi mới vào học trường y.Và nay ở lứa tuổi 40, họ đều là giáo sư đầu ngành trong lĩnh vực của mình, cùng làm việc tại Bệnh viện Yulje và tụ tập chơi nhạc cùng nhau vào buổi tối.</p><br><img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1709370693/iutmpzrnpvi1euqrfgbc.png\"><br><p>Nhưng hơi khác với nhóm bạn nhiều thói hư tật xấu (một cách hài hước) của Friends, nhóm bạn Hospital Playlist được xây dựng tính cách khá lý tưởng, có thể coi là những thiên thần trong cả công việc lẫn đời sống.Bác sĩ Chae Song Hwa, Lee Ik Jun, Ahn Jeong Won, Kim Jun Wan, Yang Seok Hyeong gây ấn tượng ngay từ phút đầu họ xuất hiện trong loạt phim.Người đầy bình thản tự tin, người hài hước, người lịch lãm ấm áp, người rụt rè, người lại hơi lạnh lùng và nghiêm khắc. Mỗi người một tính cách và đều là những người thầy thuốc hết mực quan tâm đến bệnh nhân.</p><br><p>Nữ bác sĩ Chae Song Hwa xót thương một phụ nữ có cả mẹ lẫn em trai mắc bệnh hiểm nghèo, cô còn tìm mọi cách để đồng hành với bà.Bác sĩ Ahn Jeong Won khóc nức nở khi để một bệnh nhân nhỏ tuổi ra đi mà không thể cứu chữa. Bác sĩ Lee Ik Jun lấy chính trải nghiệm ly hôn của mình để thuyết phục nữ bệnh nhân đồng ý ghép gan từ người chồng bội bạc.Không chỉ cứu chữa người bệnh, các bác sĩ còn có tấm lòng nhân ái khi phối hợp để xin tài trợ từ nhà hảo tâm cho những ca bệnh có hoàn cảnh khó khăn, không thể chi trả phí chữa trị. Làm từ thiện là cấp độ cao hơn của y đức, khi bác sĩ không dừng lại ở chuyên môn mà thể hiện trách nhiệm cộng đồng.</p><br><p>Niềm hạnh phúc lớn lao nhất của các bác sĩ là khi bệnh nhân được chữa khỏi. Sự ân cần, tận tâm và năng lực y khoa xuất sắc từ các bác sĩ trong Hospital Playlist biến họ thành những nhân vật đầy lý tưởng.Những con người ấy không phải là không có trong đời thực, nhưng để làm được như họ đòi hỏi nỗ lực rất lớn từ cả học tập lẫn trau dồi đạo đức trước cám dỗ nghề nghiệp. Họ là những bác sĩ mà ai cũng mong ước ngoài đời thực.Và dù tài giỏi đến đâu, họ luôn khiêm tốn và thận trọng khi chỉ hứa với bệnh nhân \"sẽ cố gắng hết sức\", bởi luôn có những trường hợp lực bất tòng tâm đầy đau lòng.Có người cho rằng nghề bác sĩ chứng kiến nhiều trường hợp thương tâm và nhiều cái chết thì sẽ chai sạn về cảm xúc, nhưng Hospital Playlist và nhiều bộ phim y khoa khác khắc họa sự day dứt và đau khổ của họ, khiến khán giả hiểu thêm về một trong những nghề nghiệp khắc nghiệt nhất lúc này.</p><br><img src=\"https://res.cloudinary.com/thientam2829/image/upload/v1709370874/v9asobxmlurkter7bb2q.jpg\"><br><p>Bên cạnh khía cạnh nghề nghiệp, sự hấp dẫn của Hospital Playlist còn đến từ tình bạn của các bác sĩ. Khi hành nghề, họ đầy nghiêm túc và tâm huyết, còn khi ở cạnh nhau, tất cả như hóa thành trẻ con, nhí nhố, tham ăn và không ngừng trêu chọc nhau. Cũng như Friends, Hospital Playlist tạo nên nhóm bạn trong mơ.</p><br><p>Hiện nay, nhiều phim truyền hình theo đuổi xu hướng bi kịch hóa, kịch tính hóa với nhiều cú lật, âm mưu, tội ác để thu hút khán giả mà Penthouse là ví dụ điển hình. Các nhân vật giết và hãm hại nhau, vào tù ra tội, nhiều cảnh phim là các màn chửi bới.Những phim này khiến khán giả tò mò, bàn luận và gây sốt trên diện rộng nhưng cũng bị chỉ trích vì tạo nên nhiều cảm xúc tiêu cực. Trong khi đó, Hospital Playlist kiên trì với con đường riêng: một bộ phim chữa lành cảm xúc.Đạo diễn Shin Won Ho nói với Korea Herald: \"Phản ứng từ người xem thậm chí còn nồng nhiệt hơn chúng tôi mong đợi.Có rất nhiều bình luận nói rằng họ cảm thấy được chữa lành hoặc cảm thấy ấm áp\".</p>\r\n\r\n', 'https://res.cloudinary.com/thientam2829/image/upload/v1709370874/v9asobxmlurkter7bb2q.jpg', '2024-03-02 09:16:44'),
(8, 'Thanh', 'aaaaaaa', 'https://res.cloudinary.com/thientam2829/image/upload/v1712723721/iobnbsklsk8khzex42zj.jpg', '2024-04-10 04:35:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`),
  ADD KEY `maPhim` (`maPhim`),
  ADD KEY `tenPhim` (`tenPhim`);

--
-- Indexes for table `chi_tiet_phim`
--
ALTER TABLE `chi_tiet_phim`
  ADD PRIMARY KEY (`maPhim`),
  ADD KEY `idx_tenPhim` (`tenPhim`);

--
-- Indexes for table `cumrap`
--
ALTER TABLE `cumrap`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `cumrap_va_lichchieu`
--
ALTER TABLE `cumrap_va_lichchieu`
  ADD PRIMARY KEY (`clid`),
  ADD KEY `cumraps` (`cumrap`),
  ADD KEY `lichchieuinsert` (`lichchieuinsert`);

--
-- Indexes for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `maPhim` (`maPhim`);

--
-- Indexes for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  ADD PRIMARY KEY (`did`),
  ADD KEY `maCumRap` (`maCumRap`);

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
-- Indexes for table `lichchieuinsert`
--
ALTER TABLE `lichchieuinsert`
  ADD PRIMARY KEY (`maLichChieu`);

--
-- Indexes for table `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD PRIMARY KEY (`plid`),
  ADD UNIQUE KEY `lichchieuinsert` (`lichchieuinsert`),
  ADD KEY `cphim` (`chi_tiet_phim`);

--
-- Indexes for table `nguoi_dung`
--
ALTER TABLE `nguoi_dung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nhan_vien`
--
ALTER TABLE `nhan_vien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `noilamviec` (`noilamviec`);

--
-- Indexes for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `chi_tiet_phim`
--
ALTER TABLE `chi_tiet_phim`
  MODIFY `maPhim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1707;

--
-- AUTO_INCREMENT for table `cumrap`
--
ALTER TABLE `cumrap`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cumrap_va_lichchieu`
--
ALTER TABLE `cumrap_va_lichchieu`
  MODIFY `clid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `datve`
--
ALTER TABLE `datve`
  MODIFY `maGhe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;

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
  MODIFY `hpid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `lichchieuinsert`
--
ALTER TABLE `lichchieuinsert`
  MODIFY `maLichChieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16570;

--
-- AUTO_INCREMENT for table `lich_chieu`
--
ALTER TABLE `lich_chieu`
  MODIFY `plid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `nguoi_dung`
--
ALTER TABLE `nguoi_dung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `nhan_vien`
--
ALTER TABLE `nhan_vien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `banner`
--
ALTER TABLE `banner`
  ADD CONSTRAINT `banner_ibfk_1` FOREIGN KEY (`maPhim`) REFERENCES `chi_tiet_phim` (`maPhim`),
  ADD CONSTRAINT `banner_ibfk_2` FOREIGN KEY (`tenPhim`) REFERENCES `chi_tiet_phim` (`tenPhim`);

--
-- Constraints for table `cumrap_va_lichchieu`
--
ALTER TABLE `cumrap_va_lichchieu`
  ADD CONSTRAINT `cumraps` FOREIGN KEY (`cumrap`) REFERENCES `cumrap` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lichchieuinsert` FOREIGN KEY (`lichchieuinsert`) REFERENCES `lichchieuinsert` (`maLichChieu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `danhgia`
--
ALTER TABLE `danhgia`
  ADD CONSTRAINT `danhgia_ibfk_1` FOREIGN KEY (`maPhim`) REFERENCES `chi_tiet_phim` (`maPhim`);

--
-- Constraints for table `danhsachrap`
--
ALTER TABLE `danhsachrap`
  ADD CONSTRAINT `maCumRap` FOREIGN KEY (`maCumRap`) REFERENCES `cumrap` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `maPhim` FOREIGN KEY (`maPhim`) REFERENCES `chi_tiet_phim` (`maPhim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lich_chieu`
--
ALTER TABLE `lich_chieu`
  ADD CONSTRAINT `clichchieu` FOREIGN KEY (`lichchieuinsert`) REFERENCES `lichchieuinsert` (`maLichChieu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cphim` FOREIGN KEY (`chi_tiet_phim`) REFERENCES `chi_tiet_phim` (`maPhim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `nhan_vien`
--
ALTER TABLE `nhan_vien`
  ADD CONSTRAINT `nhan_vien_ibfk_1` FOREIGN KEY (`noilamviec`) REFERENCES `cumrap` (`cid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
