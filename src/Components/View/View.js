import React, { useEffect, useState, useContext } from "react";

import "./View.css";
import { PostContext } from "../../Store/PostContext";
import { FirebaseContext } from "../../Store/Context";
function View() {
  const [userDeatils, setUserDeatils] = useState();
  const { postDeatils } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const { userId } = postDeatils;
    console.log(postDeatils);
    if (userId) {
      firebase
        .firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((response) => {
          response.forEach((doc) => {
            console.log(doc.data);
            setUserDeatils(doc.data());
          });
        });
    }
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDeatils.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDeatils.price} </p>
          <span>{postDeatils.name}</span>
          <p>{postDeatils.category}</p>
          <span>{postDeatils.CreatedAt}</span>
        </div>
        {userDeatils && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDeatils.username}</p>
            <p>{userDeatils.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
