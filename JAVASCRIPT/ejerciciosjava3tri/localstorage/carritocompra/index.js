const productos = [
    {
        id: 1,
        nombre: "Jamón Ibérico",
        descripcion: "Jamón de bellota curado de forma tradicional.",
        precio: 25.00,
        imagen: "Jamón_bellota_Muñana.jpeg"
    },
    {
        id: 2,
        nombre: "Chorizo Ibérico",
        descripcion: "Chorizo ibérico con pimentón de la Vera.",
        precio: 8.50,
        imagen: "chor_iberi.jpg"
    },
    {
        id: 3,
        nombre: "Salchichón Ibérico",
        descripcion: "Salchichón curado con especias naturales.",
        precio: 7.90,
        imagen: "salchichon-iberico-condimento-1.jpg"
    },
    {
        id: 4,
        nombre: "Lomo Embuchado",
        descripcion: "Lomo de cerdo ibérico embuchado.",
        precio: 12.00,
        imagen: "lomo_embu.jpg"
    }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || {};
function Productos() {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-producto">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>${producto.precio.toFixed(2)} €</strong></p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button> `;
        contenedor.appendChild(div);
    });
}
function Carrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    let total = 0;
    for (const id in carrito) {
        const prod = productos.find(p => p.id == id);
        const cantidad = carrito[id];
        const subtotal = prod.precio * cantidad;
        total += subtotal;
        const li = document.createElement('li');
        li.innerHTML = `
            ${prod.nombre} x${cantidad} = ${subtotal.toFixed(2)} €
            <button onclick="agregarAlCarrito(${prod.id})">+</button>
            <button onclick="quitarDelCarrito(${prod.id})">-</button> `;
        lista.appendChild(li);
    }
    if (total > 0) {
        const totalLi = document.createElement('li');
        totalLi.innerHTML = `<strong>Total: ${total.toFixed(2)} €</strong>`;
        lista.appendChild(totalLi);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
function agregarAlCarrito(id) {
    carrito[id] = (carrito[id] || 0) + 1;
    Carrito();
}
function quitarDelCarrito(id) {
    if (carrito[id]) {
        carrito[id]--;
        if (carrito[id] === 0) delete carrito[id];
    }
    Carrito();
}
function vaciarCarrito() {
    carrito = {};
    Carrito();
}
document.addEventListener('DOMContentLoaded', () => {
    Productos();
    Carrito();
});


