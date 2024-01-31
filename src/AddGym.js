import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import GymDetail from "./GymDetail";

const AddGym = () => {
  const style = {
    position: "relative",
    margin: "auto",
    transform: "translate(-2%, 7%)",
    width: 414,
    bgcolor: "none",
    border: "none",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* Add Gym */}
      <div style={{ display: "none" }}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {/* hompage again */}
            <GymDetail />
            {/* endhomepage */}
          </Box>
        </Modal>
      </div>
      <div className="homepage">
        <div className="add-gym">
          <div className="top">
            <div className="head">
              <div className="top-rectangle">
                <div></div>
              </div>
              <div>
                <div className="name">Thêm phòng Gym</div>
              </div>
              <div className="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M18 18L6 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              {/* aaaa */}
              <div className="back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="find-gyms">
              <div className="buttons">
                <div className="button-1">
                  Tỉnh/ Thành phố <font color="#F5002C">*</font>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="button-1 button-muted">
                  Quận/ Huyện <font color="#F5002C">*</font>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="search-bar">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <input type="text" placeholder="Tìm kiếm phòng Gym" />
              </div>
            </div>
            <div className="local-detail">
              {/* aaa */}
              <div
                className="single-local"
                onClick={handleOpen}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <div className="image">
                  <img src={require("./images/place1.png")} alt="" />
                </div>
                <div className="name">The New Gym Tân Bình</div>
                <div className="location">
                  123 Địa chỉ, Phường 12, quận Tân Bình, TP.HCM
                </div>
              </div>
              <div className="single-local">
                <div className="image">
                  <img src={require("./images/place1.png")} alt="" />
                </div>
                <div className="name">The New Gym Tân Bình</div>
                <div className="location">
                  123 Địa chỉ, Phường 12, quận Tân Bình, TP.HCM
                </div>
              </div>
              <div className="single-local">
                <div className="image">
                  <img src={require("./images/place1.png")} alt="" />
                </div>
                <div className="name">The New Gym Tân Bình</div>
                <div className="location">
                  123 Địa chỉ, Phường 12, quận Tân Bình, TP.HCM
                </div>
              </div>
            </div>
          </div>
          <div className="cancel">
            <div className="button-2">Huỷ</div>
          </div>
        </div>
      </div>
      {/* done add gym */}
    </div>
  );
};

export default AddGym;
