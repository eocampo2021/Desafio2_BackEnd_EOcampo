const fs = require ('fs')


class ProductManager {
  constructor(path){
    this.path = path;
    this.path = this.readData();
  }

  readData(){
    const data = JSON.parse(fs.readFileSync(`./${this.path}`, `utf-8)`));
    return data;
  }
  writeData(data){
    let writeData = JSON.stringify(data);
    fs.writeFileSync(`./${this.path}`, writeData);
    return writeData;
  }

  
  idGenerator(){
    if(this.products.lenght > 0){
        let id = this.products.map(product => product.id);
        return Math.max(...id) + 1;
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
  if(this.products.find (item => item.code === product.code)){
      return console.log("El codigo del producto ya existe");
  }
  else if(!!!item.title || !!!item.description || !!!item.price || !!!item.thumbnail|| !!!item.code || !!!item.stock)
      return console.group("Hay datos Null")

  else{
      let data = this.readData();
      product.id = this.idGenerator();
      data.push(product);
      this.writeData(data);
  }
 }

 getProductById(id){
  let data = this.readData();
  if(data.find(product => product.id ===id)){
    let getProduct = data.find(product => product.id ===id)
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

const productManager = new ProductManager(`db.json`);

let p1 = {
    title: "Auto", 
    description: "Ford", 
    price: 2100000,
    code: "ford1234",
    thumbnail: "http://stockimg/net/1234.png"
    stock: 50,
};

productManager.addProduct(p1);