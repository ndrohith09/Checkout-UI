import React, { Component } from 'react';
import Bedroom from "../../assets/img/bedroom.webp"
import Bedroom1 from "../../assets/img/bedroom1.webp"
class Cart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cart: [
                {
                    "img" : Bedroom,                    
                } , 
                {
                    "img" : Bedroom1,
                }
            ], 
        }
    }
    render() { 
        const { cart } = this.state;
        return ( 
            <main class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div class="items-body">

                    {cart.length ?
                        cart.map((item, index) => (
                            <div class="row cart-item" key={index}>
                        <div class="col-md-3">
                            <img class="img-fluid" src={item.img} alt={item.img} /></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-1">Royal Double Bed</h5>
                            <p class="text-style-2">$45.00</p>

                            {/* counter button  */}
                            <div class="wrapper">
                                <span class="minus">-</span>
                                <span class="num">01</span>
                                <span class="plus">+</span>
                            </div>

                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Tenure</h5>
                            <p class="text-style-3">12 Months</p>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Tenure</h5>
                            <p class="text-style-3">Rs 799</p><small style={{ "color": '#3dbdb6'}}>Fully refundable</small>
                        </div>
                        <div class="col-md-2 col-sm-3 col-xs-3 col-3" style={{ "padding": '2%'}}>
                            <h5 class="text-style-2">Total</h5>
                            <p class="text-style-4">Rs 1499</p>
                        </div>
                    </div>
                        ))
                    : (
                        <p>No items in cart</p>
                    )
                    }
                    


                    <div class="row container py-4">
                        <div class="col-7 col-md-7 col-lg-8 col-xl-8 col-xxl-7"><button class="btn btn-primary custom-btn" type="button">CONTINUE SHOPPING</button></div>
                        <div class="col help-text">
                            <h5>Need help ?&nbsp;</h5>
                        </div>
                    </div>
                </div>
            </main> 
        );
    }
}
 
export default Cart;