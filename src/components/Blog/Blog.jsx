import PropTypes from 'prop-types';
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blog = ({blog,handleAddToBookmarkes,handleMarkedAsRead}) => {
    const {title,cover_img,author,author_img,created_at,reading_time,hashtags} = blog;
    return (
        <div className="p-2 border-b mb-5">
            <img className='rounded-md' src={cover_img} alt={`Cover picture for title ${title}`} />
            <div className='flex justify-between mx-3 my-5'>
                <div className='flex items-center gap-3'>
                    <div>
                        <img className='w-[50px] h-[50px] rounded-full border-2 border-orange-500 shadow-md' src={author_img} alt={`Image of author ${author}`} />
                    </div>
                    <div>
                        <p className='font-bold'>{author}</p>
                        <small>{created_at}</small>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='my-auto'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmarkes(blog)} className='text-2xl'><MdOutlineBookmarkAdd /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold my-5">{title}</h2>
            <p className='my-5'>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a className='text-slate-500' href="">{hash} </a></span>)
                }
            </p>
            <button onClick={() => handleMarkedAsRead(reading_time)} className='mb-3 font-semibold text-blue-800 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.array.isRequired,
    handleAddToBookmarkes: PropTypes.func.isRequired,
    handleMarkedAsRead: PropTypes.func.isRequired,
}

export default Blog;