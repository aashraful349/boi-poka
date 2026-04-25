import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('pages');
    const data = useLoaderData();
    // console.log(data)
    useEffect(() => {
        const storedBookData = getStoredBook();
        // console.log(storedBookData);
        const ConvertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
        // console.log(myReadList);

    }, [])

    const handleSort = (type) => {
        setSort(type);
        if (type === 'pages') {
            const sortedByPage=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
            setReadList(sortedByPage);
            console.log(sortedByPage);
        }
        if (type === 'rating') {
            const sortedByRating=[...readList].sort((a,b)=>a.rating-b.rating)
            setReadList(sortedByRating);
            console.log(sortedByRating);
        }
    }


    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By :{sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Book List: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;