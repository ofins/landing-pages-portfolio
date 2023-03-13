let number = 0
let price = 0
let imagesrc = ""
let cartList =[]

//CONNECT WALLET BUTTON
const connectWalletBtn = document.querySelector("#connect-wallet-btn")
const connectWalletPopup = document.querySelector(".connect-wallet-popup")

connectWalletBtn.addEventListener("click", function() {
    connectWalletPopup.classList.toggle("hide")
})

//login active
const loginBtn = document.querySelector("#login-submit")

loginBtn.addEventListener("click", function() {
    if(document.querySelector("#wallet-id-input").value !== "" && document.querySelector("#wallet-pass-input").value !== "") {
        document.querySelector("#login-text").classList.toggle("hide")
        document.querySelector("#wallet-id-input").value = ""
        document.querySelector("#wallet-pass-input").value = ""
    }
    
})

//add to cart msg when button is clicked 
const addCartMsgBox = document.querySelector(".addtocart-msg-box")

function addCart(source, itemPrice, itemName) {
    addCartMsgBox.classList.toggle("hide") // how do i target all add to car  btn?
    imagesrc = source
    price += itemPrice
    cartList.push(itemName)
    number++
    console.log(cartList)
}

//continue shopping button
document.querySelector("#continue-shopping").addEventListener("click", function() {
    addCartMsgBox.classList.toggle("hide")
})

//check out
const checkoutSummary = document.querySelector(".checkout-box-text")
const checkoutBox = document.querySelector(".checkout-box")


document.querySelector("#goto-checkout-btn").addEventListener("click", function() {
    document.querySelector(".addtocart-msg-box").classList.add("hide")
    document.querySelector("#checkout-confirm").classList.remove("hide")
    document.querySelector("#checkout-buy").classList.add("hide")
    checkoutBox.classList.toggle("hide")
    checkoutSummary.innerHTML = 
    `<img src=${imagesrc}>
    <p>number of item: ${number}</p>
    <p>Total price: ${price.toFixed(2)}</p>`
})

document.querySelector("#checkout-confirm").addEventListener("click", function() {
    // checkoutBox.classList.add("hide")
    document.querySelector("#checkout-clearcart").classList.remove("hide")
    document.querySelector("#checkout-confirm").classList.add("hide")
    document.querySelector("#checkout-buy").classList.remove("hide")
    checkoutSummary.innerHTML = "<p><u>Your Cart List</u></p>"
    for(let i = 0; i < cartList.length; i++){
        if(i >3) {
            checkoutSummary.innerHTML += "..." + (cartList.length-3) + " more"
            break;
        }
        checkoutSummary.innerHTML += `<p>${cartList[i]}</p>`
    }
    checkoutSummary.innerHTML += 
    `
    <p>Your total amount is <u>${price.toFixed(2)}</u></p>
    <div class="shipping-info">
    <p>Shipping Info</p>
    Mailing Address: <input type="text">
    Email: <input type="text">
    Shipping Address: <input type="text">
    Contact Phone Number: <input type="text">
    Payment method: 
    <div class="payment-method">
    <input type="radio" name="payment">credit card
    <input type="radio" name="payment">ATM
    </div>
    <p>Additional notes:</p>
    <input type="text" class="notes">
    </div>
    `
})

document.querySelector("#checkout-exit").addEventListener("click", function() {
    checkoutBox.classList.add("hide")
})

//clear cart button
function clearCart(){
    cartList=[]
    price = 0
    number = 0
    checkoutSummary.innerHTML =""

    checkoutSummary.innerHTML += 
    `
    <p>Your total amount is <u>${price.toFixed(2)}</u></p>
    <div class="shipping-info">
    <p>Shipping Info</p>
    Mailing Address: <input type="text">
    Email: <input type="text">
    Shipping Address: <input type="text">
    Contact Phone Number: <input type="text">
    Payment method: 
    <div class="payment-method">
    <input type="radio">credit card
    <input type="radio">ATM
    </div>
    <p>Additional notes:</p>
    <input type="text" class="notes">
    </div>
    `
}

//buy now button
function buyNow() {
    document.querySelector("#checkout-buy").classList.add("hide")
    document.querySelector("#checkout-clearcart").classList.toggle("hide")
    checkoutSummary.innerHTML = 
    `<h1>Thank you for purchasing!</h1>
    <p>Please be aware that shipping will take 7 - 14 business days</p>
    <p>Your purchase total: ${price.toFixed(2)}</p>
    <p>Your order reference number is #F123992</p>
    `
}