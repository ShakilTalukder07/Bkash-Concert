import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // let Links = [
    //     { name: "HOME", link: "/" },
    //     { name: "ABOUT", link: "/about" },
    //     { name: "SERVICES", link: "/services" },
    //     { name: "PORTFOLIO", link: "/portfolio" },
    //     { name: "CONTACT", link: "/contact" },
    // ];

    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-yellow-400 mr-1 pt-2'>
                    <ion-icon name="invert-mode-outline"></ion-icon>
                    </span>
                    Shakil 
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

                    <Link to="/"> <li className='md:ml-8 text-xl md:my-0 my-7'>HOME</li> </Link>
                    <Link to="/signUp"> <li className='md:ml-8 text-xl md:my-0 my-7'>SignUp</li> </Link>
                    <Link to="/SignIn"> <li className='md:ml-8 text-xl md:my-0 my-7'>SignIn</li> </Link>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;