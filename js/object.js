let records = localStorage.getItem('listRecord')
records = records ? JSON.parse(records) : []
showRecord()

function addRecord() {
    let orderRecord = document.getElementById('order').value
    let amountRecord = document.getElementById('amount').value
    let productRecord = document.getElementById('product').value
    let valueRecord = document.getElementById('value').value

    if(orderRecord && amountRecord && productRecord && valueRecord){
        records.push({ 'pedido': orderRecord, 'cantidad': amountRecord, 'producto': productRecord, 'valor': valueRecord })
        showRecord()
    }
}

function showRecord() {
    document.getElementById('order').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('product').value = ''
    document.getElementById('value').value = ''

    let html = ''
    records.forEach((elemt, index) => {
        html += `<div class="col-4 mb-3"> ${elemt.pedido} </div>`
        html += `<div class="col-4 mb-3"> ${elemt.cantidad} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.producto} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.valor} </div>`
        html += `<div class="col-2"><a href="#" class="btn btn-danger" onclick="deleteRecord(${index})"> X </a></div>`
    });

    localStorage.setItem('listRecord', JSON.stringify(records))
    document.getElementById('records').innerHTML = html
}  

function deleteRecord(order) {
    records.splice(order, 1)
    showRecord()
}

