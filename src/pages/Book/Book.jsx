import React, { use } from 'react';

const Book = ({ singleBook }) => {
    // const data=use(bookPromise);
    console.log(singleBook);
    return (
        <div>
            <h1>Single Book</h1>
        </div>
    );
};

export default Book;