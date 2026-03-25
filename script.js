function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

let cart = [];

// ADICIONAR COM TAMANHO
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

// ADICIONAR NORMAL
function addToCart(nome, preco) {
    cart.push({ nome, preco });
    updateCart();
}

// ATUALIZAR CARRINHO
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

// REMOVER ITEM
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// GERAR MENSAGEM
function gerarMensagem() {
    let mensagem = "🛒 *Pedido 444STREETWEAR*%0A%0A";

    cart.forEach(item => {
        mensagem += `- ${item.nome} (${item.preco} MT)%0A`;
    });

    const total = document.getElementById("total").textContent;

    mensagem += `%0A💰 Total: ${total} MT%0A%0A`;

    return mensagem;
}

// MODAL
function openModal(img1, img2 = "") {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("img1").src = img1;
    document.getElementById("img2").src = img2;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    let mensagem = "🛒 Pedido 444STREETWEAR\n\n";

    cart.forEach(item => {
        mensagem += `- ${item.nome} (${item.preco} MT)\n`;
    });

    const total = document.getElementById("total").textContent;

    mensagem += `\n💰 Total: ${total} MT\n\n`;
    mensagem += "💳 Pagamento:\n";
    mensagem += "M-Pesa: 845714494\n";
    mensagem += "e-Mola: 867335175\n";

    // 👉 ESTA LINHA É A MAIS IMPORTANTE
    window.location.href = `https://wa.me/258867335175?text=${encodeURIComponent(mensagem)}`;
}

function pagarMpesa() {
    if (cart.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    let mensagem = "🛒 Pedido 444STREETWEAR\n\n";

    cart.forEach(item => {
        mensagem += `- ${item.nome} (${item.preco} MT)\n`;
    });

    let total = document.getElementById("total").textContent;

    mensagem += `\n💰 Total: ${total} MT\n\n`;
    mensagem += "💳 Pagamento via M-Pesa\n";
    mensagem += "Número: 845714494\n";

    window.location.href = `https://wa.me/258867335175?text=${encodeURIComponent(mensagem)}`;
}

function pagarEmola() {
    if (cart.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    let mensagem = "🛒 Pedido 444STREETWEAR\n\n";

    cart.forEach(item => {
        mensagem += `- ${item.nome} (${item.preco} MT)\n`;
    });

    let total = document.getElementById("total").textContent;

    mensagem += `\n💰 Total: ${total} MT\n\n`;
    mensagem += "💳 Pagamento via e-Mola\n";
    mensagem += "Número: 867335175\n";

    window.location.href = `https://wa.me/258867335175?text=${encodeURIComponent(mensagem)}`;
}
