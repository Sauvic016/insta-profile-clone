import React, { useState, useEffect } from "react";
import { PostIcon, SavedIcon } from "../Icons/Icon";
import PostFeed from "./PostFeed";
import Tab from "./Tabs";
import "./Posts.scss";
import SavedFeed from "./SavedFeed";

import { api } from "./utils/ServiceUtilx";
import { TailSpin } from "react-loader-spinner";

const Posts = () => {
  const tabList = [
    {
      __id: 1,
      tab: "POSTS",
      onClick: () => setTab("POSTS"),
      icon: <PostIcon />,
      label: "Post",
    },
    {
      __id: 2,
      tab: "SAVED",
      onClick: () => setTab("SAVED"),
      icon: <SavedIcon />,
      label: "Saved",
    },
  ];
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState("POSTS");
  const [loading, setLoading] = useState(true);
  // const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // setHasError(false);
      try {
        // console.log(data);
        const data = await api(page);
        // const data = await api();
        setPhotos((oldPhotos) => {
          return [...oldPhotos, ...data];
        });
        // setPhotos(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        console.log("error:", error);
        // setHasError(true);
      }
    };
    fetchPosts();
    // }, []);
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2 //gives the entire height of the document
      ) {
        //window.innerHeight gives the height of the  visible part of the document
        //window.scrollY gives the current scroll position from the top in pixels
        setPage((oldPage) => {
          if (oldPage + 2 > 4) {
            //this condition is necessary so that there is no infinite call to the api ...
            return 0;
          }
          return oldPage + 1;
        });
      } else {
        <TailSpin />;
      }
    });

    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      <hr />

      <div className="profile-tab">
        {tabList.map((el) => {
          return <Tab key={el.__id} active={el.tab === tab} onClick={el.onClick} icon={el.icon} label={el.label} />;
        })}
      </div>
      <br />
      {/* {hasError && <p>Something went wrong.</p>} */}
      {tab === "POSTS" ? <PostFeed page={photos} loading={loading} /> : <SavedFeed />}
    </>
  );
};
export default Posts;
