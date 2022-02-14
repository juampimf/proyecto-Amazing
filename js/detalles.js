var datoTarjeta = []

  



async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json => datoTarjeta.push(...json.eventos))
      
 
var id = location.search.split("?id=").filter(Number)
console.log(id);
var selectedId = Number(id[0])
console.log(selectedId);
var dato = datoTarjeta.find(function(dato) {
    return dato.id == selectedId
    
})


    var html = ""
    
     html += `    
    <div class="boxCard">
    <div class="imgCard">
    <img src="${dato.image}">
    </div>
    <div class="dataCard">
    <h2>${dato.name}</h2>
    <p>Date:${dato.date}</p>
    <p>Description:${dato.description}</p>
    <p>Category:${dato.category}</p>
    <p>Place:${dato.place}</p>
    <p>Capacity:${dato.capacity}</p>
    <p>Assistance:${dato.assistance}</p>
    <p>Price:${dato.price}</p>
    </div>
    </div>
    `
    document.querySelector('#mainCards').innerHTML = html 


    }   
   
    
    getData()