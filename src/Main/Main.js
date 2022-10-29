import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LeftSection from '../components/LeftSidePart/LeftSection';
import RightSection from '../components/RightSidePart/RightSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-12 gap-2 w-[95%] m-auto my-5'>
                <div class="lg:col-span-2 flex justify-center">
                <LeftSection></LeftSection>
                </div>

                <div class="lg:col-span-7 flex justify-center">
                    <Outlet></Outlet>
                </div>

                <div class="lg:col-span-3 flex justify-center">
                    <RightSection></RightSection>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;