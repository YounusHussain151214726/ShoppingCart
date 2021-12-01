import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";

const Cart = () => {
  const { products } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch()
  return (
    <div className="cart">
      <div className="heading">
        <h>Your Cart!</h>

        {products.lenght !== 0 || products.lenght > 0 ? (
          <>
          
            <div className="colc">
              <div className="col9">
                <div className="crow">
                  <div className="crow">
                    <div className="col2">Product Id</div>
                    <div className="col2">Product</div>
                    <div className="col2">Name</div>
                    <div className="col2">Price</div>
                    <div className="col2">+/-</div>
                    <div className="col2">Total</div>
                    <div className="col2">Remove</div>
                  </div>
                </div>

                {products.map((product) => (
                  <div key={product.id}>
                    <div className="data">
                      <div className="idd">{product.id}</div>

                      <div className="imgd">
                        <img
                          src={`/images/${product.image}`}
                          style={{
                            height: "100px",
                            marginLeft: " 0pc",
                            borderRadius: "0.5pc",
                            border: "1px green solid",
                          }}
                        />
                      </div>
                      <div className="nid">{product.name}</div>

                      <div className="pid">{product.discountprice}</div>

                      <div className="idd">

                      <span className="dec1">
<AiOutlineMinus onClick ={()=> dispatch({type :'dec' , payload :product.id})} />
    </span>
  <span className="count">{product.quan}</span>
    <span className="inc1">
        <AiOutlinePlus onClick ={()=> dispatch({type :'inc' , payload :product.id})} />
        </span>
 


                      </div>


<div className="tid"> {product.discountprice * product.quan} </div>

          <div className="rd" onClick ={()=> dispatch({type :'remove' , payload :product.id})}>
            <BsFillBackspaceFill  />
          </div>
                    </div>
                  </div>
                ))}
              </div>
               {/* <div className="sum">Summary</div> */}
            </div> 
          </>
        ) : (
          " Empty Cart"
        )}
      </div>
    </div>
  );
};

export default Cart;
