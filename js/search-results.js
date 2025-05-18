document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Параметры поиска из URL
    const urlParams = new URLSearchParams(window.location.search);
    const region = urlParams.get('region') || 'Москва';
    const date = urlParams.get('date') || new Date().toISOString().split('T')[0];
    const adults = urlParams.get('adults') || 10;
    const children = urlParams.get('children') || 5;

    // Заголовок с параметрами поиска
    document.querySelector('h1').textContent = `Локации в ${region} на ${formatDate(date)} (${adults} взрослых, ${children} детей)`;

    // Моковые данные локаций
    const locations = [
        {
            id: 1,
            region: 'Москва',
            name: 'Детский центр "Волшебный замок"',
            address: 'ул. Праздничная, 15',
            date: date,
            freeZones: 3,
            capacity: 25,
            price: 15000,
            image: 'images/location1.jpg',
            description: 'Просторный зал с тематическим оформлением, идеально подходит для дней рождений'
        },
        {
            id: 2,
            region: 'Москва',
            name: 'Кафе "Сладкоежка"',
            address: 'пр. Детский, 42',
            date: date,
            freeZones: 1,
            capacity: 15,
            price: 10000,
            image: 'images/location2.jpg',
            description: 'Уютное кафе с детским меню и игровой зоной'
        },
        {
            id: 3,
            region: 'Москва',
            name: 'Развлекательный комплекс "Радуга"',
            address: 'ул. Веселая, 7',
            date: date,
            freeZones: 5,
            capacity: 40,
            price: 20000,
            image: 'images/location3.jpg',
            description: 'Большой комплекс с батутами, горками и отдельной зоной для праздников'
        }
    ];

    // Отображение результатов
    const resultsGrid = document.getElementById('resultsGrid');
    
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.innerHTML = `
            <div class="location-image" style="background-image: url('${location.image}')"></div>
            <div class="location-content">
                <h3>${location.name}</h3>
                <p class="location-address">${location.address}, ${location.region}</p>
                <p class="location-date">Дата: ${formatDate(location.date)}</p>
                <p class="location-zones">Свободных зон: <strong>${location.freeZones}</strong></p>
                <p class="location-capacity">Вместимость: до ${location.capacity} человек</p>
                <p class="location-price">Цена: ${location.price.toLocaleString()} руб.</p>
                <p class="location-desc">${location.description}</p>
                <a href="zone-selection.html?location=${location.id}&date=${date}&adults=${adults}&children=${children}" class="btn">Выбрать зону</a>
            </div>
        `;
        resultsGrid.appendChild(locationCard);
    });

    // Функция форматирования даты
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    }

    // Обработка фильтров
    document.getElementById('sort').addEventListener('change', function() {
        // Здесь должна быть логика сортировки
        console.log('Сортировка изменена:', this.value);
    });

    document.getElementById('capacity').addEventListener('change', function() {
        // Здесь должна быть логика фильтрации
        console.log('Фильтр по вместимости изменен:', this.value);
    });
});