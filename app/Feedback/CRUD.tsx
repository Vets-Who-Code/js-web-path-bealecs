"use client";
import { useEffect, useState } from "react";
import CRUDStyles from "../Components/CSS_Modules/CRUD.module.css";
import { Footer } from "../Components/Footer";

function genRandKey() {
  const num = Math.floor(Math.random() * 100000);
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
    await fetch("/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: genRandKey(),
        comment: comment,
      }),
    }).then((response) => {
      response.json();
    });
  }

  async function getComments() {
    await fetch("/api/read", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCommentsData(data));
  }

  const deleteComment = async (event) => {
    const idToDelete = event.target.id;
    setChange(true); //resets the useEffect dependency
    const res = await fetch(`/api/delete?=${idToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Comment-ID": idToDelete,
      },
    });
    setChange(false);
    return await res.json();
  };

  const editComment = async (event) => {
    setChange(true); //resets the useEffect dependency
    if (comment) {
      await fetch(`/api/write`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: event.target.id,
          comment: comment,
        }),
      });
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
                  id={comment.id}
                  onClick={editComment}
                >
                  Edit
                </button>
                <button
                  className={CRUDStyles.button}
                  key={genRandKey()}
                  id={comment.id}
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
