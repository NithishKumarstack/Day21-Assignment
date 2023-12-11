import './product.css';
import Cart from '../cart/cart';
const Product = (props) => {
    const lists = props;
    console.log("list:",lists);
    return(
        <div className='box-cart'>
             {props.lists.map((list, index) => 
                <Cart  list={list} cartItems={props.cartItems} addToCart={props.addToCart} removeFromCart={props.removeFromCart} key={index} />
            )};
        </div>
    );
};

export default Product;