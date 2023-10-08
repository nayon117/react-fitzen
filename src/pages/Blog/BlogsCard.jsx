import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogsCard = ({ blog }) => {
  const {id, date, title, image,author} = blog || {}
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500" className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={image} alt="image" /></figure>
        <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between'>
                <p>{author }</p>
                <p>{date }</p>
                </div>
                <Link to={`/blog/${id}`}>
                <button className="btn btn-neutral btn-sm">Read More<AiOutlineArrowRight/></button>
                </Link>
        </div>
      </div>
    );
};

BlogsCard.propTypes = {
    blog:PropTypes.object
};

export default BlogsCard;