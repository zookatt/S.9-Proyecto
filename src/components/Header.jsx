import { NavBar } from './NavBar'
import torinologo from '../assets/images/torinologo.webp'

export const Header = () => {
    return (
        <header className="flex place-content-between  items-center mb-8">
            <img src={torinologo} alt="Logo" style={{ width: '100px', height: '100px' }} />
            <NavBar />
        </header>
    )
}


