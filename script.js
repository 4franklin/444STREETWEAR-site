function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

let cart = [];

function addToCart(nome, preco) {
    cart.push({ nome, preco });
    updateCart();
    
function updateCart() {
    const lista = document.getElementById("cart-items");
    const total = document.getElementById("total");

    lista.innerHTML = "";
    let soma = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.nome} - ${item.preco} MT
            <button onclick="removeItem(${index})">❌</button>
        `;

        lista.appendChild(li);
        soma += item.preco;
    });

    total.textContent = soma;
}

function checkout() {
    let mensagem = "🛒 *Pedido 444STREETWEAR*%0A%0A";

    cart.forEach(item => {
        mensagem += `- ${item.nome} (${item.preco} MT)%0A`;
    });

    const total = document.getElementById("total").textContent;

    mensagem += `%0A💰 Total: ${total} MT`;

    window.open(`https://wa.me/258867335175?text=${mensagem}`);
}

function openModal(img1, img2 = "") {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("img1").src = img1;
    document.getElementById("img2").src = img2;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function addToCartComTamanho(btn, nome) {
    const item = btn.parentElement;
    const select = item.querySelector(".tamanho");

    if (!select.value) {
        alert("Escolha o tamanho primeiro!");
        return;
    }

    let preco = select.value === "Regular" ? 950 : 1500;

    cart.push({
        nome: nome + " (" + select.value + ")",
        preco: preco
    });

    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
