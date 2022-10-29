import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const CategorisNews = () => {
    const CatNews = useLoaderData();
    return (
        <div>
            {
                CatNews.map(news=> <NewsCard   
                    key={CatNews._id}
                    news = {news}></NewsCard>)
            }
        </div>
    );
};

export default CategorisNews;