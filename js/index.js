



var datoTarjeta = []



async function getData() {
    
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response=>response.json())
    .then(json=>datoTarjeta.push(...json.eventos))
        
        
        displayCard()
        
    }
    
    
    
    getData()
    
    
    
    var inputSearch = document.querySelector("#searchInput")
    
    inputSearch.addEventListener("keyup",search)
    
    

    function search(event){
        
        var val = event.target.value 
        
        var data = datoTarjeta.filter(evento => evento.name.toLowerCase().includes(val.toLowerCase()))
        console.log(data)
        
        displayCard(data)
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
            <a href="./detalles.html?id=${datoTarjeta.id}"><h2>${datoTarjeta.name}</h2></a>
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
    
    
    
    var elementosFiltrados = [];
    
    var datoTarjeta2 = [];
    var fechaActual = [];
    var pasados = [];
    
    
    async function getData2() {
        await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(response => response.json())
        .then(json =>{datoTarjeta2.push(json)})
        
        fechaActual.push(datoTarjeta2[0].fechaActual);
        pasados.push(...datoTarjeta2[0].eventos.filter(item =>item.date < fechaActual));
        
        
    }
    getData2();
    
    
    
    
    var selector = document.getElementById("select");
    
    selector.addEventListener("change", function(event){
        
        if(event.target.value == "pasados"){
            elementosFiltrados = [];
            elementosFiltrados.push(...datoTarjeta2[0].eventos.filter(item =>item.date < fechaActual));
            
        }else if(event.target.value == "proximos"){
            elementosFiltrados = [];
            elementosFiltrados.push(...datoTarjeta2[0].eventos.filter(item =>item.date > fechaActual));
        }else{
            console.log("seleccione")
            elementosFiltrados = [];
            elementosFiltrados.push(...datoTarjeta2[0].eventos)
        }
        
        displayCard(elementosFiltrados);
    })
    
    
    
    
    
    
    
    
    
 