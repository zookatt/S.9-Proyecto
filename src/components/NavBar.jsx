import burgerMenu from '../assets/images/icon-menu.svg'
export const NavBar = () => {
    return (
        <>
            <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#"><button button className='btn btn-secondary bg-SuperPink hover:bg-YellowSun hover:text-VeryBlack'>Design Now</button></a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <ul >
                <li>
                    <button className='btn btn-xs sm:btn-sm  bg-SkyBlue hover:bg-YellowSun'>LOG IN</button>
                </li>
            </ul>
            <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburgesa" />
        </>
    )
}

