"use strict";
function addItems(){
    let product = document.getElementById('products');
    let product_name = document.getElementById('product-name');
    let tr = document.createElement("tr");
    tr.setAttribute('id', product_name.value);
    tr.appendChild(document.createTextNode(product_name.value));
    product.appendChild(tr);
}