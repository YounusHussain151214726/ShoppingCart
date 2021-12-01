const firstState={
products:[],
totalQuantity:0,
totalPrice:0
}

const cartReducer =(state = firstState ,action)=>{
let findpro;
let index;

    switch(action.type){
        case 'addtocart':
            const {Products , quan} = action.payload;
            const check = state.products.find(pro => pro.id === Products.id);
       
if(check){
    return state;
}else{
    const Total = state.totalPrice + Products.discountprice*quan;
    const Tq =state.totalQuantity + quan
    Products.quan =quan;
return{
...state , products: [...state.products ,Products] ,totalPrice:Total ,totalQuantity:Tq
}
}

case 'inc' :

findpro= state.products.find(product=> product.id === action.payload);
index = state.products.findIndex(product =>product.id === action.payload);
findpro.quan +=1;
state.products[index]=findpro;

return {
    ...state , totalPrice : state.totalPrice + findpro.discountprice, totalQuantity:state.totalQuantity+1
}

case 'dec' :

findpro= state.products.find(product=> product.id === action.payload);
index = state.products.findIndex(product =>product.id === action.payload);
if(findpro.quan >1){
    findpro.quan -=1
state.products[index]=findpro;
return{
    ...state ,totalPrice:state.totalPrice-findpro.discountprice , totalQuantity : state.totalQuantity-1
}

}else{
    return state;
}

case 'remove':
    findpro= state.products.find(product=> product.id === action.payload);
const filtered = state.products.filter(product => product.id !== action.payload)
return{
    ...state , products: filtered,
    totalPrice:state.totalPrice-findpro.discountprice * findpro.quan,totalQuantity:state.totalQuantity-findpro.quan
}
default:
    return state;
}    
}

export default cartReducer;