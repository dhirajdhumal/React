import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/login'>Login</Link>
            <Link to='register'>Register</Link>
        </nav>
    )
}

export default Navbar;