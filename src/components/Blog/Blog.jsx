import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-lg w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-6 mt-8 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold text-{111111} '>{author} </h3>
                        <p className='text-base font-semibold text-gray-500'>{posted_date} </p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span className='text-xl font-medium text-gray-500'>{reading_time} min read</span>
                    <button className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title} </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href=""> #{hash} </a> </span> )
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;