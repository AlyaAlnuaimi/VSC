class CartObject {
    //properties
    CartLines;
    #total;
    user;
    paymentMethod;

    constructor(){
        this.CartLines = [];
    }
    get total() {
       return (this.subTotal + this.shipping) * (1 + this.getPaymentCost());
    }
    get subTotal(){
        // take the total only from CartLines using (map)
        this.CartLines.map(x=>x.total).reduce((a,v) => (a += v), 0);
    }
    get shipping(){
        return (
            this.CartLines.map(x=>x.quantity).reduce((a,v) => (a += v), 0) * 2
            );
    }
    getPaymentCost(){
        switch(this.paymentMethod?.toLowerCase()){
            case "paypal":
                return 0;
            case "check" :
                return 0.01;
            case "bank-transfer" :
                return 0.02;
            default :
                return 0;
        }
    }
    addProductById(id){
        let CartLines = this.CartLines.find((x)=>x.product.id === id);
        if(CartLines){
            // if the product is added already increase the quantity by 1 
            CartLines.increaseQuantity(1);
            
        }
        return CartLines;
    }
    addProduct(product){
        // if the product add for the first time -> add new product
        let CartLines = this.addProductById(product.id)
        if(!CartLines){

            const ids = thins.CartLines.map((x) => x.id);
            const maxId = Math.max(...CartLines(ids.length > 0 ? ids : [0]));
            CartLines = new CartLines(product);
            CartLines.id = maxId + 1;
            this.CartLines.push(CartLines);
        }
    }
    deleteProduct(id){
    let CartLines = this.CartLines.find((x)=>x.product.id == id);
    if(CartLines){
        if(CartLines.quantity == 1) this.removeDetail(CartLines.id);
        else{
            CartLines.decreaseQuantity(1);
        }
     }
    }
    removeDetail(id){
        this.CartLines.findIndex(x=>x.id === id);
        this.CartLines.sploce(index,1);
    }

    render(){
        this.renderTotal();
    }
    renderTotal(){
    document.getElementById("total").innerHTML = this.total;
    document.getElementById("sub-total").innerHTML = this.subTotal;
    document.getElementById("shipping").innerHTML = this.shipping;
    }

    renderTable(){
        document.getElementById('products').innerHTML = '';
        this.CartLines.forEach((x) => {
        document.getElementById("products").innerHTML += x.getHtmlRow();
        });
    }
    saveChanges(){
        const product = [];
        this.CartLines.forEach((d) => {
            for (let i=0; i<d; i++) {
                product.push(d.product);
            }
        });
        localStorage.setItem('products',JSON.stringify(product));
    }
}
class CartLines{
    id;
    product;
    quantity;
    price;
    #total;

    get total(){
        return this.price * this.quantity;
    }
    constructor(product){
        this.product = product;
        this.quantity = 1;
        this.price = product.price;
    }
    increaseQuantity(q){
    this.quantity += q;
    }
    decreaseQuantity(q){
        // to prevent being 0
        if(this.quantity > q) this.quantity -= q;
    }
    getHtmlRow(){
        return  `<tr>
        <td class="align-middle">
        <img src="${this.product.image}" alt="" style="width: 50px;"> ${this.product.name}</td>
        <td class="align-middle">$${this.price}</td>
        <td class="align-middle">
            <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-sm btn-primary btn-minus" onclick="cartObject.removeDetail(${this.id});cartObject.saveChanges();cartObject.render();">
                    <i class="fa fa-minus"></i>
                    </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="${
                  this.quantity
                }">
                <div class="input-group-btn">
                    <button type="button" class="btn btn-sm btn-primary btn-plus" onclick="cartObject.addProductById(${this.product.id});cartObject.saveChanges();cartObject.render();">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </td>
        <td class="align-middle">$${this.total}</td>
        <td class="align-middle"><button class="btn btn-sm btn-danger" type="button" onclick="cartObject.deleteProduct(${this.product.id});cartObject.render();"><i class="fa fa-times"></i></button></td>
    </tr>`
    }
}
class product{
    id;
    name;
    image;
    price;

    constructor(product){
        this.id = product.id;
        this.name = product.name;
        this.image = product.image;
        this.price = product.price;
    }
}
class user {
    firstName;
    lastName;
    address;

    constructor(firstName,lastName,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    }

    constructor(user){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.address = user.address;
    }

}

let CartObject = new CartObject();

const product = JSON.parse(localStorage.getItem("products")??"[]");
product.forEach((x) => {
    CartObject.addProduct(new product(x))
});

/*let product1 = new product({
    id: 1,
    name: "product1",
    image: "JS-add product component/img/product-1.jpg",
    price: 100,
});*/
/*let product2 = new product({
    id:2,
    name: "product2",
    image:"JS-add product component/img/product-2.jpg",
    price: 100,
});*/

CartObject.render();