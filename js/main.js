const translations = {
    en: {
        home: "Home",
        portfolio: "Portfolio",
        myStory: "My Story",
        commissions: "Commissions",
        contact: "Contact",
        news: "News",
        tagline: "Abstract art that speaks to the soul",
        intro: "Elias van Artelias creates unique abstract paintings for people who love art that stands out. From humble beginnings drawing lines at age ten, his work now graces exhibitions, public spaces, and private collections.",
        viewPortfolio: "View Portfolio",
        getCommissions: "Get Commissions"
    },
    nl: {
        home: "Start",
        portfolio: "Portfolio",
        myStory: "Mijn Verhaal",
        commissions: "Commissies",
        contact: "Contact",
        news: "Nieuws",
        tagline: "Abstracte kunst die tot de verbeelding spreekt",
        intro: "Elias van Artelias maakt unieke abstracte schilderijen voor mensen die van opvallende kunst houden. Vanaf zijn eerste lijnen op tienjarige leeftijd, siert zijn werk nu tentoonstellingen, openbare ruimtes en privécollecties.",
        viewPortfolio: "Bekijk Portfolio",
        getCommissions: "Bestel een Commissies"
    }
};

let currentLang = 'en';
const switchBtn = document.getElementById('lang-switch');

switchBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'nl' : 'en';
    switchBtn.textContent = currentLang === 'en' ? 'NL' : 'EN';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
});
