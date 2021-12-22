
import { Link } from "react-router-dom";
import Logo from '../assets/Без названия.png'

const Header = () => {
    return (
        <header>
            <div className='headers'>
                <div>
                <Link to='/' className='link-item'><img src={Logo} alt='logo' className='logo'/></Link>
                </div>
                <div>
                    <Link to='/catalog' className='link-item'> Catolog page </Link>
                    <Link to='/search' className='link-item'> Search page</Link>
                </div>
                   
            </div>
         
        </header>

    )
}
export default Header;