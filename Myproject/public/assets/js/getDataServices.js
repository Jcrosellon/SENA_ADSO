function getDataJson(){
    var url = "https://api-restt-default-rtdb.firebaseio.com/api/users";
   // var url = "https://www.sinapsissoft.com/sena/dataText.json";
var data = { username: "example" };
fetch(url, {
        method: "GET", // or 'PUT' // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}