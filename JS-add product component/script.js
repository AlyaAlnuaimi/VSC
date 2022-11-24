"use strict";
function addItems(){
    let table = document.getElementsByTagName('table')[0];
    let product_name = document.getElementById('product-name').value;
    let product_price = document.getElementById('price').value;
    let product_quantity = document.getElementById('quantity').value;
    
    let newRow = table.insertRow(2);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = product_name;
    cell2.innerHTML = product_price;
    cell3.innerHTML = product_quantity;

}

let table = document.getElementById('price'), sumVal = 0;
for(var i = 1; i < table.rows.length; i++)
{
    sumVal = sumVal + table.rows[i].cells[3].innerHTML;
}
console.log(sumVal);