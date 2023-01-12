import React from 'react'
import {Route, Switch} from "react-router-dom";
import Books from "../Books/Books";
import Cart from "../Cart/Cart";

const Paths = ({ bookItems, cartItems, addBook, removeBook, clearCart }) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Books bookItems = {bookItems} addBook={addBook} />
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} addBook={addBook} removeBook={removeBook} clearCart={clearCart} />
                </Route>
            </Switch>
        </div>
    )
}

export default Paths
