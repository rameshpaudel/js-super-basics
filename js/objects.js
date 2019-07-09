

var obj = {
    name: "John",
    lastName: "Doe",
    bio: "Lorem ipsum dolor sit amet",
    fullName: function(){
        return this.name +" "+ this.lastName
    }
}



var firstProduct = {
    name: "Cowboy Hat",
    brand:"GUCCI",
    description: "The one of a kind hat that money can buy",
    size: {
        L : 10,
        S: 18
    },
    sku: 28,
    price: 2500,
    offer: null,
    color: ["red","black","grey"],
    productCode: "GHAT"
}


console.log(firstProduct.brand)
console.log('Large',firstProduct.size.L)
console.log('Small',firstProduct.size.S)





//These are same thing
// firstProduct = firstProduct / 2
// firstProduct /= 2

// firstProduct = firstProduct + 2
// firstProduct += 2
