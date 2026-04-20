import React from 'react';
import bookImage from '../../assets/books.jpg';


const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 bg-[#1313130d] text-black rounded-3xl mt-10 mb-10 gap-2'>
            <div>
                <h1 className='font-bold text-5xl mb-5'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white'>View The List</button>
            </div>
            <div className='max-w-79.5 max-h-98.5'>
                <img className='rounded-xl' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;