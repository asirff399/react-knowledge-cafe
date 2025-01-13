import PropTypes from 'prop-types';

const Bookmarkes = ({bookmarkes,readingtime}) => {
    console.log(bookmarkes)
    return (
        <div className="w-1/3">
            <div className='p-3 m-1 border-2 border-blue-400 rounded-lg bg-blue-100'>
                <h2 className='font-bold text-xl text-center text-blue-700'>Spent Time On Read: {readingtime} min</h2>
            </div>
            <div className='p-3 m-1 border bg-slate-100 min-h-screen border-slate-300 rounded-lg mt-2'>
                <h1 className='w-full font-bold text-lg my-3'>Bookamrked Blog: {bookmarkes.length}</h1>
                <div>
                    {
                        bookmarkes.map(bookmark => <div className='p-3 hover:border hover:border-slate-300 m-3 bg-white rounded-xl' key={bookmark.id}>
                                <h1 className=''>{bookmark.title}</h1>
                                <small className=''>{bookmark.author}</small>    
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarkes.propTypes ={
    bookmarkes: PropTypes.array.isRequired,
    readingtime: PropTypes.number.isRequired,
}
export default Bookmarkes;