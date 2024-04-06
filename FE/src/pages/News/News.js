import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Seperate from "../../components/Seperate";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      <Box p={index === 0 ? 1 : 3}>{children}</Box>
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tintuc" id="tintuc">
      <Seperate />

      <div className={classes.content}>
        <AppBar className={classes.appBar} position="static">
          <Tabs centered value={value} onChange={handleChange}>
            <Tab
              disableRipple
              classes={{
                root: classes.tabButton,
                selected: classes.tabSelected,
              }}
              label="Điện Ảnh 24h"
            />
            <Tab
              disableRipple
              classes={{
                root: classes.tabButton,
                selected: classes.tabSelected,
              }}
              label="Review"
            />
            <Tab
              disableRipple
              classes={{
                root: classes.tabButton,
                selected: classes.tabSelected,
              }}
              label="Khuyến Mãi"
            />
          </Tabs>
        </AppBar>
        <Fade timeout={400} in={value === 0}>
          <TabPanel value={value} index={0}>
            <div className="row">
              <div className={classes.repons}>
                <a href="/news/1" className={classes.news}>
                  <img
                    className={classes.fullImg}
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1705913821/gsulnvf5uajdu9hgjbnm.jpg"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      'NHÀ VỊT DI CƯ '- ĐI ĐỂ YÊU THƯƠNG
                    </h4>
                    <p className="text-secondary">
                      Nhà vịt di cư (tựa gốc: Migration) do Illumination Studios
                      sản xuất, kể về một gia đình vịt quyết định phiêu lưu khám
                      phá những vùng đất mới. Qua hành trình này, họ gắn bó yêu
                      thương nhau hơn.
                    </p>
                  </div>
                </a>
              </div>
              <div className={classes.repons}>
                <a href="/news/3" className={classes.news}>
                  <img
                    className={classes.fullImg}
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1705914256/hqxtskgdrmfxguyxu9xx.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      HOSPITAL PLAYLIST CHỮA LÀNH CẢM XÚC VỀ NHỮNG BÁC SĨ TÀI
                      HOA VÀ ĐỨC ĐỘ
                    </h4>
                    <p className="text-secondary">
                      Giữa lúc nhiều phim truyền hình nhấn vào các âm mưu, tội
                      ác hay bi kịch khiến khán giả mệt mỏi, Hospital Playlist
                      miệt mài với con đường riêng: một bộ phim chữa lành cảm
                      xúc về những bác sĩ tài hoa và đức độ.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan
                      và màn trả thù...
                    </h4>
                    <p className="text-secondary">
                      Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                      hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                      nhất sự nghiệp của cô trong phim
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY
                      DIỆT QUỶ”...
                    </h4>
                    <p className="text-secondary">
                      Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                      về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                      Choi Woo Sik, tác phẩm kinh dị – hành
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </TabPanel>
        </Fade>
        <Fade timeout={400} in={value === 1}>
          <TabPanel value={value} index={1}>
            <div className="row">
              <div className={classes.repons}>
                <a href="http://localhost:3000/news/1" className={classes.news}>
                  <img
                    className={classes.fullImg}
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1705913821/gsulnvf5uajdu9hgjbnm.jpg"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      [Review] Migration: Nhà Vịt Có Đủ Sức Thành Hiện Tượng Như
                      Minions?
                    </h4>
                    <p className="text-secondary">
                      Migration như phim kinh điển Little Miss Sunshine phiên
                      bản vịt.
                    </p>
                  </div>
                </a>
              </div>
              <div className={classes.repons}>
                <a href="/news/2" className={classes.news}>
                  <img
                    className={classes.fullImg}
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1706346585/gbjvipkfl0pb9vouqr2i.webp"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      [Review] Quỷ Cẩu: Dũng Cảm Chọn Thông Điệp Gây Tranh Cãi!
                    </h4>
                    <p className="text-secondary">
                      Lấy cảm hứng từ truyền thuyết “Chó đội nón mê”, Lưu Thành
                      Luân kể câu chuyện “nghiệp báo” về gia đình bán thịt chó
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan
                      và màn trả thù...
                    </h4>
                    <p className="text-secondary">
                      Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                      hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                      nhất sự nghiệp của cô trong phim
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY
                      DIỆT QUỶ”...
                    </h4>
                    <p className="text-secondary">
                      Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                      về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                      Choi Woo Sik, tác phẩm kinh dị – hành
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </TabPanel>
        </Fade>
        <Fade timeout={400} in={value === 2}>
          <TabPanel value={value} index={2}>
            <div className="row">
              <div className={classes.repons}>
                <a
                  href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1705916906/xvotvsahwwmvqhtjhj7i.jpg"
                    alt="news-movie"
                  />

                  <div className="py-3">
                    <h4 className="card-title">
                      Khám phá vũ trụ điện ảnh chỉ 79.000đ tại COSMO CINEMA, quá
                      dễ với Ví Trả Sau!
                    </h4>
                    <p className="text-secondary">
                      Bạn sẽ không phải bỏ lỡ loạt phim bom tấn nữa rồi! Ví Trả
                      Sau tặng bạn ưu đãi chỉ 79.000đ/vé khi mua vé phim tại
                      CGV. Xem ngay nào!
                    </p>
                  </div>
                </a>
              </div>
              <div className={classes.repons}>
                <a
                  href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">COSMO 1K/VÉ NGẠI CHI GIÁ VÉ</h4>
                    <p className="text-secondary">
                      Đồng giá 1k/vé cả tuần tất cả các rạp trên COSMO + Nhận
                      thêm 02 voucher thanh toán ZaloPay thả ga
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan
                      và màn trả thù...
                    </h4>
                    <p className="text-secondary">
                      Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                      hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                      nhất sự nghiệp của cô trong phim
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                  className={classes.news}
                >
                  <img
                    className={classes.fullImg}
                    src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                    alt="news-movie"
                  />
                  <div className="py-3">
                    <h4 className="card-title">
                      VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY
                      DIỆT QUỶ”...
                    </h4>
                    <p className="text-secondary">
                      Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                      về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                      Choi Woo Sik, tác phẩm kinh dị – hành
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 pl-0 pr-15">
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu
                      </h6>
                    </div>
                  </div>
                </a>
                <a
                  className={classes.bonusNews}
                  href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
                >
                  <div className="row mb-2">
                    <div className="col-3 px-0">
                      <img
                        className={classes.fullImg}
                        src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                        alt="news-movie"
                      />
                    </div>
                    <div className="col-9">
                      <h6 className="card-title">
                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KÊ
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </TabPanel>
        </Fade>
      </div>
      <div className="see-more-button">
        <Link to="/tintuc" className="btn btn-secondary">
          Xem Thêm <NavigateNextIcon />
        </Link>
      </div>
    </div>
  );
}
