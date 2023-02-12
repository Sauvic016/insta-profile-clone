import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

import { TailSpin } from "react-loader-spinner";
import Modal from "../../components/Modal/Modal";

import "./Posts.scss";

const PostImg = ({ src, alt, loading, desc, lSrc, className, galleryImg }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {loading && (
        <div className="loadSpinner">
          <TailSpin type="TailSpin" color="#00BFFF" height={100} width={100} timeout={3000} visible={loading} />
        </div>
      )}
      {modalOpen && <Modal setOpenModal={setModalOpen} lsrc={lSrc} desc={desc} isrc={src} />}
      <div
        className={className}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img src={src} alt={alt} className={galleryImg} />
        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              {/* <i className="fas fa-heart" aria-hidden="true"></i> 56 */}
              <FavoriteIcon /> 56
            </li>
            <li className="gallery-item-likes">
              {/* <i className="fas fa-comment" aria-hidden="true"></i> 2 */}
              <ChatBubbleRoundedIcon /> 2
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostImg;
