import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={require("../../images/products/image-aqua.jpg")} alt=""/>
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Water</a>
                        <p>Clean water delivers in 2 days</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' src={require("../../images/avatars/daniel.png")} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;