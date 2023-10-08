import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = () => {
    const [blogs,setBlogs] = useState({})
    const { id } = useParams()
    const blogsData = useLoaderData()

    useEffect(() => {
        const findBlog = blogsData?.find(blogId => blogId.id === id)
        setBlogs(findBlog)
    }, [blogsData, id])
    console.log(blogs);

    return (
        <div>
           <BlogDetailsCard blogs={blogs}></BlogDetailsCard>
        </div>
    );
};

export default BlogDetails;