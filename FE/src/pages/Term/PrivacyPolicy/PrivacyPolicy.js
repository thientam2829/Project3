import React from "react";
import "../TermOfUse.css";
import { useHistory, Link } from "react-router-dom";
import ScrollToTopOnPathChange from "../../../components/Scroll";
const Breadcrumb = ({ title }) => {
  const history = useHistory();
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/chinhsachbaomat">Chính sách bảo mật</Link>

      <span>{title}</span>
    </div>
  );
};
const PrivacyPolicy = () => {
  return (
    <>
      <ScrollToTopOnPathChange />

      <div className="terms-container">
        <Breadcrumb />
        <div className="terms-of-service">
          <h1>CHÍNH SÁCH BẢO MẬT</h1>
          <section>
            <h2>1. PHẠM VI THU THẬP THÔNG TIN</h2>
            <p>
              Việc cung cấp thông tin cá nhân của thành viên được thực hiện chủ
              yếu trực tiếp trên ứng dụng / website Cosmo Cinemas trong quá
              trình thành viên đăng ký tài khoản và tương tác với Cosmo Cinemas
              (Ví dụ, Cosmo Cinemas sử dụng "cookies" giống như nhiều website
              khác để ghi nhận một số loại thông tin khi trình duyệt web của
              thành viên truy cập vào Cosmo Cinemas hoặc các quảng cáo và các
              nội dung khác được hiển thị trên Cosmo Cinemas, hoặc về Galaxy
              Cinema trên các website khác..) Các thông tin thu thập chủ yếu bao
              gồm: Họ tên, ngày tháng năm sinh, địa chỉ, số điện thoại, email,
              thông tin đăng nhập tài khoản (tên đăng nhập,, địa chỉ đăng
              nhập,...). Ngoài ra, khi tải ứng dụng Cosmo Cinemas, ứng dụng sẽ
              yêu cầu người dùng cho phép truy cập thêm những thông tin trên
              thiết bị di động để cung cấp một số tính năng nâng cao. Sau khi
              nhận được thông báo, Khách hàng được quyền lựa chọn việc cho phép
              hay không cho phép thu thập thông qua cơ chế của ứng dụng. Xem
            </p>
          </section>
          <section>
            <h2>2. MỤC ĐÍCH THU THẬP THÔNG TIN</h2>
            <p>
              Cosmo Cinemas thu thập thông tin cá nhân nhằm phục vụ cho các mục
              đích sau: Duy Trì Tài Khoản: để tạo và duy trì tài khoản của thành
              viên, bao gồm cả các chương trình thành viên thân thiết hoặc các
              chương trình thưởng đi kèm với tài khoản của thành viên; Đặt vé:
              Cosmo Cinemas sẽ dựa trên thông tin thành viên cung cấp để đặt vé
              cho thành viên. Dịch Vụ Chăm Sóc Thành viên: để nhận và phản hồi
              cho các yêu cầu, khiếu nại và phản hồi của thành viên; Cá Nhân
              Hóa: Cosmo Cinemas có thể tổ hợp dữ liệu được thu thập để có một
              cái nhìn hoàn chỉnh hơn về từng thành viên và từ đó cho phép chúng
              tôi phục vụ tốt hơn với sự cá nhân hóa mạnh hơn ở các khía cạnh,
              bao gồm nhưng không giới hạn: Để cải thiện và cá nhân hóa trải
              nghiệm của thành viên trên ứng dụng Cosmo Cinemas Để cải thiện các
              tiện ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu cầu được
              cá thể hóa Để phục vụ thành viên với những giới thiệu, quảng cáo
              được điều chỉnh phù hợp với sự quan tâm của thành viên. An Ninh:
              cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản người
              dùng của thành viên hoặc các hoạt động giả mạo thành viên. Theo
              yêu cầu của pháp luật: tùy quy định của pháp luật vào từng thời
              điểm, Cosmo Cinemas có thể thu thập, lưu trữ và cung cấp theo yêu
              cầu của cơ quan nhà nước có thẩm quyền.
            </p>
          </section>
          <section>
            <h2>3. NGUYÊN TẮC THU THẬP VÀ QUẢN LÍ THÔNG TIN</h2>
            <p>
              Thông tin cá nhân của thành viên trên ứng dụng Cosmo Cinemas được
              Cosmo Cinemas cam kết bảo mật tuyệt đối theo chính sách bảo vệ
              thông tin cá nhân của Cosmo Cinemas, phù hợp với quy định của Luật
              Bảo về quyền lợi người tiêu dùng. Việc thu thập và sử dụng thông
              tin của mỗi Thành viên chỉ được thực hiện khi có sự đồng ý của
              thành viên đó trừ những trường hợp pháp luật có quy định khác.
              Thành viên có quyền cung cấp thông tin cá nhân cho Cosmo Cinemas
              và có thể thay đổi quyết định đó vào bất cứ lúc nào. Mọi thông tin
              cá nhân do thành viên cung cấp sẽ được lưu giữ bởi Cosmo Cinemas.
              Nhân viên và Đối tác của Cosmo Cinemas trong quá trình thực hiện
              các mục đích nêu tại điều này có thể tiếp cận với thông tin của
              thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ
              được phép sử dụng thông tin của thành viên cho mục đích được chỉ
              định, không sử dụng cho mục đích của riêng họ (kể cả tiếp thị trực
              tiếp) trừ khi được thành viên đồng ý. Trong trường hợp máy chủ lưu
              trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân
              thành viên, Cosmo Cinemas sẽ có trách nhiệm thông báo vụ việc cho
              cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành
              viên được biết.
            </p>
          </section>
          <section>
            <h2>
              4.TRÁCH NHIỆM CỦA THÀNH VIÊN TRONG QUÁ TRÌNH CUNG CẤP VÀ QUẢN LÍ
              THÔNG TIN
            </h2>
            <p>
              Đảm bảo tính xác thực, đầy đủ, chính xác, và cập nhật thường xuyên
              đối với các thông tin cung cấp cho Cosmo Cinemas và chịu trách
              nhiệm về tính pháp lý của những thông tin đó. Cosmo Cinemas không
              chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên
              quan đến quyền lợi của Thành viên đó nếu xét thấy thông tin cá
              nhân thành viên đó cung cấp không chính xác. Bảo mật thông tin và
              lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu
              và hộp thư điện tử của mình. Thông báo kịp thời cho Cosmo Cinemas
              về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu
              giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải
              quyết phù hợp.
            </p>
          </section>
          <section>
            <h2>5. PHẠM VI SỬ DỤNG THÔNG TIN</h2>
            <p>
              Ứng dụng Cosmo Cinemas sử dụng thông tin thành viên cung cấp để:
              Xác thực năng lực của thành viên; Cung cấp đơn hàng đến cho thành
              viên; Thông tin gửi cho rạp, kiểm tra thông tin để soát vé; Gửi
              các thông báo về các hoạt động trao đổi thông tin giữa các Thành
              viên và ứng dụng Cosmo Cinemas; Ngăn ngừa các hoạt động phá hủy
              tài khoản người dùng của thành viên hoặc các hoạt động giả mạo
              thành viên; Tiến hành các hoạt động tra cứu và phân tích người
              dùng nhằm nâng cao chất lượng dịch vụ, quản lý và bảo vệ các thông
              tin, hệ thống kỹ thuật dịch vụ, đo lường hiệu suất dịch vụ do
              Cosmo Cinemas cung ứng và cải thiện sản phẩm, dịch vụ của Galaxy
              Cinema. Liên lạc và giải quyết với thành viên trong những trường
              hợp đặc biệt; Không sử dụng thông tin cá nhân của thành viên ngoài
              mục đích xác nhận và liên hệ có liên quan đến giao dịch tại ứng
              dụng Cosmo Cinemas;
            </p>
          </section>
          <section>
            <h2>6. THỜI GIAN LƯU TRỮ THÔNG TIN</h2>
            <p>
              Thông tin cá nhân của thành viên sẽ được lưu trữ trên ứng dụng cho
              đến khi thành viên có yêu cầu hủy bỏ hoặc thành viên tự đăng nhập
              và thực hiện hủy bỏ. Trong mọi trường hợp, thông tin cá nhân thành
              viên sẽ được bảo mật trên máy chủ Cosmo Cinemas theo thời hạn được
              quy định tại các Pháp luật có liên quan.
            </p>
          </section>
          <section>
            <h2>7. NGƯỜI HOẶC TỔ CHỨC ĐƯỢC TIẾP NHẬN THÔNG TIN</h2>
            <p>
              Thông tin về thành viên là một phần dữ liệu quan trọng để Galaxy
              Cinema có thể khai thác và cải thiện trải nghiệm của thành viên.
              Và hoạt động kinh doanh của Cosmo Cinemas không bao gồm việc bán
              các thông tin đấy cho bên thứ ba. Chúng tôi chỉ cung cấp thông tin
              thành viên cho các bên được liệt kê dưới đây, hoặc cho bên thứ ba
              nhằm đảm bảo quyền lợi của thành viên theo những cam kết bảo mật
              của Cosmo Cinemas. Nhân viên Cosmo Cinemas: Trong quá trình vận
              hành, nhân viên Cosmo Cinemas có thể tiếp cận với thông tin của
              thành viên. Những chủ thể này có trách nhiệm giữ bí mật và chỉ
              được pháp sử dụng thông tin của thành viên cho mục đích được chỉ
              định. Đối Tác: Khi một bên thứ ba liên quan với các giao dịch của
              thành viên, Cosmo Cinemas sẽ chia sẻ những thông tin thành viên
              liên quan đến giao dịch đó cho bên thứ ba tương ứng. Nhà cung cấp
              dịch vụ độc lập: Cosmo Cinemas sử dụng những tổ chức và cá nhân
              khác để thay mặt Cosmo Cinemas thực hiện một số chức năng, như
              cung cấp dịch vụ thanh toán qua thẻ... Họ có thể tiếp cận những
              thông tin cá nhân cần thiết để hoàn thành công việc của họ, nhưng
              không được quyền sử dụng các thông tin cá nhân đó để phục vụ cho
              mục đích khác. Bảo vệ Cosmo Cinemas và các đối tác khác: Galaxy
              Cinema sẽ cung cấp các thông tin tài khoản và các thông tin cá
              nhân trong trường hợp Cosmo Cinemas tin rằng sự cung cấp thông tin
              này không vi phạm pháp luật; bị bắt buộc hoặc phù hợp với các thỏa
              thuận sử dụng và các thỏa thuận khác; hoặc bảo vệ quyền, tài sản,
              và sự an toàn của Cosmo Cinemas, các thành viên khác, và các đối
              tượng khác. Sự cung cấp này có thể bao gồm việc trao đổi thông tin
              với các công ty, tổ chức nhằm chống lại những gian lận và giảm
              thiểu rủi ro. Tuy nhiên, sự cung cấp này không bao gồm việc bán,
              cho thuê, chia sẻ, hoặc công bố các thông tin cá nhân vì mục đích
              thương mại. Một số trường hợp khác với những trường hợp được đề
              cập ở trên, thành viên sẽ nhận được thông báo về việc thông tin
              của bạn có thể được chia sẻ cho bên thứ ba, và bạn có quyền lựa
              chọn cho phép sự chia sẻ đó hay không.
            </p>
          </section>
          <section>
            <h2>8. THÔNG TIN SỬA ĐỔI</h2>
            <p>
              Khi thành viên truy cập vào Cosmo Cinemas, sự truy cập của thành
              viên và bất kỳ vấn đề phát sinh nào liên quan đến sự bảo mật đều
              tuân theo các điều khoản trong Chính sách bảo mật này và Thỏa
              thuận sử dụng, bao gồm giới hạn thiệt hại, cách giải quyết các vấn
              đề phát sinh và việc áp dụng luật Việt Nam. Nếu thành viên có bất
              kỳ câu hỏi nào liên quan đến sự bảo mật tại Cosmo Cinemas, vui
              lòng liên lạc với Cosmo Cinemas thông qua điện thoại 19002224. Do
              Cosmo Cinemas liên tục cải thiện dịch vụ và sản phẩm để phục vụ
              thành viên tốt hơn, nên Chính sách bảo mật và Thỏa thuận sử dụng
              sẽ thường xuyên được thay đổi và cập nhật. Cosmo Cinemas có thể
              email thông báo cho thành viên về những thay đổi trong những chính
              sách. Tuy nhiên, Cosmo Cinemas cũng khuyến khích thành viên thường
              xuyên theo dõi trên website của Cosmo Cinemas để cập nhật với
              những thay đổi trong chính sách của chúng tôi. Trừ trường hợp có
              văn bản với nội dung khác, Chính sách bảo mật hiện tại của chúng
              tôi được áp dụng cho tất cả những thông tin mà chúng tôi có về bạn
              và tài khoản của bạn.
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

export default PrivacyPolicy;
