fetch('caffeine_database.json')
.then(response => response.json())
.then(data => getInfo(data));

function getInfo(data){
    console.log(data);
}