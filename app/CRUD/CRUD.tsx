"use client"
import { useState } from 'react';
import CRUDStyles  from '../Components/CSS_Modules/CRUD.module.css';

export const CRUD = () => {

    const [comment, setComment] = useState("")

    const setValue = (event) => {
        setComment(event.target.value);
    }
    async function postComments() {
        const res = await fetch("https://crudcrud.com/api/42c28f92281a48efaf2d65f18fd8bd46/comment", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment
            })
          });
        }
    // async function getComments() {
    //     const res = await fetch("https://crudcrud.com/api/42c28f92281a48efaf2d65f18fd8bd46/comment", {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //     });

    //     if(!res.ok) {
    //         throw new Error('Failed to fetch data');
    //     }
        
    //     return res.json();
    // }
    
    // const comments = getComments();

    return (
        <>
            <form onSubmit={postComments}>
                <label htmlFor="comment">Comment:</label>
                <input id="comment" name='comment' type="text" onChange={setValue} value={comment} minLength={10} maxLength={500} placeholder="Comment here" />
                <input type="submit" value="Submit feedback"/>
            </form> 
            {/* {comments &&
                <section className={CRUDStyles.commentSection}>
                    <ul>
                        <li>{comments}</li>
                    </ul>
                </section>
            } */}
        </>
    )
}