import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Home = () => {
    const allnews = useLoaderData();
    console.log(allnews);
    return (
        <div>
            {
                allnews.map(news=>
                <NewsCard
                key={allnews._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;