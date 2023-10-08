import { useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Blogs = () => {
    const blogs = useLoaderData()  
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
            {
                blogs.map(blog => <BlogsCard
                    key={blog.id}
                    blog={blog}
                ></BlogsCard>)
            }
            </div>
            <div className="pb-16">
            <NewsLetter></NewsLetter>
           </div>
       </div>
    );
};

export default Blogs;
