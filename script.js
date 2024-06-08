document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-product-form");
    const productsList = document.getElementById("products-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        const description = document.getElementById("product-description").value;

        const productItem = document.createElement("li");
        productItem.innerHTML = `<h3>${name}</h3><p>Cena: ${price} PLN</p><p>${description}</p>`;

        productsList.appendChild(productItem);

        form.reset();
    });
});

