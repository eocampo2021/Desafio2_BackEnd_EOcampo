const fs = require('fs');


class ProductManager {
  constructor(path){
    this.path = path;
    this.products = this.readData();
  }

  readData(){
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, 'utf-8'));
    return data;
  }
  writeData(data){
    let writeFile = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, writeFile);
    return writeFile;
  }

  
  idGenerator(){
    if(this.products.length > 0){
        let productsID = this.products.map(product => product.id);
        return Math.max(...productsID) + 1;
    }else{
      let id = 1;
      return id;
    }
 }

 getAllProduct(){
    let data = this.readData();
    console.log(data);
 }

 addProduct(product){
   //console.log(product);
  if (this.products.find((item) => item.code === product.code)){
      return console.log("El codigo del producto ya existe");
  }
   else if(!!!product.title || !!!product.description || !!!product.price || !!!product.code || !!!product.thumbnail || !!!product.stock){
      return console.log("Hay datos Null");
    }else{
      let data = this.readData();
      product.id = this.idGenerator();
      data.push(product);
      this.writeData(data);
  }
}
 

 getProductById(id){
  let data = this.readData();
  if(data.find(product => product.id === id)){
    let getProduct = data.find(product => product.id === id)
    console.log (getProduct);
    return getProduct;
  }else{ // sacar este else
      console.log("No se encontro el ID del producto")
  }
  }

updateProduct(id, product){
  let data = this.readData();
  if(data.find(product => product.id === id)){
      let products = data.filter(product => product.id !==id)
      product.id = id;
      products.push(product);
      this.writeData(products);
      return products;
  }else{
    console.log("El ID del producto a actualizar no se encuentra");
  }
 }

 deleteProduct(id){
  let data = this.readData();
  if(data.find(product => product.id === id)){
      let products = data.filter(product => product.id !==id)
      this.writeData(products);
      //console.log(products);
      return products;
  }else{
    console.log("El ID del producto a borrar no se encuentra");
  }
 }
}

const productManager = new ProductManager("db.json");

let product3 = {
    title: "Auto", 
    description: "Fiat", 
    price: 1190000,
    code: "FIAT1244",
    thumbnail: "url://stockimg/net/f1234.png",
    stock: 15,
};



//productManager.addProduct(product3);

productManager.updateProduct(3, {
  title: "Auto", 
  description: "Fiat", 
  price: 1199999,
  code: "FIAT9999",
  thumbnail: "url://stockimg/net/f1234.png",
  stock: 20,
});


//productManager.getProductById(3);

//productManager.deleteProduct(2);

