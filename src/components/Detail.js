import React from 'react'
import {useParams} from'react-router-dom'
import { useEffect ,useState } from 'react'
import {useDispatch ,  useSelector  } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
const Detail = () => {


const {id}= useParams();
const dispatch = useDispatch();
const {Products}=useSelector(state=>state.Productreducers)
const [quan, setquan] = useState(1)
useEffect(()=>{
dispatch({type:'Product' , id})
},[id])
const decre =()=>{
    if (quan >1)
    setquan(quan-1)
}


console.log(Products)
return (
        <div>
            
            <div className="Dmd">
                <div className="Dfd">
             
<Card className="dcard">
  <Card.Header style={{backgroundColor:'skyblue' ,fontFamily:'sans-serif' ,fontWeight:'bold'}} >Product id : {Products.id} </Card.Header>
  <Card.Body>
      <img  src={`/images/${Products.image}`} style={{height:"200px" , borderRadius:"0.5pc" ,border:"1px green solid"}} />
    <Card.Title className="dsnd" ><span className="dsn"> {Products.name} </span></Card.Title>
    <Card.Text>
  <span className="dsd"> {Products.desc}</span>
    </Card.Text>
    <Card.Text className="id1">

    <span className="dec">
<AiOutlineMinus onClick={decre}/>
    </span>
    <span className="quantity">
{quan}
    </span>
    <span className="inc">
        <AiOutlinePlus  onClick={()=>setquan(quan + 1)}/>
        </span>
 
    
    </Card.Text>

    <Card.Text className="dlc">
    <span className="ds1">Rs {Products.price}  </span> <span className="ds2" >{Products.discount}</span>
   <br/>
    <span className="ds3" >In Only : Rs {Products.discountprice *quan}</span>
    </Card.Text>
    <Button variant="primary" style={{backgroundColor:"green"}} onClick={()=>dispatch({type:'addtocart', payload:{Products,quan}})} >Add to cart</Button>
  </Card.Body>
</Card>
                </div>
            </div>

        </div>
    )
}

export default Detail
