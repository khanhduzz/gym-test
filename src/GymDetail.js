import React from "react";

const GymDetail = () => {
  return (
    <div>
      {/* machine gym */}
      <div className="homepage">
        <div className="detail-gym">
          <div className="head">
            <div className="top-rectangle">
              <div></div>
            </div>
            <div>
              <div className="name">The New Gym Tân Bình</div>
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
            {/* aaa */}
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
          <div className="infomation">
            <div className="head-detail">
              <div className="head-image">
                <img src={require("./images/place1.png")} alt="" />
              </div>
              <div className="head-info">
                <div className="info">
                  123 Địa chỉ, Phường 12, quận Tân Bình, TP.HCM
                </div>
                <div className="info">Giờ hoạt động: 24/7</div>
              </div>
            </div>
            <div className="machine">
              <div className="active-machine">
                <div className="button-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.0136 0H21.1345C21.5605 0.0596875 21.8161 0.28625 21.9014 0.679688C22.0098 1.17875 22.1144 1.64859 22.215 2.08922C22.2928 2.42953 22.3212 2.65219 22.3003 2.75719C22.2575 2.97187 22.1567 3.14391 21.998 3.27328C21.9158 3.34016 21.7683 3.41359 21.5555 3.49359C20.4692 3.90109 19.3967 4.30703 18.338 4.71141C18.3239 4.71672 18.3184 4.72672 18.3216 4.74141L19.9514 12.3905C19.9519 12.3926 19.9518 12.3949 19.9512 12.397C19.9506 12.3992 19.9495 12.4011 19.9479 12.4027C19.9463 12.4044 19.9444 12.4056 19.9422 12.4063C19.94 12.407 19.9377 12.4072 19.9355 12.4069L18.1889 12.1444C18.1844 12.1437 18.1802 12.1416 18.1768 12.1385C18.1735 12.1353 18.1711 12.1311 18.1701 12.1266C17.6467 9.655 17.1166 7.17172 16.5797 4.67672C16.5131 4.36766 16.4889 4.16203 16.507 4.05984C16.5787 3.65859 16.8244 3.47625 17.1923 3.33797C18.2983 2.92234 19.3892 2.50922 20.4651 2.09859C20.471 2.09637 20.4758 2.09211 20.4788 2.08659C20.4817 2.08107 20.4825 2.07468 20.4811 2.06859C20.4026 1.72203 20.3261 1.37312 20.2514 1.02187C20.1436 0.512344 20.4923 0.0614062 21.0136 0Z"
                      fill="#B8E5FF"
                    />
                    <path
                      d="M8.55234 8.93017C8.54974 8.9302 8.54718 8.93087 8.5449 8.93212C8.54261 8.93336 8.54067 8.93515 8.53924 8.93733C8.5378 8.9395 8.53692 8.94199 8.53667 8.94459C8.53643 8.94718 8.53682 8.94979 8.53781 8.9522L9.30516 10.8024C9.30586 10.804 9.30611 10.8058 9.30588 10.8075C9.30565 10.8093 9.30494 10.811 9.30383 10.8124C9.30273 10.8138 9.30126 10.8148 9.2996 10.8155C9.29793 10.8161 9.29613 10.8163 9.29438 10.8159L7.45453 10.5455C7.44779 10.5445 7.44141 10.5418 7.436 10.5376C7.43058 10.5334 7.42631 10.5279 7.42359 10.5216L6.77297 8.9536C6.76609 8.93673 6.75375 8.92845 6.73594 8.92876C6.26688 8.93095 5.81922 8.93064 5.39297 8.92782C5.16672 8.92626 4.97375 8.84985 4.81406 8.6986C4.34484 8.2547 4.52625 7.45782 5.16 7.27689C5.24875 7.25157 5.35906 7.23907 5.49094 7.23939C6.745 7.24407 7.93313 7.2447 9.05531 7.24126C9.54 7.23985 9.93328 7.58298 9.94031 8.07798C9.94781 8.56735 9.55734 8.9311 9.07031 8.9297C8.89938 8.92939 8.72672 8.92954 8.55234 8.93017Z"
                      fill="#B8E5FF"
                    />
                    <path
                      d="M20.7478 24H20.6128C20.3962 23.9722 20.2072 23.8763 20.0456 23.7122C19.2459 22.9016 18.4466 22.0905 17.6475 21.2789C17.5978 21.2288 17.5598 21.1688 17.5153 21.1153C17.5019 21.0988 17.4847 21.0922 17.4637 21.0956C14.3531 21.5686 11.2523 22.0359 8.14453 22.4672C7.72328 22.5256 7.33078 22.5741 6.96703 22.6125C6.70266 22.6406 6.45703 22.6153 6.19453 22.5975C5.92125 22.5792 5.65266 22.5075 5.38687 22.4569C5.38006 22.4556 5.37302 22.456 5.36633 22.458C5.35964 22.4601 5.3535 22.4637 5.34844 22.4686C4.93156 22.8845 4.51516 23.3005 4.09922 23.7164C3.93391 23.8814 3.74219 23.9759 3.52406 24H3.40594C2.93375 23.9278 2.67328 23.6663 2.62453 23.2153C2.61016 23.0825 2.64187 22.9369 2.71969 22.7784C2.76906 22.6781 2.85656 22.5674 2.98219 22.4461C3.21469 22.2217 3.45859 21.9789 3.71391 21.7177C3.72641 21.7049 3.72562 21.693 3.71156 21.682C3.50859 21.5208 3.30047 21.3722 3.11156 21.1894C2.36375 20.4678 1.86609 19.6227 1.61859 18.6539C1.41547 17.8592 1.40062 17.0497 1.57406 16.2253C1.63875 15.9172 1.73344 15.6175 1.85812 15.3263C2.34344 14.1913 3.12453 13.3241 4.20141 12.7247C4.86172 12.3569 5.59516 12.1442 6.40172 12.0867C6.59484 12.073 6.81547 12.0834 7.06359 12.1181C11.2514 12.7027 15.5367 13.3627 20.1286 14.0677C20.2667 14.0889 20.3898 14.1253 20.498 14.1769C21.2773 14.5475 21.8475 15.1095 22.2084 15.863C22.6266 16.7367 22.6566 17.7577 22.2984 18.6502C21.8292 19.8188 20.8055 20.6002 19.5698 20.8074C19.5684 20.8077 19.567 20.8084 19.5659 20.8094C19.5647 20.8103 19.5639 20.8116 19.5634 20.813C19.5629 20.8144 19.5628 20.8159 19.5631 20.8173C19.5634 20.8187 19.5641 20.8199 19.5652 20.8209C20.0986 21.3678 20.6075 21.8831 21.0919 22.3669C21.2912 22.5659 21.4111 22.7169 21.4514 22.8197C21.6694 23.3747 21.3389 23.9194 20.7478 24ZM9.37687 17.3531C9.37687 16.6505 9.09774 15.9766 8.60089 15.4797C8.10404 14.9829 7.43016 14.7038 6.7275 14.7038C6.02484 14.7038 5.35096 14.9829 4.85411 15.4797C4.35725 15.9766 4.07812 16.6505 4.07812 17.3531C4.07812 17.7011 4.14665 18.0456 4.2798 18.367C4.41294 18.6884 4.60809 18.9805 4.85411 19.2265C5.10013 19.4725 5.39219 19.6677 5.71363 19.8008C6.03506 19.934 6.37958 20.0025 6.7275 20.0025C7.07542 20.0025 7.41993 19.934 7.74137 19.8008C8.06281 19.6677 8.35487 19.4725 8.60089 19.2265C8.84691 18.9805 9.04206 18.6884 9.1752 18.367C9.30835 18.0456 9.37687 17.7011 9.37687 17.3531Z"
                      fill="#B8E5FF"
                    />
                  </svg>
                  <div className="button-info">
                    <div className="button-top">Cardio</div>
                    <div className="button-bot">50</div>
                  </div>
                </div>
              </div>
              <div className="off-machine">
                <div className="button-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.50624 0H20.4994C20.9367 0.0754687 21.1439 0.370312 21.143 0.788906C21.1395 1.91984 21.1391 3.08219 21.1416 4.27594C21.1416 4.28477 21.145 4.29327 21.1512 4.29965C21.1574 4.30603 21.1659 4.30979 21.1748 4.31016C21.3392 4.31578 21.5073 4.31563 21.6792 4.30969C21.8611 4.30344 22.0087 4.32469 22.1222 4.37344C22.3748 4.48219 22.5473 4.74 22.5473 5.01844C22.5473 6.91062 22.5481 8.7525 22.5497 10.5441C22.5501 10.8928 22.4175 11.1684 22.0851 11.2997C21.9964 11.3344 21.8408 11.3497 21.6183 11.3456C21.4739 11.3431 21.3231 11.343 21.1659 11.3452C21.1497 11.3452 21.1416 11.3533 21.1416 11.3695C21.1403 11.522 21.1411 11.6781 21.1439 11.8378C21.1473 12.0484 21.1298 12.2017 21.0914 12.2977C20.8519 12.8972 20.0002 12.8967 19.7812 12.2873C19.7419 12.1783 19.7255 12.0303 19.732 11.8434C19.7377 11.6809 19.7372 11.5245 19.7306 11.3742C19.7304 11.3671 19.7274 11.3603 19.7223 11.3552C19.7171 11.3502 19.7102 11.3473 19.703 11.347C19.5523 11.3408 19.3964 11.3403 19.2352 11.3456C19.0317 11.3519 18.8806 11.3352 18.7819 11.2955C18.5002 11.182 18.3277 10.9242 18.3277 10.6266C18.3277 8.79531 18.328 6.94172 18.3286 5.06578C18.3286 4.75734 18.4678 4.49531 18.7542 4.37297C18.8698 4.32359 19.0258 4.3025 19.222 4.30969C19.3792 4.31563 19.54 4.31594 19.7044 4.31063C19.7125 4.31026 19.7201 4.30679 19.7257 4.30094C19.7313 4.29509 19.7344 4.28731 19.7344 4.27922V1.44703C19.7344 1.43622 19.73 1.42584 19.7223 1.41819C19.7146 1.41055 19.7041 1.40625 19.6931 1.40625H14.1328C14.1172 1.40625 14.1094 1.41406 14.1094 1.42969V2.87109C14.1094 2.88042 14.1057 2.88936 14.0991 2.89595C14.0925 2.90255 14.0835 2.90625 14.0742 2.90625H9.91405C9.89843 2.90625 9.89062 2.89844 9.89062 2.88281V1.46484C9.89062 1.4493 9.88444 1.4344 9.87346 1.42341C9.86247 1.41242 9.84756 1.40625 9.83202 1.40625H4.27734C4.27423 1.40625 4.27125 1.40748 4.26905 1.40968C4.26685 1.41188 4.26562 1.41486 4.26562 1.41797V4.275C4.26561 4.28416 4.26913 4.29297 4.27544 4.29953C4.28174 4.3061 4.29033 4.30991 4.29937 4.31016C4.46343 4.31547 4.62952 4.31547 4.79765 4.31016C4.99046 4.30359 5.1439 4.32625 5.25796 4.37813C5.53406 4.50234 5.67374 4.76484 5.67327 5.06578C5.67077 6.90891 5.67093 8.74141 5.67374 10.5633C5.67421 10.8956 5.53312 11.1788 5.21062 11.2959C5.10093 11.3362 4.95218 11.353 4.76437 11.3461C4.60468 11.3405 4.44624 11.3403 4.28906 11.3456C4.27437 11.3459 4.26687 11.3533 4.26655 11.3677C4.26218 11.5245 4.2628 11.6831 4.26843 11.8434C4.27499 12.0391 4.25624 12.1934 4.21218 12.3066C3.97546 12.9103 3.12187 12.8812 2.90202 12.2822C2.86577 12.1828 2.85093 12.0348 2.85749 11.8383C2.86281 11.6805 2.86234 11.5258 2.85609 11.3742C2.85574 11.3671 2.85277 11.3604 2.84774 11.3554C2.84272 11.3503 2.836 11.3474 2.8289 11.347C2.34187 11.3259 1.77327 11.4745 1.51359 10.9223C1.47077 10.8311 1.44984 10.6742 1.45077 10.4517C1.4564 8.70078 1.45515 6.95297 1.44702 5.20828C1.44609 5.01516 1.4653 4.86641 1.50468 4.76203C1.63968 4.40625 1.9589 4.29703 2.33015 4.31016C2.50109 4.31578 2.67202 4.31563 2.84296 4.30969C2.84702 4.30945 2.85084 4.30766 2.85363 4.3047C2.85642 4.30174 2.85797 4.29782 2.85796 4.29375C2.86327 3.21281 2.86187 2.10359 2.85374 0.966094C2.85187 0.708594 2.87812 0.519844 2.93249 0.399844C3.03093 0.181719 3.22218 0.0484375 3.50624 0Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M15.2597 4.5661C15.3797 4.63922 15.5067 4.70297 15.6141 4.79344C16.05 5.16 16.3016 5.63328 16.3687 6.21328C16.3894 6.39047 16.3742 6.6761 16.3233 7.07016C16.1427 8.4636 15.9642 9.8836 15.788 11.3302C15.7876 11.3339 15.7859 11.3374 15.7831 11.3399C15.7803 11.3424 15.7767 11.3438 15.773 11.3438H8.22797C8.22424 11.3438 8.22062 11.3424 8.21778 11.3399C8.21494 11.3374 8.21306 11.334 8.2125 11.3302C8.01875 9.76985 7.82625 8.22672 7.635 6.70078C7.61531 6.54391 7.61359 6.39032 7.62984 6.24C7.7164 5.44407 8.12187 4.86703 8.84625 4.50891C9.10781 4.37985 9.40625 4.315 9.74156 4.31438C11.3209 4.31188 12.8364 4.31172 14.288 4.31391C14.6016 4.31438 14.9812 4.39594 15.2597 4.5661Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M16.2117 12.75H7.78828C7.39607 12.75 7.07812 13.0679 7.07812 13.4602V14.8523C7.07812 15.2446 7.39607 15.5625 7.78828 15.5625H16.2117C16.6039 15.5625 16.9219 15.2446 16.9219 14.8523V13.4602C16.9219 13.0679 16.6039 12.75 16.2117 12.75Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M14.8678 24H9.12609C8.23172 23.8561 8.29922 22.6181 9.20437 22.5961C9.43218 22.5908 9.65109 22.5909 9.86109 22.5966C9.88078 22.5972 9.89062 22.5876 9.89062 22.568V19.8337C9.89062 19.8197 9.88504 19.8062 9.87511 19.7963C9.86517 19.7864 9.8517 19.7808 9.83765 19.7808L8.50922 19.7812C8.4939 19.7812 8.48609 19.7889 8.48578 19.8042C8.48172 19.9601 8.48203 20.1198 8.48672 20.2833C8.49203 20.4755 8.47484 20.625 8.43515 20.7319C8.32219 21.0347 8.04375 21.1912 7.725 21.1898C6.4375 21.1848 5.11469 21.1851 3.75656 21.1908C3.53719 21.1917 3.3775 21.1695 3.2775 21.1242C2.9339 20.9691 2.85 20.6723 2.85469 20.2964C2.86375 19.5348 2.86375 18.748 2.85469 17.9358C2.85187 17.6636 2.8739 17.4803 2.92078 17.3859C3.05062 17.1253 3.28828 16.9687 3.57422 16.9687C4.90984 16.9691 6.29937 16.9681 7.74281 16.9659C8.05406 16.9655 8.31609 17.1291 8.43609 17.4206C8.47359 17.5112 8.49047 17.665 8.48672 17.8819C8.48422 18.0353 8.4839 18.1922 8.48578 18.3525C8.4859 18.3585 8.48838 18.3642 8.49267 18.3684C8.49696 18.3726 8.50274 18.375 8.50875 18.375H9.85547C9.8789 18.375 9.89062 18.3633 9.89062 18.3398L9.89109 17.0034C9.89109 16.9942 9.8948 16.9854 9.90139 16.9789C9.90798 16.9724 9.91692 16.9687 9.92625 16.9687H14.0977C14.1008 16.9687 14.1037 16.97 14.1059 16.9722C14.1081 16.9744 14.1094 16.9774 14.1094 16.9805V18.3398C14.1094 18.3492 14.1131 18.3581 14.1197 18.3647C14.1263 18.3713 14.1352 18.375 14.1445 18.375H15.4898C15.5055 18.375 15.5136 18.3672 15.5142 18.3516C15.5189 18.1887 15.5184 18.0205 15.5128 17.8467C15.5072 17.6576 15.528 17.5075 15.5752 17.3962C15.7017 17.0981 15.9778 16.9645 16.2966 16.9655C17.5594 16.9698 18.9006 16.9703 20.3203 16.9669C20.6719 16.9659 20.9559 17.0812 21.0881 17.4136C21.1281 17.5145 21.1469 17.668 21.1444 17.8739C21.1359 18.628 21.1359 19.4006 21.1444 20.1919C21.1475 20.4769 21.1259 20.6686 21.0797 20.767C20.9494 21.0445 20.693 21.1917 20.3939 21.1903C18.9989 21.1837 17.6573 21.1841 16.3692 21.1912C16.1908 21.1922 16.0519 21.172 15.9525 21.1308C15.6033 20.9869 15.5011 20.6798 15.5133 20.3114C15.5186 20.1464 15.5183 19.9833 15.5123 19.822C15.512 19.8111 15.5073 19.8007 15.4994 19.7931C15.4914 19.7855 15.4808 19.7812 15.4697 19.7812H14.1211C14.1133 19.7812 14.1094 19.7851 14.1094 19.793V22.5698C14.1094 22.5751 14.1115 22.5803 14.1152 22.5841C14.119 22.5879 14.1241 22.5902 14.1295 22.5905C14.2889 22.597 14.4491 22.5973 14.61 22.5914C14.7884 22.5848 14.9312 22.5995 15.0384 22.6355C15.4205 22.762 15.6037 23.1764 15.4659 23.5542C15.3728 23.8092 15.1734 23.9578 14.8678 24Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <div className="button-info">
                    <div className="button-top">Máy tập</div>
                    <div className="button-bot">100</div>
                  </div>
                </div>
              </div>
              <div className="off-machine">
                <div className="button-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.1786 8.90858C13.6514 10.6809 13.8351 13.0819 12.6403 15.0553C12.63 15.0725 12.6148 15.0819 12.5948 15.0834C12.0014 15.129 11.4095 15.2169 10.8192 15.3469C10.8161 15.3476 10.8129 15.3476 10.8099 15.3469C10.8068 15.3462 10.8039 15.3448 10.8015 15.3428C10.799 15.3408 10.7971 15.3383 10.7958 15.3354C10.7945 15.3325 10.7938 15.3294 10.7939 15.3262C10.8064 14.9987 10.805 14.6928 10.7897 14.4084C10.7447 13.559 10.2056 12.713 9.28874 12.7078C8.7553 12.7047 8.20608 12.7036 7.64108 12.7045C6.6267 12.7059 6.08952 13.6312 6.0853 14.5444C6.08249 15.1169 6.08217 15.7012 6.08436 16.2975C6.08436 16.2999 6.08388 16.3022 6.08293 16.3044C6.08198 16.3066 6.08059 16.3086 6.07885 16.3103C6.0771 16.3119 6.07503 16.3132 6.07275 16.3141C6.07048 16.3149 6.06805 16.3154 6.06561 16.3153C5.93092 16.3128 5.78717 16.313 5.63436 16.3158C5.06061 16.3265 4.62374 16.1381 4.25202 15.6933C3.42014 14.698 3.00311 13.557 3.00092 12.2705C2.99858 11.0189 3.46733 9.80905 4.28249 8.86733C4.29061 8.85796 4.29405 8.84702 4.2928 8.83452C4.14624 7.44952 4.00186 6.13452 3.85967 4.88952C3.82061 4.54764 3.81452 4.30592 3.84139 4.16436C3.97077 3.48749 4.53842 2.99905 5.2378 2.99952C7.12561 3.00171 9.02155 3.00092 10.9256 2.99717C11.2506 2.99655 11.4861 3.01983 11.632 3.06702C12.2728 3.27374 12.6708 3.88967 12.6014 4.5703C12.4589 5.9653 12.3115 7.39046 12.1594 8.84577C12.1582 8.85702 12.1593 8.86838 12.1626 8.87918C12.1659 8.88997 12.1713 8.89997 12.1786 8.90858ZM5.68452 7.73296C7.3753 6.8128 9.37921 6.86717 11.0161 7.89889C11.0182 7.90016 11.0207 7.90087 11.0232 7.90095C11.0257 7.90103 11.0281 7.90049 11.0304 7.89937C11.0326 7.89826 11.0345 7.8966 11.036 7.89455C11.0374 7.8925 11.0383 7.89013 11.0386 7.88764L11.3958 4.43014C11.3985 4.40313 11.3956 4.37584 11.3872 4.35003C11.3787 4.32423 11.365 4.30048 11.3468 4.28034C11.3287 4.26019 11.3065 4.24409 11.2817 4.23308C11.257 4.22206 11.2302 4.21638 11.2031 4.21639H5.22608C5.19896 4.21643 5.17215 4.22217 5.1474 4.23326C5.12265 4.24434 5.10051 4.26052 5.08242 4.28072C5.06434 4.30093 5.05071 4.32472 5.04243 4.35055C5.03415 4.37637 5.0314 4.40365 5.03436 4.43061L5.40983 7.86514C5.41202 7.88389 5.42124 7.88874 5.43749 7.87967C5.52092 7.83374 5.60061 7.77889 5.68452 7.73296ZM4.43764 10.0397C4.32952 10.2428 4.24311 10.4492 4.17842 10.6589C4.05608 11.0545 4.59327 11.212 4.70952 10.8459C5.04936 9.77296 5.89733 8.95264 7.02374 8.77264C7.08999 8.76202 7.14842 8.74077 7.19905 8.70889C7.38983 8.58889 7.34249 8.28889 7.13014 8.22092C7.06202 8.19905 6.96655 8.20077 6.84374 8.22608C5.76467 8.44889 4.96264 9.05342 4.43764 10.0397Z"
                      fill="#D9D9D9"
                    />
                    <path
                      d="M10.2342 18.1355C10.2317 18.6067 10.2327 19.0856 10.237 19.5722C10.2408 20.0119 10.1681 20.4005 9.885 20.7183C9.785 20.8305 9.67187 20.9089 9.54562 20.9536C9.44125 20.9902 9.31187 21.0072 9.1575 21.0047C8.67875 20.9966 8.19624 20.9964 7.70999 21.0042C7.55468 21.0067 7.42515 20.9883 7.3214 20.9489C6.8339 20.7647 6.64265 20.1534 6.64359 19.6828C6.6464 17.9191 6.64656 16.2217 6.64406 14.5908C6.64312 13.9758 6.94031 13.2708 7.63312 13.2689C8.19374 13.2673 8.73484 13.2669 9.2564 13.2675C9.75515 13.2675 10.0762 13.6795 10.1845 14.1333C10.2211 14.2873 10.2384 14.4697 10.2366 14.6803C10.2319 15.1709 10.2316 15.6342 10.2356 16.0702C10.2357 16.0718 10.236 16.0734 10.2368 16.0749C10.2375 16.0764 10.2385 16.0777 10.2398 16.0787C10.2411 16.0796 10.2425 16.0803 10.2441 16.0806C10.2456 16.081 10.2472 16.0809 10.2487 16.0805C10.9678 15.8683 11.6837 15.7294 12.3966 15.6638C14.1084 15.5063 15.8048 15.6042 17.3817 16.0772C17.4011 16.0831 17.4109 16.0758 17.4112 16.0552C17.4137 15.6223 17.4128 15.1753 17.4084 14.7141C17.4059 14.4666 17.4281 14.2552 17.475 14.0798C17.5833 13.6739 17.8945 13.2778 18.3511 13.2741C18.9045 13.27 19.4441 13.2669 19.9697 13.2647C20.3012 13.2631 20.5555 13.3923 20.7323 13.6523C20.9114 13.9152 21.0008 14.2084 21.0005 14.5322C20.9983 16.2072 20.9991 17.8747 21.0028 19.5347C21.0037 20.025 20.9409 20.3972 20.6283 20.7431C20.4711 20.9169 20.2637 21.0028 20.0062 21.0009C19.4962 20.9978 18.9745 20.9986 18.4411 21.0033C18.302 21.0045 18.182 20.9855 18.0811 20.9461C17.7605 20.8214 17.5523 20.4825 17.4642 20.1567C17.4311 20.0348 17.4141 19.8373 17.4131 19.5642C17.4119 19.1189 17.4111 18.6491 17.4108 18.1547C17.4108 18.1356 17.4016 18.1288 17.3831 18.1341C17.0119 18.24 16.752 18.3084 16.6036 18.3394C15.3675 18.5967 14.0803 18.6609 12.7889 18.5794C11.9342 18.5256 11.0853 18.3756 10.2422 18.1294C10.2412 18.1291 10.2402 18.129 10.2393 18.1292C10.2383 18.1293 10.2374 18.1297 10.2366 18.1303C10.2358 18.1309 10.2352 18.1317 10.2348 18.1326C10.2344 18.1335 10.2342 18.1345 10.2342 18.1355Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                  <div className="button-info">
                    <div className="button-top">Dụng cụ</div>
                    <div className="button-bot">50</div>
                  </div>
                </div>
              </div>
            </div>
            {/* end machine gym */}
            {/* machine list */}
            <div className="machine-list">
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
              <div className="single-machine">
                <div>
                  <div className="image">
                    <img src={require("./images/machine.png")} alt="" />
                  </div>
                  <div className="name">Máy chạy bộ Máy chạy bộ</div>
                </div>
              </div>
            </div>
            {/* end machine list */}
          </div>
          <div className="cancel">
            <div className="button-2">Trở lại</div>
            <div className="button-2">Chọn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDetail;
