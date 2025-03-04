import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-4/6 flex justify-between items-center p-4 mx-auto border-b-2 mb-3'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;