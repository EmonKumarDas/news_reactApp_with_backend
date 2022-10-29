import React, { useContext} from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/AuthProvider';
import Carousel from '../slider/Carousel';

const RightSection = () => {
    const {GoogleSignIn} = useContext(userContext);
    const navigate = useNavigate();
    const SingInWithGoogle=()=>{
        GoogleSignIn().then((result)=>{
            navigate('/home')
        });
        
    }
    return (
        <div>
            {/* <p>{cureentUser}</p> */}
            <button type="button" className="px-5 py-2 mb-2 w-4/5 flex font-semibold border rounded dark:border-black dark:text-black"><FaFacebook className='mt-1 mx-2'></FaFacebook> Facebook</button>
            <button onClick={SingInWithGoogle} type="button" className="px-5 py-2 w-4/5 flex font-semibold border rounded dark:border-black dark:text-black"><FaGoogle className='mt-1 mx-2'></FaGoogle> Google</button>

            <div>
                <div className="flex items-center justify-between mt-3 w-5/5 p-6 h-5 border-l-8 sm:py-8 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-100">
                    <span className='flex'><FaFacebook className='mt-1 mx-2'></FaFacebook> Facebook</span>
                </div>
                <div className="flex items-center justify-between mt-3 w-5/5 p-6 h-5 border-l-8 sm:py-8 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-100">
                    <span className='flex'><FaGoogle className='mt-1 mx-2'></FaGoogle> Google</span>
                </div>
                <div className="flex items-center justify-between mt-3 w-5/5 p-6 h-5 border-l-8 sm:py-8 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-100">
                    <span className='flex'><FaWhatsapp className='mt-1 mx-2'></FaWhatsapp> Whatsapp</span>
                </div>
                <div className="flex items-center justify-between mt-3 w-5/5 p-6 h-5 border-l-8 sm:py-8 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-100">
                    <span className='flex'><FaTwitter className='mt-1 mx-2'></FaTwitter> Twitter</span>
                </div>
                <div className="flex items-center justify-between mt-3 w-5/5 p-6 h-5 border-l-8 sm:py-8 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-100">
                    <span className='flex'><FaGithub className='mt-1 mx-2'></FaGithub> Github</span>
                </div>
            </div>
            <div className='w-5/5'>
                <Carousel></Carousel>
            </div>
        </div>

    );
};

export default RightSection;