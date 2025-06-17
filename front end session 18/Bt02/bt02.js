
let products = [
    {id: 1, name: "Milk", count: 100},
     {id: 2, name: "Orange", count: 100},
      {id: 3, name: "Butter", count: 100},
];

products.push({id: 4, name: "cheese", count: 60});
products = products.filter(products => products.id !== 2);
let productnt = products.find(product => product.id === 3);
if (productnt) {
    productnt.count = 0;

}
let keyword = "Butter";
let foundProduct = products.find(product => product.name === keyword);

if(foundProduct){
    console.log("tim thay san pham:");
    console.log("Id:",foundProduct.id);
    console.log("Ten:", foundProduct.name);
    console.log("So luong:",foundProduct.count);

} else{
    console.log("Khong co du lieu");
    
};