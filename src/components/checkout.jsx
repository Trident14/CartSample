import React from "react";
import "../style/checkout.css"

const Checkout = ({price}) =>{
    return(
        <>
            <div className="parent-holder">
                <div className="total">
                    <h3>Total is:{price} </h3>
                </div>
                <div className="btn">
                    <button className="btn-Buy" onClick={()=>alert("success")}>Buy</button>
                </div>
            </div>
        </>
    );
}
export default Checkout;