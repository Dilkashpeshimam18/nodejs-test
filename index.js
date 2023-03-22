const dishPrice = document.getElementById('price')
const dishName = document.getElementById('dish')
const table = document.getElementById('table')
const addOrder = document.getElementById('button')
let tableNo = ''
let ordersObj;

table.onchange = function (event) {
    tableNo = event.target.value
}


addOrder.addEventListener('click', async (e) => {
    e.preventDefault()
    ordersObj = {
        name: dishName.value,
        price: Number(dishPrice.value),
        table: tableNo
    }
    if (dishPrice.value == '' || dishName.value == '' || table.value == '') {
        alert('Enter all the value!!')
    } else {
        try {
            const res = await axios.post('http://localhost:4000/add-order', ordersObj)
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }
})


window.addEventListener('DOMContentLoaded', async () => {
    try {
        const orders = await axios.get('http://localhost:4000/get-orders')
        console.log(orders)
    } catch (err) {
        console.log(err)
    }
})