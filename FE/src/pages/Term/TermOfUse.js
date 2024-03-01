import React from "react";
import "./TermOfUse.css";
import { useHistory, Link } from "react-router-dom";
import ScrollToTopOnPathChange from "../../components/Scroll";
const Breadcrumb = ({ title }) => {
  const history = useHistory();
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/dieukhoansudung">Điều khoản sử dụng</Link>

      <span>{title}</span>
    </div>
  );
};
const TermsOfService = () => {
  return (
    <>
      <ScrollToTopOnPathChange />
      <div className="terms-container">
        <Breadcrumb />
        <div className="terms-of-service">
          <h1>ĐIỀU KHOẢN SỬ DỤNG</h1>
          <p>
            Chào mừng bạn đã đến với website của <strong>Cosmo Cinemas</strong>.
            Cosmo Cinemas cung cấp các sản phẩm và dịch vụ dựa trên những điều
            kiện dưới đây. Khi bạn sử dụng sản phẩm và dịch vụ do Cosmo Cinemas
            cung cấp, bạn đồng ý với những <strong>điều khoản sử dụng</strong>{" "}
            sau. Vui lòng đọc kỹ các điều khoản dưới đây.
          </p>

          <section>
            <h2>1. BẢN QUYỀN</h2>
            <p>
              Tất cả nội dung được hiển thị trên website và các sản phẩm liên
              quan Cosmo Cinemas dưới bất kỳ hình thức nào như ký tự, hình ảnh,
              logo, video clip… là tài sản của Cosmo Cinemas hoặc các đối tác
              cung cấp nội dung của Cosmo Cinemas, được bảo vệ bởi luật pháp
              Việt Nam và các quy định bản quyền quốc tế. Sự biên soạn và hiển
              thị các nội dung này thông qua Cosmo Cinemas là tài sản riêng của
              Cosmo Cinemas.
            </p>
          </section>
          <section>
            <h2>2. QUYỀN TRUY CẬP</h2>
            <p>
              Với điều kiện bạn tuân theo các Thỏa thuận sử dụng và các khoản
              thanh toán cho các dịch vụ bổ sung, bạn có quyền truy cập và sử
              dụng các dịch vụ của Cosmo Cinemas. Quyền truy cập này không bao
              gồm bất kỳ giao dịch mua đi bán lại hoặc sử dụng vì mục đích
              thương mại các dịch vụ và nội dung của Cosmo Cinemas; các thông
              tin mô tả, đánh giá, bình luận; bất kỳ sự sao chép hoặc download
              thông tin để phục vụ lợi ích của bên thứ ba; hoặc việc sử dụng các
              công cụ khai thác dữ liệu. Cosmo Cinemas có quyền khiếu nại tất cả
              các hành động sao chép, sử dụng với mục đích thương mại mà không
              được sự đồng ý từ Cosmo Cinemas. Bạn có thể bị tước quyền truy cập
              vào Cosmo Cinemas nếu bạn không tuân theo các Thỏa thuận sử dụng
              này.
            </p>
          </section>
          <section>
            <h2>3. TÀI KHOẢN CỦA BẠN</h2>
            <p>
              Nếu bạn sử dụng dịch vụ của Cosmo Cinemas, bạn có trách nhiệm duy
              trì sự bảo mật tài khoản và mật khẩu của bạn, cũng như hạn chế sự
              truy cập vào máy tính cá nhân. Bạn cũng đồng ý chịu trách nhiệm
              cho tất cả các hoạt động phát sinh dưới tài khoản và mật khẩu của
              bạn. Bạn có trách nhiệm đảm bảo các bộ phim hoặc sản phẩm bạn mua
              từ Cosmo Cinemas phù hợp với độ tuổi của bạn. Cosmo Cinemas có
              quyền đơn phương từ chối cung cấp dịch vụ, đóng tài khoản cá nhân,
              xóa bỏ hoặc thay đổi nội dung, hoặc hủy đơn hàng của bạn.
            </p>
          </section>
          <section>
            <h2>4. THÔNG TIN PHIM , CHƯƠNG TRÌNH , SỰ KIỆN</h2>
            <p>
              Cosmo Cinemas luôn cố gắng cung cấp cho bạn những thông tin chính
              xác và đa chiều về các bộ phim có hệ thống phân phối vé thông qua
              Galaxy Cinema. Nếu vé bạn nhận được không tương ứng với chỗ ngồi
              bạn chọn khi đặt, bạn vui lòng liên hệ với nhân viên chăm sóc
              khách hàng của Galaxy Cinema để có thêm chi tiết theo email
              cosmocinemaldh@gmail.com hoặc fanpage Cosmo Cinemas. Tuy nhiên,
              Cosmo Cinemas không chịu bất kỳ trách nhiệm nào liên quan đến mức
              độ yêu thích của bạn đối với bộ phim.
            </p>
          </section>
          <section>
            <h2>5. GIÁ CẢ</h2>
            <p>
              Trừ phi có ghi chú khác bằng văn bản, mức giá được hiển thị cho
              mỗi loại sản phẩm trên Cosmo Cinemas là mức giá bán lẻ cuối cùng
              của sản phẩm. Chúng tôi không cam kết mức giá của chỗ ngồi bạn đặt
              sẽ không thay đổi cho đến khi bạn đặt vé. Tuy nhiên, đối với những
              chỗ ngồi bị sai giá, nếu như mức giá của chỗ ngồi trên thực tế cao
              hơn mức giá hiển thị trên Cosmo Cinemas, thì chúng tôi sẽ liên lạc
              trực tiếp với bạn về vấn đề này.
            </p>
          </section>
          <section>
            <h2>6. TÌNH TRẠNG CHỔ NGỒI</h2>
            <p>
              Cosmo Cinemas không cam kết chỗ ngồi bạn đang chọn chưa được khách
              hàng khác đặt cho đến khi bạn bắt đầu thanh toán cho đơn hàng của
              mình. Tuy nhiên, nếu bạn không nhận được đúng số ghế mà bạn đã đặt
              vì bất kỳ lý do gì, bạn vui lòng liên lạc với chúng tôi email
              cosmocinemaldh@gmail.com hoặc fanpage Cosmo Cinemas.
            </p>
          </section>
          <section>
            <h2>7. TRÁCH NHIỆM PHÁP LÝ</h2>
            <p>
              Trừ phi có ghi chú khác bằng văn bản, tất cả dịch vụ, thông tin,
              nội dung, công cụ, sản phẩm (bao gồm cả phần mềm) của Cosmo
              Cinemas hoặc được hiển thị trên website và các sản phẩm liên quan
              của Cosmo Cinemas được cung cấp dựa trên các quy chế hoạt động của
              Cosmo Cinemas và các nhà cung cấp. Bạn đồng ý rằng việc sử dụng
              các dịch vụ, thông tin, nội dung, công cụ và sản phẩm của Cosmo
              Cinemas hoặc được hiển thị trên website và các sản phẩm liên quan
              của Cosmo Cinemas thuộc phạm trù rủi ro riêng của bạn. Cosmo
              Cinemas không bảo đảm cho bất kỳ dịch vụ, thông tin, nội dung,
              công cụ của Cosmo Cinemas hoặc được hiển thị trên website và các
              sản phẩm liên quan của Cosmo Cinemas. Cosmo Cinemas server và các
              thông điệp truyền thông được gửi đi từ Cosmo Cinemas không chứa
              virus hay bất kỳ tác nhân gây hại nào cho bạn. Trừ phi có ghi chú
              khác bằng văn bản, Cosmo Cinemas từ chối trách nhiệm pháp lý cho
              bất kỳ thiệt hại nào phát sinh từ việc sử dụng các dịch vụ, thông
              tin, nội dung, công cụ và sản phẩm của Cosmo Cinemas hoặc được
              hiển thị trên website và các sản phẩm liên quan của Cosmo Cinemas.
              Nếu các bộ luật, và quy định pháp luật được ban hành bởi Nhà Nước
              có bất kỳ nội dung nào mâu thuẫn với bất kỳ quy định về từ chối
              bảo đảm và trách nhiệm pháp lý, thì những điểm quy định đó không
              có hiệu lực áp dụng đối với bạn. Điều này đồng nghĩa với việc bạn
              có quyền lợi bổ sung.
            </p>
          </section>
        </div>
        <div className="terms-sidebar">
          <h3>Thông tin khác</h3>
          <div className="sidebar-links">
            <Link to="/dieukhoansudung" className="sidebar-link">
              Điều khoản sử dụng
            </Link>
            <Link to="/chinhsachbaomat" className="sidebar-link">
              Chính sách bảo mật
            </Link>
            <Link to="/faq" className="sidebar-link">
              FAQ
            </Link>
            <Link to="/contact" className="sidebar-link">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
