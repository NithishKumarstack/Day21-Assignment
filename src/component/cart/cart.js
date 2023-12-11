import './cart.css'
const Cart = (props) => {
    const {list, cartItems, addToCart} = props;
    const addingItemToCart = (item) => {
      addToCart({...item, quantity: 1});
    };
    return (
       <div className='cart'>
         <div>
          <img src={list.imgUrl} alt={list.name} />
        </div>
        <div className='info'>{list.quantity < 50 ? (<span className='few'>Only Few Items</span>):(<span className='avail'>Available</span>)}</div>
        <h4>Product Name:{list.name}</h4>
        <h4>Price:{list.price}</h4>
        <div>{cartItems.some((item) => item.id === list.id) ? (<button className='remove' >Remove From Cart</button>) : (<button className='add' onClick={() => addingItemToCart(list)}>Add To Cart</button>) }</div>
       </div>
    );
};

export default Cart;