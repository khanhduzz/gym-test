import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddGym from "./AddGym";

const TrainingPlage = () => {
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
      {/* Noi tap */}
      <div style={{ display: "none" }}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {/* hompage again */}
            <AddGym />
            {/* endhomepage */}
          </Box>
        </Modal>
      </div>
      <div className="start">
        <div className="head">
          <div className="top-rectangle">
            <div></div>
          </div>
          <div>
            <div className="name">Nơi tập</div>
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
        </div>
        <div className="buttons">
          <div className="button-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <circle cx="12.8261" cy="12" r="10" fill="#0352FE" />
              <path
                d="M13.0001 8L13.0001 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.058 12L8.9421 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Nơi tập của bạn
          </div>
          <div
            className="button-1"
            onClick={handleOpen}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <circle cx="12.8261" cy="12" r="10" fill="#0352FE" />
              <path
                d="M13.0001 8L13.0001 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.058 12L8.9421 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Phòng Gym
          </div>
        </div>
        {/* Place detail */}
        <div className="places-detail">
          <div className="places">
            <div className="choice-place">
              <div className="infomation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.5"
                    fill="#272727"
                    stroke="#939393"
                  />
                </svg>
                <div className="image">
                  <img src={require("./images/place1.png")} alt="" />
                </div>
                <div className="titles">
                  <div className="top">The New Gym Tân Bình</div>
                  <div className="bottom">34 Thiết bị tập</div>
                </div>
              </div>
            </div>
            <div className="edit-info">
              <div className="first"></div>
              <div className="second">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M12.7964 20.5996H5.90007C4.62971 20.5996 3.63156 19.6922 3.45008 18.4218L1.99823 5.62741H16.7889L15.2464 18.4218C15.0649 19.6922 14.0667 20.5996 12.7964 20.5996Z"
                    stroke="#939393"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 3.17769H17.5148"
                    stroke="#939393"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.35382 1H12.1612"
                    stroke="#939393"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.89813 9.34787L7.35184 15.5182"
                    stroke="#939393"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.889 9.34787L11.3445 15.5182"
                    stroke="#939393"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="places">
            <div className="choice-place">
              <div className="infomation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.5"
                    fill="#272727"
                    stroke="#939393"
                  />
                </svg>
                <div className="image">
                  <img src={require("./images/place2.png")} alt="" />
                </div>
                <div className="titles">
                  <div className="top">Công viên Gia Định</div>
                  <div className="bottom">12 Thiết bị tập</div>
                </div>
              </div>
            </div>
            <div className="edit-info">
              <div className="first"></div>
              <div className="second">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.6168 3.75204C16.8552 3.51361 17.1383 3.32448 17.4498 3.19545C17.7613 3.06641 18.0952 3 18.4324 3C18.7696 3 19.1035 3.06641 19.415 3.19545C19.7265 3.32448 20.0095 3.51361 20.248 3.75204C20.4864 3.99046 20.6755 4.27351 20.8046 4.58503C20.9336 4.89655 21 5.23043 21 5.56761C21 5.90479 20.9336 6.23868 20.8046 6.55019C20.6755 6.86171 20.4864 7.14476 20.248 7.38319L7.99283 19.6383L3 21L4.36168 16.0072L16.6168 3.75204Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M5 15.5L8.5 19" stroke="#878787" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="places-active">
            <div className="choice-place">
              <div className="infomation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle cx="9" cy="9" r="9" fill="#0352FE" />
                  <path
                    d="M5.0625 9L8.4375 11.8125L12.9375 6.75"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="image">
                  <div></div>
                  <img src={require("./images/place3.png")} alt="" />
                </div>
                <div className="titles">
                  <div className="top">Phòng Gym</div>
                  <div className="bottom">140 Thiết bị tập</div>
                </div>
              </div>
            </div>
            <div className="edit-info">
              <div className="first">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L14.781 8.59516L21 9.4979L16.5 13.8507L17.562 20L12 17.0952L6.438 20L7.5 13.8507L3 9.4979L9.219 8.59516L12 3Z"
                    fill="#FBBC05"
                    stroke="#FBBC05"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="second"></div>
            </div>
          </div>
          <div className="places">
            <div className="choice-place">
              <div className="infomation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.5"
                    fill="#272727"
                    stroke="#939393"
                  />
                </svg>
                <div className="image">
                  <img src={require("./images/place4.png")} alt="" />
                </div>
                <div className="titles">
                  <div className="top">Nhà</div>
                  <div className="bottom">10 Thiết bị tập</div>
                </div>
              </div>
            </div>
            <div className="edit-info">
              <div className="first"></div>
              <div className="second"></div>
            </div>
          </div>
          <div className="places">
            <div className="choice-place">
              <div className="infomation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.5"
                    fill="#272727"
                    stroke="#939393"
                  />
                </svg>
                <div className="image">
                  <img src={require("./images/place5.png")} alt="" />
                </div>
                <div className="titles">
                  <div className="top">Công viên</div>
                  <div className="bottom">32 Thiết bị tập</div>
                </div>
              </div>
            </div>
            <div className="edit-info">
              <div className="first"></div>
              <div className="second"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPlage;
