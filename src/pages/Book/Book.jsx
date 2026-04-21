import React, { use } from 'react';

const Book = ({ singleBook }) => {
    // const data=use(bookPromise);
    // console.log(singleBook);
    const { bookName, author, image, category, rating, tags } = singleBook;
    const [tag1, tag2] = tags;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="p-3">
                <img
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-actions bg-[#23be0a0d] text-green-400 ml-5 mt-5">
                <div className="badge badge-outline">{tag1}</div>
                <div className="badge badge-outline">{tag2}</div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}

                </h2>
                <p>{`Author: ${author}`}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;