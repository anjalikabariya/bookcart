import React from 'react'
import "./Cart.css";

const Cart = ({ cartItems, removeBook, addBook, clearCart }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">{cartItems.length >= 1 && (
                <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
            )}</div>
            {cartItems.length === 0 && (<div className="empty-cart">Cart is empty!!</div>)}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">
                        <img src={item.image} alt={item.name} className="cart-item-image" />  
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-function">
                            <button className="cart-item-add" onClick={() => addBook(item)}>+</button>
                            <button className="cart-item-remove" onClick={() => removeBook(item)}>-</button>
                        </div>
                        <div className="cart-item-price">{item.quantity} * ${item.price}</div>
                    </div>
                ))}
            </div>
            <div className="cart-total-price-name">
                Total Price
                <div className="cart-total">${totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart
