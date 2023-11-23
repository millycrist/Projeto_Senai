function addToCart(productName) {

    let cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
    cart.push(productName);
    sessionStorage.setItem('cart', JSON.stringify(cart));


    displayCart();
}

function clearCart() {

    sessionStorage.removeItem('cart');


    displayCart();
}

function displayCart() {

    let cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}


window.onload = function() {
    displayCart();
};
function finalizarCompra() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart && cart.length > 0) {
        console.log('Itens no Carrinho:');
        cart.forEach(item => {
            console.log(item.name + " - " + item.price);
        });

        alert('Compra realizada com sucesso! Estamos processando seu pedido.');
    } else {
        alert('Carrinho vazio. Adicione itens antes de finalizar a compra.');
    }
}
