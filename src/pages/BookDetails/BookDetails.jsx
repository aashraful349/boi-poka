import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addTOStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const handleMarkAsRead=(id)=>{
    addTOStoredDB(id);
  }

  const bookId = parseInt(id);
  const singleBook = data.find(book => book.bookId === bookId);
  console.log(singleBook);
  return (
    <div className="flex-col lg:flex-row card card-side bg-base-100 shadow-sm">
      <figure className='border-2 border-gray-200 bg-gray-100 p-15 rounded-2xl'>
        <img className="min-w-[250px] max-w-[425px] max-h-[564px]"
          src={singleBook.image}
          alt={singleBook.bookName} />
      </figure>

      <div className="card-body lg:max-w-1/2">
        <h2 className='font-bold text-5xl'>{singleBook.bookName}</h2>
        <h2 >By: {singleBook.author}</h2>
        <div className="border-y border-gray-300 py-0.5">
          <span>{singleBook.category}</span>
        </div>
        <p className='text-justify'>
          <span className='font-bold'>Review: </span>
          {singleBook.review}
        </p>
        <div className="flex gap-3 py-1 mb-2.5">
          <span className='font-bold'>Tag</span>
          {singleBook.tags.map((tag, index) => <div className='' key={index}> {tag}</div>)}
        </div>
        <div className="grid grid-cols-[170px_1fr] gap-y-1">
          <span>Number of Pages:</span>
          <span className='font-bold'>{singleBook.totalPages}</span>

          <span>Publisher:</span>
          <span className='font-bold'>{singleBook.publisher}</span>

          <span>Year of Publishing:</span>
          <span className='font-bold'>{singleBook.yearOfPublishing}</span>

          <span>Rating:</span>
          <span className='font-bold'>{singleBook.rating}</span>
        </div>
        <div className='flex gap-3'>
          <button onClick={()=>handleMarkAsRead(id)} className="btn shadow-lg">Mark as Read</button>
          <button className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;