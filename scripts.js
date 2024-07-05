const mobiles = [
    {company: 'Apple',model: 'iPhone 14',price: 350000,rating: 4.9,ram: '6GB',rom: '256GB',imageUrl: 'images/iphone14.jpeg'},
    { company: 'Samsung', model: 'Galaxy S21', price: 270000, rating: 4.5, ram: '8GB', rom: '128GB', imageUrl: 'images/S21.jpeg' },
    { company: 'Apple', model: 'iPhone 13', price: 300000, rating: 4.7, ram: '6GB', rom: '128GB', imageUrl: 'images/iphone13.jpeg' },
    { company: 'OnePlus', model: 'OnePlus 9', price: 80000, rating: 4.4, ram: '8GB', rom: '128GB', imageUrl: 'images/oneplus9.jpeg' },
    { company: 'Samsung', model: 'Galaxy S23', price: 300000, rating: 4.5, ram: '8GB', rom: '128GB', imageUrl: 'images/s23.jpeg' },
    {company: 'Google',model: 'Pixel 6',price: 90000,rating: 4.2,ram: '8GB',rom: '128GB',imageUrl: 'images/pixel6.jpeg'},
    {company: 'Huawei',model: 'P30 Pro',price: 75000,rating: 4.6,ram: '8GB',rom: '256GB',imageUrl: 'images/p30.jpeg'},
    {company: 'Xiaomi',model: 'Redmi Note 10',price: 60000,rating: 4.3,ram: '4GB',rom: '64GB',imageUrl: 'images/redmi.jpeg'},
    {company: 'Oppo',model: 'Find X3',price: 67000,rating: 4.9,ram: '12GB',rom: '512GB',imageUrl: 'images/oppo.jpeg'},
    {company: 'Vivo',model: 'V21',price: 55000,rating: 4.4,ram: '8GB',rom: '128GB',imageUrl: 'images/vivo.jpeg'}
    
];

function displayMobiles(mobiles) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';
    mobiles.forEach(mobile => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${mobile.imageUrl}" alt="${mobile.model} ">
            <h3>${mobile.model}</h3>
            <p>Price: PKR ${mobile.price}</p>
            <p>Rating: ${mobile.rating} ⭐</p>
            <p>RAM: ${mobile.ram}</p>
            <p>ROM: ${mobile.rom}</p>
            <button onclick="showProductDetails('${mobile.model}')">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

function populateDropdown() {
    const dropdown = document.getElementById('company-filter');
    const companies = [];
    
    mobiles.forEach(mobile => {
        if (!companies.includes(mobile.company)) {
            companies.push(mobile.company);
        }
    });
    
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        dropdown.appendChild(option);
    });
}

function filterByCompany() {
    const selectedCompany = document.getElementById('company-filter').value;
    if (selectedCompany === 'all') {
        displayMobiles(mobiles);
    } else {
        const filteredMobiles = mobiles.filter(mobile => mobile.company === selectedCompany);
        displayMobiles(filteredMobiles);
    }
}

function showProductDetails(model) {
    const mobile = mobiles.find(m => m.model === model);
    const modal = document.getElementById('product-modal');
    const details = document.getElementById('product-details');
    details.innerHTML = `
        <h2>${mobile.model}</h2>
        <img src="${mobile.imageUrl}" alt="${mobile.model}" height="180px">
        <p>Company: ${mobile.company}</p>
        <p>Price: PKR ${mobile.price}</p>
        <p>Rating: ${mobile.rating} ⭐</p>
        <p>RAM: ${mobile.ram}</p>
        <p>ROM: ${mobile.rom}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

function buyProduct() {
    alert('Thank you for your purchase!');
}

window.onload = () => {
    displayMobiles(mobiles);
    populateDropdown();
};
