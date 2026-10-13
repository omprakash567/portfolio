import React from 'react'
import shoe from './Asset/shoe.jpg'
import './Product.css'


const Product = ({ productObj }) => {


    return (
        <>
        <div>
        <h1>Jewellery</h1>
        </div>
        <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={item.image} className="imageshoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Product