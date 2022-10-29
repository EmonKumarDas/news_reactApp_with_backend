import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsNews from '../newsCard/DetailsNews';

const CategorisNewsById = () => {
    const CatNews = useLoaderData();
    return (
        <div>
            {
                CatNews.map(news=> <DetailsNews  
                    key={CatNews._id}
                    news = {news}></DetailsNews>)
            }
        </div>
    );
};

export default CategorisNewsById;