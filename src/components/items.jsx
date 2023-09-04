import React from "react";
import { useState } from "react";
import "../style/item.css"
import Checkout from "./checkout";

const Item = ()=>{
    const [Quantity,SetQuantity]=useState(1);

    const initialdata=[
                {"id":1,
                "name":"item 1",
                "price":100,
                "quantity":1
                },
                {"id":2,
                "name":"item 2",
                "price":200,
                "quantity":1
                },
                {"id":3,
                "name":"item 3",
                "price":300,
                "quantity":1
                },
                {"id":4,
                "name":"item 4",
                "price":400,
                "quantity":1
                },
            ];
    const [data,SetData] = useState(initialdata);

    const handleAdd=(id,cnt)=>{
       
        const updatedData = data.map((item)=>{
            if(item.id ===id){
                return {...item,quantity:item.quantity+1};
            }
            return item;
        });
        SetData(updatedData);
    }

    const handleRemove=(id,cnt)=>{
       
        const updatedData = data.map((item)=>{
            if(item.id ===id && item.quantity>0){
                return {...item,quantity:item.quantity-1};
            }
            return item;
        });
        SetData(updatedData);
    }
    const calculateTotalPrice = () => {
        let total = 0;
        data.forEach((item) => {
          total += item.price * item.quantity;
        });
        return total;
      };
    
    return(
        <>
            <div className="parent-div">
                <table className="table-div">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,idx)=>(
                            <tr key={idx}>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={()=>handleRemove(item.id,1)}>-</button>
                                    {item.quantity}
                                    <button onClick={()=>handleAdd(item.id,1)}>+</button>
                                </td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="checkout-div">
                    <Checkout price={calculateTotalPrice()}/>
                </div>
            </div>
                        
        </>
    );
}


export default Item;