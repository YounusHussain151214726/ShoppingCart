const initialState = {

    products :[
        {
        id :1 , name : "Men`s Tshirt" , image :"tshirt.jpg" , price : 1100 , discount :"60% off" , discountprice: 1100*60/100 , quantity :1 , desc : " From GulAhmed Summers Collection"},

        
        {id :2 , name : "Men`s 3ps" , image :"pantcoat.jpg" , price : 2000 , discount :"50% off" , discountprice: 2000*50/100 , quantity :1 , desc : "3piece Suit for Event Occassion  " },
        {id :3 , name : "Men`s Watch" , image :"watch.jpg" , price : 1500 , discount :"65% off" , discountprice: 1500*65/100 , quantity :1 , desc : "Rolex First Copy in reasonable price." },
        {id :4 , name : "Men`s Shoe" , image :"shoe.jpg" , price : 1250 , discount :"50% off" , discountprice: 1250*50/100 , quantity :1 , desc : "Armani Shoe" },
        {id :5 , name : "Men`s Jogger" , image :"jogers.jpg" , price : 1200 , discount :"50% off" , discountprice: 1200*50/100 , quantity :1 , desc : "Cat Jogger" },
        {id :6 , name : "J. Kurta" , image :"mshalwar.jpg" , price : 1200 , discount :"50% off" , discountprice: 1200*50/100 , quantity :1 , desc : "Kurta" },
        {id :7 , name : "J. Fragnance" , image :"jper.jpg" , price : 1500 , discount :"50% off" , discountprice: 1500*50/100 , quantity :1 , desc : "Fragnance" },
        {id :8 , name : "PeshawariCha" , image :"sandal.jpg" , price : 1400 , discount :"50% off" , discountprice: 1400*50/100 , quantity :1 , desc : "Peshawari Chappal" },

        {id :9 , name : "Womens Dress" , image :"wdress.jpg" , price : 1600 , discount :"50% off" , discountprice: 1600*55/100 , quantity :1 , desc : "Womens`s Dress" },
        {id :10 , name : "Womens Frok" , image :"wdress.jpg" , price : 1800 , discount :"50% off" , discountprice: 1800*50/100 , quantity :1 , desc : "Womens`s Frok" },
        {id :11 , name : "Womens Heels" , image :"wheel.jpg" , price : 1300 , discount :"50% off" , discountprice: 1300*50/100 , quantity :1 , desc : "Womens`s Heel" },
        {id :12 , name : "Womens Watch" , image :"wwatch.jpg" , price : 1000 , discount :"50% off" , discountprice: 1000*50/100 , quantity :1 , desc : "Womens`s watch" },

    ],
    Products:{}
}

const Productreducers =(state = initialState , action) => {

    switch(action.type){
     case 'Product':
     return{...state , Products : state.products.find(Products => Products.id === parseInt(action.id)) }
        default : return state
    }
}
export default Productreducers;