import PropTypes from 'prop-types';

const Bookmarkes = ({bookmarkes}) => {
    console.log(bookmarkes)
    return (
        <div className="w-1/3">
            <div className='p-3 m-1 border-2 border-blue-400 rounded-lg bg-blue-100'>
                <h2 className='font-bold text-xl text-blue-700'>Spent Time On Read: </h2>
            </div>
            <div className='p-3 m-1 border border-slate-300 rounded-lg mt-2'>
                <h1 className='font-bold text-md'>Bookamrked Blog: {bookmarkes.length}</h1>
                <div>
                    {
                        bookmarkes.map(bookmark => <div className='p-3 hover:border hover:border-slate-300 hover:bg-slate-200' key={bookmark.id}>
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
}
export default Bookmarkes;