
let places = localStorage.getItem('ListArt')
places = places ? places.split(',') : []
showPlace()

function addCategory() {
    let place = document.getElementById('place').value
    //split convierte en arreglo, cuando se ingresan varios valores separados con comas(,)
    place = place.split(',')
    // se recorre el arreglo, donde i es igual a la posición inicial, que posiciones tenemos hasta la posición final
    for(let i = 0; i < place.length; i++){
        if(place[i]){
            //push = agregar
            places.push(place[i])
            showPlace()
        }
    }
    //console.log(place);
}

function showPlace(){
    document.getElementById('place').value = ''
    let html = ''
    for (let i = 0; i < places.length; i++) {
        html+= `<div class="col-10 mb-3"> ${places[i]} </div>`
        html+= `<div><a href="#7A9D54" class="btn btn-danger" onclick="deletePlace(${i})"> X </a></div>`

    }
    localStorage.setItem('ListArt', places)
    document.getElementById('places').innerHTML = html
}

function deletePlace(place) {
    places.splice(place, 1)
    showPlace()
    
}