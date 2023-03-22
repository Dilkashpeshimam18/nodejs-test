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
            displayOrder(res.data.data)
            dishPrice.value = ''
            dishName.value = ''
            table.value = ''
        } catch (err) {
            console.log(err)
        }

    }
})


window.addEventListener('DOMContentLoaded', () => {
    getOrders()
})


async function getOrders() {
    try {
        const orders = await axios.get('http://localhost:4000/get-orders')
        const result = orders.data.allOrders
        result.forEach((order) => {
            displayOrder(order)
        })
    } catch (err) {
        console.log(err)
    }
}

function displayOrder(ordersObj) {
    if (ordersObj.table == 'Table1') {
        let tableList = document.querySelector('#list1')
        let tableTag = `<li id='${ordersObj.id}'> ${ordersObj.dish} ${ordersObj.price}  <button onClick=deleteOrder('${ordersObj.id}')>Delete</button></li> `
        tableList.innerHTML = tableList.innerHTML + tableTag
    } else if (ordersObj.table == 'Table2') {
        let tableList = document.querySelector('#list2')
        let tableTag = `<li id='${ordersObj.id}'> ${ordersObj.dish} ${ordersObj.price}  <button onClick=deleteOrder('${ordersObj.id}')>Delete</button></li> `
        tableList.innerHTML = tableList.innerHTML + tableTag
    } else {
        let tableList = document.querySelector('#list3')
        let tableTag = `<li id='${ordersObj.id}'> ${ordersObj.dish} ${ordersObj.price}  <button onClick=deleteOrder('${ordersObj.id}')>Delete</button></li> `
        tableList.innerHTML = tableList.innerHTML + tableTag
    }

}


const deleteOrder = async (id) => {

    try {
        const res = await axios.delete(`http://localhost:4000/delete-order/${id}`)

        window.location.reload()

    } catch (err) {
        console.log(err)
    }
}