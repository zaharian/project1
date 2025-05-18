document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Инициализация шагов
    const stepsData = [
        { icon: '📅', title: 'Выберите дату', desc: 'Укажите удобный день для праздника' },
        { icon: '👨‍👩‍👧‍👦', title: 'Укажите гостей', desc: 'Сколько детей и взрослых будет' },
        { icon: '🏰', title: 'Выберите локацию', desc: 'Подберите подходящее место' },
        { icon: '🎪', title: 'Добавьте услуги', desc: 'Аниматоры, питание и др.' },
        { icon: '✅', title: 'Подтвердите бронь', desc: 'Оплатите онлайн' }
    ];

    const stepsContainer = document.querySelector('.steps-container');
    stepsData.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = `
            <div class="step-icon">${step.icon}</div>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
        `;
        stepsContainer.appendChild(stepElement);
    });

    // Инициализация отзывов
    const reviewsData = [
        { text: '"Отличная организация, дети в восторге!"', author: 'Ольга' },
        { text: '"Все прошло идеально, спасибо!"', author: 'Иван' },
        { text: '"Лучший детский праздник, который мы устраивали!"', author: 'Анна' }
    ];

    const reviewsContainer = document.querySelector('.reviews');
    reviewsData.forEach(review => {
        const reviewElement = document.createElement('p');
        reviewElement.innerHTML = `${review.text} - <strong>${review.author}</strong>`;
        reviewsContainer.appendChild(reviewElement);
    });

    // Инициализация акций
    const promoData = [
        { 
            image: 'images/promo1.jpg',
            title: 'Счастливые часы',
            desc: 'Забронируйте утро — получите аниматора в подарок!',
            link: '#'
        },
        { 
            image: 'images/promo2.jpg',
            title: 'Скидка 20%',
            desc: 'При заказе от 20 человек скидка на все услуги',
            link: '#'
        },
        { 
            image: 'images/promo3.jpg',
            title: 'День рождения',
            desc: 'Закажите праздник в день рождения — торт в подарок',
            link: '#'
        }
    ];

    const promoGrid = document.getElementById('promoGrid');
    promoData.forEach(promo => {
        const promoCard = document.createElement('div');
        promoCard.className = 'promo-card';
        promoCard.innerHTML = `
            <div class="promo-image" style="background-image: url('${promo.image}')"></div>
            <div class="promo-content">
                <h3>${promo.title}</h3>
                <p>${promo.desc}</p>
                <a href="${promo.link}" class="btn">Подробнее</a>
            </div>
        `;
        promoGrid.appendChild(promoCard);
    });

    // Обработка формы поиска
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const region = document.getElementById('region').value;
        const date = document.getElementById('date').value;
        const adults = document.getElementById('adults').value;
        const children = document.getElementById('children').value;
        
        // Здесь должна быть логика обработки поиска
        alert(`Поиск локаций:\nРегион: ${region}\nДата: ${date}\nВзрослых: ${adults}\nДетей: ${children}`);
        
        // Перенаправление на страницу результатов (заглушка)
        // window.location.href = 'search-results.html';
    });

    // Обработка формы подписки
    const subscribeForm = document.getElementById('subscribeForm');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Здесь должна быть логика подписки
        alert(`Спасибо за подписку! На адрес ${email} будут приходить эксклюзивные предложения.`);
        this.reset();
    });

    // Обработка кнопки героя
    document.getElementById('hero-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.search-form').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});