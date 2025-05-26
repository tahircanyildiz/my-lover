let heartCount = 0;
let flowerCount = 0;

// Tıklama ile kalp ve çiçek oluştur
document.addEventListener('click', function(e) {
    // Kalp oluştur
    createClickHeart(e.clientX, e.clientY);
    
    // Çiçek oluştur (her 3. tıklamada)
    if (heartCount % 3 === 0) {
        createClickFlower(e.clientX + 30, e.clientY - 30);
    }
});

function createClickHeart(x, y) {
    heartCount++;
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    
    const heartEmojis = ['💖', '💕', '💗', '💘', '❤️', '💝'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    // Animasyon
    let opacity = 1;
    let scale = 1;
    let moveY = 0;
    
    const animation = setInterval(() => {
        opacity -= 0.02;
        scale += 0.02;
        moveY -= 2;
        
        heart.style.opacity = opacity;
        heart.style.transform = `scale(${scale}) translateY(${moveY}px)`;
        
        if (opacity <= 0) {
            clearInterval(animation);
            heart.remove();
        }
    }, 50);
}

function createClickFlower(x, y) {
    flowerCount++;
    const flower = document.createElement('div');
    flower.className = 'flower-particle';
    
    const flowerEmojis = ['🌸', '🌹', '🌺', '🌻', '🌷', '💐', '🌼'];
    flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';
    
    document.body.appendChild(flower);
    
    // Animasyon
    let opacity = 1;
    let rotation = 0;
    let moveY = 0;
    
    const animation = setInterval(() => {
        opacity -= 0.015;
        rotation += 5;
        moveY -= 1.5;
        
        flower.style.opacity = opacity;
        flower.style.transform = `rotate(${rotation}deg) translateY(${moveY}px)`;
        
        if (opacity <= 0) {
            clearInterval(animation);
            flower.remove();
        }
    }, 60);
}

// Otomatik yüzen kalpler
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '💖';
    
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(heart);
    
    let posY = window.innerHeight;
    let posX = parseFloat(heart.style.left);
    let sway = 0;
    
    const float = setInterval(() => {
        posY -= 2;
        sway += 0.1;
        
        heart.style.top = posY + 'px';
        heart.style.left = (posX + Math.sin(sway) * 30) + 'px';
        
        if (posY < -100) {
            clearInterval(float);
            heart.remove();
        }
    }, 50);
}

// Otomatik yüzen çiçekler
function createFloatingFlower() {
    const flower = document.createElement('div');
    flower.className = 'floating-flower';
    
    const flowers = ['🌸', '🌹', '🌺', '🌷'];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(flower);
    
    let posY = window.innerHeight;
    let rotation = 0;
    
    const float = setInterval(() => {
        posY -= 1.5;
        rotation += 2;
        
        flower.style.top = posY + 'px';
        flower.style.transform = `rotate(${rotation}deg)`;
        
        if (posY < -100) {
            clearInterval(float);
            flower.remove();
        }
    }, 60);
}

// Otomatik elementler oluştur
setInterval(createFloatingHeart, 3000);
setInterval(createFloatingFlower, 4000);

// İlk elementleri oluştur
for(let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 1000);
    setTimeout(createFloatingFlower, i * 1500);
}