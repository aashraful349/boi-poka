import { Star } from 'lucide-react';
import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data=use(bookPromise);
    // console.log(singleBook);
    const { bookName, author, bookId, image, category, rating, tags } = singleBook;
    const [tag1, tag2] = tags;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-86 shadow-sm border-2 border-gray-200 ">
                <figure className="p-3 bg-gray-100 w-[300px] mx-auto mt-6">
                    <img className='h-[166px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-actions  text-green-400 ml-5 mt-5">
                    <div className="badge badge-outline bg-[#23be0a0d]">{tag1}</div>
                    <div className="badge badge-outline bg-[#23be0a0d]">{tag2}</div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}

                    </h2>
                    <p>{`Author: ${author}`}</p>
                    <div className="border-b-1 border-dashed border-gray-300"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<Star className='max-w-[15px]' /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;