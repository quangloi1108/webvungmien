import React from 'react';
// import Checkout from '../components/Checkout';
// import { cartItems } from '../data/cart'; // Import giỏ hàng từ data
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const CheckoutPage = () => {
    return (
        <div className="Header">
            <Header />
            <div className="checkout-page">
                <h1>Thanh toán</h1>
                {/* <Checkout cartItems={cartItems} /> */}
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
