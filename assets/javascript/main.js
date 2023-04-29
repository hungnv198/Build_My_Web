const link = "http://localhost:3000/music";

btnElement = document.querySelector('#btn')
nameElement = document.querySelector('#name');

//function addItem
function start(){
    handleAddData();
}
start();
function handleAddData(){
    btnElement.onclick = function(){
        var data = {
            name: nameElement.value
        }
        createData(data);
    }
}
function createData(data){
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(link, options)
        .then(function(response){
            return response.json()
        })
}