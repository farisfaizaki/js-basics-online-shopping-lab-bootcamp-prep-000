var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var string="";
  if(cart.length>0){
    string+="In your cart, you have "
    for(let i=0;i<cart.length;i++){
      var key = Object.keys(cart)[i];
      if(i==0 && cart.length==1){
        string+=`${key} at ${cart[key]}.`;
      }else if(i!=0 && i==cart.length-1){
        string+=`, and ${key}  at ${cart[key]}.`;
      }else if(i==0 && cart.length!=1){
        string+=`${key} at ${cart[key]}`;
      }else{
        string+=`, ${key} at ${cart[key]}`;
      }
    }
  }else{
    string+="Your shopping cart is empty.";
  }
  console.log(string);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
