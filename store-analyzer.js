const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 1200,
        inStock: false
    },
    {
        id: 2,
        name: "Mouse",
        category: "Electronics",
        price: 25,
        inStock: true
    },
    {
        id: 3,
        name: "Desk Chair",
        category: "Furniture",
        price: 350,
        inStock: false
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 130,
        inStock: true
    },
    {
        id: 5,
        name: "Standing Desk",
        category: "Furniture",
        price: 650,
        inStock: true
    },
    {
        id: 6,
        name: "Coffee Mug",
        category: "Kitchenware",
        price: 15,
        inStock: true
    },
    {
        id: 7,
        name: "Noise-Cancelling Headphones",
        category: "Electronics",
        price: 299,
        inStock: false
    },
    {
        id: 8,
        name: "Spiral Notebook",
        category: "Office Supplies",
        price: 8,
        inStock: true
    }
];

function getInStock (arr) {return arr.filter(item => item.inStock === true);}
function getElectronics (arr) {return arr.filter(item => item.category == 'Electronics').map(item => item.name)}
function getTotalPrice (arr) {return arr.filter(item => item.inStock === true).reduce((accu, item)=> {return accu + item.price}, 0)}
function getMouse (arr) {return arr.find(item => item.name == 'Mouse')}
function sortLowtoHigh (arr) {return arr.sort((a,b)=>a.price - b.price)}
function ifMorethan1000 (arr) {return arr.some(item => item.price > 1000)}
function ifID (arr) {return arr.every(item => item.id);}


console.log("1. In-Stock Products:"); console.table(getInStock(products));
console.log("\n--------------------------------------------------\n");

console.log("2. Electronics Names:", getElectronics(products));
console.log("\n--------------------------------------------------\n");

console.log("3. Total Value of In-Stock:", getTotalPrice(products));
console.log("\n--------------------------------------------------\n");

console.log("4. Product Named 'Mouse':\n", JSON.stringify(getMouse(products), null, 2));
console.log("\n--------------------------------------------------\n");

console.log("5. Products Sorted Low to High:"); console.table(sortLowtoHigh(products));
console.log("\n--------------------------------------------------\n");

console.log("6. Any Product > $1000?:", ifMorethan1000(products));
console.log("\n--------------------------------------------------\n");
console.log("7. All Products Have ID?:", ifID(products));
console.log("\n--------------------------------------------------\n");