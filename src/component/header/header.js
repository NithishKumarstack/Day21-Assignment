import CartIcon from '../../component/assets/968267.png';
import './header.css';
import {Link} from 'react-router-dom';
const Head = (props) => {
    return(
       <nav className='header'>
        <h2>SHOPPING</h2>
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <div className='Cart'>Cart<img className='image' src={CartIcon}/><span className='count'>{props.cartCount}</span></div>
       </nav>
    );
};

export default Head;