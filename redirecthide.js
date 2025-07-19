document.getElementById('redirect-btn').onclick = function() {
    document.getElementById('redirect-btn').style.display = 'none';
    document.getElementById('loading-animation').style.display = 'block';
    document.querySelector('.ontopofredirect').style.display = 'none';
    document.querySelector('header').style.display = 'none'; 
    
    setTimeout(function() {
        window.location.href = 'https://kolgotki-dp.prom.ua/ua/';
    }, 1200); 
};