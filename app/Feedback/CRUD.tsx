"use client";
import { useEffect, useState } from "react";
import CRUDStyles from "../Components/CSS_Modules/CRUD.module.css";
import { Footer } from "../Components/Footer";

function genRandKey() {
  const num = Math.floor(Math.random() * 10000);
  return num;
}

export const CRUD = () => {
  const [comment, setComment] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const [change, setChange] = useState(false);

  const setValue = (event) => {
    setComment(event.target.value);
  };

  async function postComments() {
    const res = await fetch("/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: genRandKey(),
        comment: comment,
      }),
    })
      .then((response) => {
        response.json()
      })
  }

  async function getComments() {
    const res = await fetch("/api/read", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCommentsData(data));
  }

  const deleteComment = async (event) => {
    setChange(true);
    await fetch(
      `https://crudcrud.com/api/c94f097df94d4d998ec2b8fe261a804a/comments/${event.target.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    setChange(false);
  };

  const editComment = async (event) => {
    setChange(true);
    if (comment) {
      await fetch(
        `https://crudcrud.com/api/c94f097df94d4d998ec2b8fe261a804a/comments/${event.target.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            id: genRandKey(),
            comment: comment,
          }),
        }
      );
    } else {
      alert(
        "Please add your change to the feedback box before clicking the edit button"
      );
    }
    setChange(false);
    setComment("");
  };

  useEffect(() => {
    getComments();
  }, [change]);

  return (
    <>
      {commentsData.length < 0 ? (
        <p>Nothing to show here</p>
      ) : (
        <section className={CRUDStyles.commentsContainer}>
          <h2 className={CRUDStyles.name}>
            Previous <span className={CRUDStyles.name2}>Feedback</span>
          </h2>
          <ul className={CRUDStyles.ul}>
            {commentsData.map((comment) => (
              <div key={genRandKey()} className={CRUDStyles.div}>
                <li className={CRUDStyles.comment} key={genRandKey()}>
                  {comment.comment}
                </li>
                <button
                  className={CRUDStyles.button}
                  key={genRandKey()}
                  id={comment._id}
                  onClick={editComment}
                >
                  Edit
                </button>
                <button
                  className={CRUDStyles.button}
                  key={genRandKey()}
                  id={comment._id}
                  onClick={deleteComment}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </section>
      )}
      <form onSubmit={postComments} className={CRUDStyles.form}>
        <label htmlFor="comment">Feedback:</label>
        <input
          id="comment"
          name="comments"
          type="text"
          onChange={setValue}
          value={comment}
          autoComplete="off"
          placeholder="Comment here"
        />
        <input
          type="submit"
          className={CRUDStyles.submit}
          value="Submit feedback"
        />
      </form>
      <Footer />
    </>
  );
};
