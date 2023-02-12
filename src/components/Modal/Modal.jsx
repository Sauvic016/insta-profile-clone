import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExploreIcon from "@mui/icons-material/Explore";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./Modal.scss";
import ModalIconWrapper from "./ModalIconWrapper";
import ModalWrapper from "./ModalWrapper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Modal = ({ setOpenModal, lsrc, desc, isrc }) => {
  const detailOfImage = { isrc: isrc, lsrc: lsrc, desc: desc };
  let saved = [];
  const details = JSON.parse(localStorage.getItem("filetoJson"));
  if (details) {
    saved = [...details, detailOfImage];
  } else {
    saved.push(detailOfImage);
  }
  const newJsonDetailImg = JSON.stringify(saved);

  const onSaveClick = () => {
    // const filetoJson = JSON.stringify(file);
    localStorage.setItem("filetoJson", newJsonDetailImg);
  };

  return (
    <ModalWrapper>
      {/* <div className="infoandimg"> */}
      <img src={lsrc} alt="" className="modalImage" />
      <div className="description">
        <span className="closedButton" onClick={() => setOpenModal(false)}>
          X
        </span>
        <p>{desc}</p>

        <hr />
        <ModalIconWrapper>
          <TelegramIcon className="icon" />
          <ExploreIcon className="icon" />
          <FormControlLabel
            className="icon"
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          />

          <FormControlLabel
            className="icon "
            control={
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                color={"default"}
                onClick={() => onSaveClick()}
              />
            }
          />
        </ModalIconWrapper>
      </div>
      {/* </div> */}
    </ModalWrapper>
  );
};

export default Modal;
