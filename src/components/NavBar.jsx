import { Link } from 'react-router-dom';
import burgerMenu from '../assets/images/icon-menu.svg'

export const NavBar = () => {
    return (
        <>
            <ul className="hidden sm:flex  font-bold sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                    <Link to="/" className='font-bold'>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="https://customizer-three-js-bfxb.vercel.app/"><button button className='btn btn-secondary font-bold bg-SuperPink hover:bg-YellowSun hover:text-VeryBlack'>Design Now</button></Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul >
                <li>
                    <Link to="/login"><button className='btn btn-xs font-bold md:btn-md bg-SkyBlue hover:bg-YellowSun'>Log in</button></Link>
                </li>
            </ul>
            <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburgesa" />
        </>
    )
}

