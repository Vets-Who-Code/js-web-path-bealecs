"use client"
import { useEffect, useState } from 'react';
import CRUDStyles  from '../Components/CSS_Modules/CRUD.module.css';

export const CRUD = () => {

    const [comment, setComment] = useState("")
    const [commentsData, setCommentsData] = useState([]);

    const setValue = (event) => {
        setComment(event.target.value);
    }
    async function postComments() {
        const res = await fetch("https://crudcrud.com/api/46cdaaac464243d187e768b28a9429f3/comments", {
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

        useEffect(() => {
            fetch("https://crudcrud.com/api/46cdaaac464243d187e768b28a9429f3/comments", { cache: 'no-store'})
            .then((response) => response.json())
            .then((data) => setCommentsData(data));
        }, []);

    return (
        <>
            <form onSubmit={postComments}>
                <label htmlFor="comment">Comment:</label>
                <input id="comment" name='comments' type="text" onChange={setValue} value={comment} placeholder="Comment here" />
                <input type="submit" value="Submit feedback"/>
            </form> 
            {commentsData.length < 0 ? <p>Nothing to show here</p> :  
                <section className={CRUDStyles.comments}>
                    <h2>Previous Feedback</h2>
                    <ul>
                        {commentsData.map(comment => (
                         <li key={comment._id}>{comment.comment}</li>
                        ))}
                    </ul>
                </section>
            }
        </>
    )
}