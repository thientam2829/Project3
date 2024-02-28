import React from "react";

import UseApiCheckIsUserBookTicket from "../../utilities/useApiCheckIsUserBooking";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Tooltip from "@material-ui/core/Tooltip";

export default function ButtonDelete({ onDeleted, taiKhoan }) {
  const isUserBookTicket = UseApiCheckIsUserBookTicket(taiKhoan);
  return (
    <Tooltip title={isUserBookTicket ? "Không thể xóa" : "Xóa"}>
      <IconButton
        color="primary"
        style={{ color: isUserBookTicket ? "#00000042" : "#f50057" }}
        onClick={() => onDeleted(taiKhoan)}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
}
// import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import Tooltip from "@material-ui/core/Tooltip";
// // Import deleteUser action
// import { deleteUser } from "../../reducers/actions/UsersManagement";

// export default function ButtonDelete({ onDeleted, taiKhoan }) {
//   // Sử dụng trực tiếp hàm deleteUser khi người dùng nhấn nút
//   const handleDelete = (taiKhoan) => {
//     deleteUser(taiKhoan); // Gọi hàm deleteUser với taiKhoan
//     onDeleted(taiKhoan); // Gọi callback onDeleted sau khi xóa
//   };

//   return (
//     <Tooltip title="Xóa">
//       <IconButton
//         color="primary"
//         style={{ color: "#f50057" }}
//         onClick={() => handleDelete(taiKhoan)}
//       >
//         <DeleteForeverIcon />
//       </IconButton>
//     </Tooltip>
//   );
// }
