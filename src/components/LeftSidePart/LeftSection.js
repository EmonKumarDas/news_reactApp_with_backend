import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSection = () => {
    const [categori, setCategori] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/news-categories").then(res => res.json()).then(data => setCategori(data))
    }, [])
    return (
        <div className=''>
            <p className='font-bold text-lg lg:block hidden md:hidden'>News Categories</p>
            {
                categori.map(categories => <p className='text-blue-800 underline font-bold'
                key={categories.id}>
                    <Link to={`/category/${categories.id}`}>{
                        categories.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSection;