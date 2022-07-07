import React, { Component } from 'react';  
class Info extends Component {
    state = {  } 
    render() { 
        return (
        <section class="container">
            <div class="row">
                <div class="col p-3">
                    <div class="custom-card"><i class="icon ion-ios-pricetags-outline"></i>
                        <h4>Most Affordable</h4>
                        <p>Find the best exclusives range of products</p>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="custom-card-gray"><i class="icon ion-settings"></i>
                        <h4>Free SERvice</h4>
                        <p>Find the best exclusives range of products</p>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="custom-card-gray"><i class="icon ion-flash"></i>
                        <h4>Free Delivery</h4>
                        <p>Find the best exclusives range of products</p>
                    </div>
                </div>
            </div>
        </section>   
        );
    }
}
 
export default Info;