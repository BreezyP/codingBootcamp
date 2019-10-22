class Produce{
    constructor(name, quantity, serialNumber, cost, sellPrice){
        this.name = name;
        this.quantity = quantity;
        this.serialNumber = serialNumber;
        this.cost = cost;
        this.sellPrice = sellPrice;
    }
}

class Category{
    constructor(name, products){
        this.name = name;
        this.products = products;
    }

    addProduct(product){
        this.products.push(product);
    }
}


//add some test products

function addBerries(){
    let fruits = [];

    let strawBerries = new Produce('strawberry', 100, 123, '$5','$20');
    fruits.push(strawBerries);

    let blackBerries = new Produce('Blackberries', 100, 124, '$7','$25');
    fruits.push(blackBerries);

    return fruits;

}

function addVeggies(){
    let veggies = [];

    let carrots = new Produce('Carrots', 100, 141, '$1', '$5');
    veggies.push(carrots);

    let asparagus = new Produce('Asparagus', 50, 154, '$3', '4');
    veggies.push(asparagus);

    return veggies;
}

//create our data structure to hold everything for viewing
const data = [];

//create some berries for our store
let berries = new Category('Berries', addBerries());
data.push(berries);

//create for veggies for our store
let veggies = new Category('Vegetables', addVeggies());
data.push(veggies);

//view categories
//view an individual product
//change the quantity of a product
// add products to any category

//view categories

let viewCategories = function(){
    data.forEach(cur => {
        console.log(cur.name);
    })
};

viewCategories();

//view an individual product
let viewProduct = function() {
    console.log(data[0].products[0].name);
    data.forEach(cur => {
        cur.products.forEach(next => {
            console.log(next);
        })
    })
};

viewProduct();

