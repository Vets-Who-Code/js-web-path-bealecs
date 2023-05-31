"use client"
import { useEffect, useState } from 'react';
import CRUDStyles  from '../Components/CSS_Modules/CRUD.module.css';
import { Navigation } from '../Components/Navigation';
import { Footer } from '../Components/Footer';

export const CRUD = () => {

    const [comment, setComment] = useState("")
    const [commentsData, setCommentsData] = useState([]);
    const randNum = Math.floor(Math.random() * 100);

    const setValue = (event) => {
        setComment(event.target.value);
    }

    //Export functions and move outside of scope of Component
    
    async function postComments() {
        const res = await fetch("https://crudcrud.com/api/a0cdddfcc2d54fbba9e064ea14ae19cd/comments", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                comment: comment
            })
          });

          if (!res.ok) {
            throw new Error('Failed to post data');
          }

          return res.json();
        }

        function getComments() {
            fetch("https://crudcrud.com/api/a0cdddfcc2d54fbba9e064ea14ae19cd/comments", { cache: 'no-store'})
            .then((response) => response.json())
            .then((data) => setCommentsData(data));
            
        }

        const deleteComment = async (event) =>  {
            await fetch(`https://crudcrud.com/api/a0cdddfcc2d54fbba9e064ea14ae19cd/comments/${event.target.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
              })
              .then((response) => response.json())
              .then((data) => console.log(data));
        }


        const editComment = async (event) => {
            if(comment) {
                await fetch(`https://crudcrud.com/api/a0cdddfcc2d54fbba9e064ea14ae19cd/comments/${event.target.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                body: JSON.stringify({
                    comment: comment
                })
              })
            } else {
                alert("Please add your change to the feedback box before clicking the edit button");
            }
        }

        useEffect(() => {
            getComments();
        }, []);

    return (
        <>
            <Navigation />
            {commentsData.length < 0 ? <p>Nothing to show here</p> :  
                <section className={CRUDStyles.commentsContainer}>
                    <h2 className={CRUDStyles.name}>Previous <span className={CRUDStyles.name2}>Feedback</span></h2>
                    <ul>
                        {commentsData.map(comment => (
                            <div className={CRUDStyles.div}>
                                <li className={CRUDStyles.comment} key={comment._id}>{comment.comment}</li>
                                <button className={CRUDStyles.button} key={comment._id * randNum} id={comment._id} onClick={editComment} >Edit</button>
                                <button className={CRUDStyles.button} key={comment._id * randNum} id={comment._id} onClick={deleteComment}>Delete</button>
                            </div>
                        ))}
                    </ul>
                </section>
            }
            <form onSubmit={postComments} className={CRUDStyles.form}>
                <label htmlFor="comment">Feedback:</label>
                <input id="comment" name='comments' type="text" onChange={setValue} value={comment} autoComplete="off" placeholder="Comment here" />
                <input type="submit" className={CRUDStyles.submit} value="Submit feedback"/>
            </form> 
            <Footer />
        </>
    )
}