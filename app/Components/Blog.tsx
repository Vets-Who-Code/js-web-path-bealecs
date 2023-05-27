"use client"
import { useEffect, useState } from 'react';
import BlogStyles from './CSS_Modules/Blog.module.css';

export const Blog = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);
    
    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dev.to/api/articles?username=bealecs");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        
    }
    useEffect(() => {
        fetchBlogs();
    }, []);
    
    return (
        <>
            <h2 className={BlogStyles.header}><span className={BlogStyles.name2}>Clif's</span> latest blog posts</h2>
            <section className={BlogStyles.blogContainer}>
                    <ul className={BlogStyles.unorderedList}>
                    {loading ? <p className={BlogStyles.loading}>Loading...</p> : posts.map((item) => (
                        <li className={BlogStyles.listItem} key={item.id}>
                            <h3 className={BlogStyles.title}>{item.title}</h3>
                            <img className={BlogStyles.coverImage} src={item.cover_image} alt={item.title}></img>
                            <p className={BlogStyles.reading}>Reading Time: {item.reading_time_minutes} minutes</p>
                            <a className={BlogStyles.anchor} href={item.canonical_url} target='_blank'>Visit article</a>
                        </li>
                    ))}
                    </ul>
            </section>
        </>
    )
}