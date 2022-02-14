var datoTarjeta = []
var fechaActual = ""
var datos = []


async function getData() {
    
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json=>{
        fechaActual = json.fechaActual
       datos.push(...json.eventos.filter(fechas => fechas.date < fechaActual))})
        
        
        
        displayCard(datos)
    }

getData()
var inputSearch = document.querySelector("#searchInput")

inputSearch.addEventListener("keyup",search)

function search(event){
    
    var val = event.target.value 
    
    var data = datos.filter(evento => evento.name.toLowerCase().includes(val.toLowerCase()))
    displayCard(data)
    console.log(data)

}

function displayCard(data){
    var toDisplay = []
    
    if(data == undefined){
        toDisplay = []
        toDisplay.push(...datoTarjeta)

    }
    else{
         toDisplay = []
         toDisplay.push(...data)
        }
    var html=""
    toDisplay.map(datoTarjeta =>{
        
        html += `    
        <div class="boxCard">
        <div class="imgCard">
        <img src="${datoTarjeta.image}">
        </div>
        <div class="dataCard">
        <a href="./detalles.html?id=${datoTarjeta.id}"> <h2>${datoTarjeta.name}</h2></a>
        <p>Date:${datoTarjeta.date}</p>
        <p>Category:${datoTarjeta.category}</p>
        <p>Place:${datoTarjeta.date}<p>
        </div>
        </div>

        `
        
    })
    
    document.querySelector('#mainCards').innerHTML = html 
}      

displayCard()