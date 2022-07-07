import React, { Component } from 'react';
import Timeline from '../timeline/timeline';
import Cart from '../cart/cart';
import Checkout from '../checkout/checkout';
import Info from '../info/info';
import Nav from '../nav/nav';
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <>
          <Nav /> 
          <br /> 
            <Timeline /> 
            <div className='container'> 
            <div className='row'>
                <Cart />
                <Checkout />
            </div>
            </div>
            <br />
            <Info />
            </>
        );
    }
}
 
export default Main;