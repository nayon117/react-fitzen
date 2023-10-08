import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogDetailsCard = ({ blogs }) => {
    const {image,title,content} = blogs || {}
    return (
        <div className='py-16'>
            <div className='space-y-4'>
            <img className='rounded' src={image} alt="" />
            <h2 className='text-xl font-bold'>{title}</h2>
                <p className='font-medium'>{content}</p>
                <Link to='/blogs'>
                    <button className='btn  btn-neutral my-4'>Back to blog</button>
                </Link>
            </div>
        </div>
    );
};

BlogDetailsCard.propTypes = {
    blogs:PropTypes.object
};

export default BlogDetailsCard;