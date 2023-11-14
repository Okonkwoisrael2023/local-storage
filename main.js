const grab = document.getElementById("d1");
let file1 = "data.json"
let file2 = "https://jsonplaceholder.typicode.com/todos/1"

fetch(file1)
.then((res) => res.json())
.then((data) => {
    console.log(data)
    // Display data on div
    for(let i = 0 ; i < data.length ; i++){
        // grab.nnerHTML += `<h3>${data[i].id}. ${data[i].name}</h3>`;
        grab.innerHTML += "<h3>"+data[i].id + "</h3>"
    } 
})
.catch((error) => console.log(error))
