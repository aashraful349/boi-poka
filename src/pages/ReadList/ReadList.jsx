import React from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReadList = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;