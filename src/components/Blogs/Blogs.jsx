import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarkes}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            {/* <h1>Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => 
                    <Blog 
                        key={blog.id} 
                        blog={blog} 
                        handleAddToBookmarkes={handleAddToBookmarkes}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarkes: PropTypes.func.isRequired
}

export default Blogs;