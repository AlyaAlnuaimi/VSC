// old method to connect with server 

// const loadProducts = function () {
//   let obj= JSON.parse(request.responseText);
//   console.log(obj.data.map(x=>x.name));

// };
// const request = new XMLHttpRequest();
// request.open("GET", "https://warm-mesa-88190.herokuapp.com/api/products/");
// request.send();
// request.addEventListener("load", loadProducts);


// send request to the server 
const request = fetch("https://warm-mesa-88190.herokuapp.com/api/products/");
request
//send the request 
  .then((data) => {
    request = fetch();
    request.then(() => {});
  })
// etha feeh error 
  .catch((err) => {})
  // feeh error or not it will send the request 
  .finally(() => {});

//----------------------------------------------------------------------
  // await always used with async() function 
const getData = async () => {
  console.log("getData");
  let response = await request;
  let data = await response.json();
  console.log(data);
};

// if there is an error catch it and don't stop the application 
console.log(0);
try {
  getData();
} catch (err) {
  console.log(err);
}
finally{
  
}

setTimeout(() => {
  console.log("setTimeout");
}, 0);

let interval = setInterval(() => {
  console.log("setInterval");
  // 1000 means start after 1 second 
}, 1000);

console.log(1);