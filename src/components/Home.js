import React from 'react'
import Header from './Header'
import {useSelector} from 'react-redux'
import Productreducers from '../store/reducers/Productreducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Home = () => {


const {products} = useSelector (state => state.Productreducers);
    return (
        <div>
   
             <Header />
            

         <div className="firstCon">
             
             <div className="category">
               <marquee direction="left" >
               <span className="cate">Make Your Choise Remarkable :) , HappyShopping!</span>
               </marquee>
             </div>


         <div className="Carddesign">
                   {products.map(product=>(
                       <div className='col-3' key={product.id}>
                 
                 <Link to={`/Detail/${product.id}`} className="link">
                               <Card style={{ width: '18rem' ,marginLeft:"5pc"  }} className="cardAn" >
                                    
  <Card.Img variant="top" src={`/images/${product.image}`}style={{height:"150px",padding:"5px", borderRadius:"1.4pc" }}  alt="image name" />

  <Card.Body>
    <Card.Title className="cardTitle">{product.name}
    </Card.Title>
    <Card.Text className="cardText">
    {product.desc}
    </Card.Text>
    <div className="cardPrice">
    <Card.Text className="cardprice">
    Rs {product.price} 
    </Card.Text>
  
    <Card.Text className="cardDprice">
    Rs{product.discountprice}
    </Card.Text>
    </div>
  </Card.Body>
</Card>       
</Link>
                           </div>
                  
                   ))}

</div>
</div> 



            </div>

        
    )
}

export default Home
