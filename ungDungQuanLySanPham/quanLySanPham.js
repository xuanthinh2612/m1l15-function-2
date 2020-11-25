let products = ['Sony Xperia', 'Samsung Galaxy s3', 'Nokia 310c', 'Xiaomi', 'Huawei', 'Apple', 'Asus', 'Acer', 'Oppo'];
let size = products.length;

function showAllProduct(products) {
    let size=products.length;
    let table = '';
    for (i = 0; i < size; i++) {
        table +=
            '<tr>\n' +
            '            <td id = \'product' + i + '\' >' + products[i] + '</td>\n' +
            '            <td><button onclick="editProduct(' + i + ')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById('showProduct').innerHTML = table;
}

function addProduct() {
    let input = document.getElementById('input').value;
    if (input != '') {
        products.push(input);
        showAllProduct(products, products.length)
        document.getElementById('input').value = '';

    } else {
        alert('Please insert your product')
    }

}

function deleteProduct(index) {

    if (confirm('Do you want to delete this product?')) {
        products.splice(index, 1)
        showAllProduct(products, products.length)

    }
}

function editProduct(index) {
    let input = prompt('change your product name')
    products[index] = input;
    showAllProduct(products, products.length)
}