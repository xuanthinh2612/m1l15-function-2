let product1 = document.getElementById('produc1');

function editProduct(productName) {
    let input = prompt('rename your product: ' + productName.value)
    if (input === '') {
        let tempt = productName.value;
        productName.innerHTML = tempt;
    } else {
        productName.innerHTML = input;
    }
}

function deleteProduct() {
    if (confirm('Do you want to delete this product?')) {
        document.getElementById('product1a').innerHTML = '';
    }
}

function addNewProduct() {

}

// ===============================================================================================

let products = ['Sony Xperia', 'Samsung Galaxy s3', 'Nokia 310c', 'Xiaomi', 'Huawei', 'Apple', 'Asus', 'Acer', 'Oppo']
let size = products.length;

function showAllProduct() {
    let table='';
    for (i = 0; i < length; i++) {
        table+=
        '<tr  id="product' + i + 'a">\n' +
        '            <td id = \'produc' + i + '\' >'+ products[i]+'</td>\n' +
        '            <td><button onclick="editProduct(product'+ i+')">Edit</button></td>\n' +
        '            <td><button onclick="deleteProduct('+'"product' + i + 'a\" +\')">Delete</button></td>\n' +
        '        </tr>'
    }
    document.getElementById('showProduct').innerHTML= table;
}
