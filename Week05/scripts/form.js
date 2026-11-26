const products = [
    { name: "Weight Loss Program" },
    { name: "Muscle Building Program" },
    { name: "Weight Maintenance Program" },
    { name: "Juices" },
    { name: "Turmeric Shots" },
    { name: "Protein Breakfasts" },
];

const productSelect = document.getElementById("product");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

