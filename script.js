let abtBtn = document.querySelector('.abt-me-btn');
let abtScreen = document.querySelector('.about-me');
let projScreen = document.querySelector('.projects');
let testScreen = document.querySelector('.tests');
let ctaScreen = document.querySelector('.cta');
let hero = document.querySelector('.hero');

// start screen
hero.style.display = 'block';
abtScreen.style.display = 'none';
projScreen.style.display = 'none';
testScreen.style.display = 'none';
ctaScreen.style.display = 'none';
let homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener('click', function () {
    hero.style.display = 'block';
    abtScreen.style.display = 'none';
    projScreen.style.display = 'none';
    testScreen.style.display = 'none';
    ctaScreen.style.display = 'none';
})

// abt me screen
abtBtn.addEventListener('click', function () {
    abtScreen.style.display = 'block';
    hero.style.display = 'none';
    projScreen.style.display = 'none';
    testScreen.style.display = 'none';
    ctaScreen.style.display = 'none';
})

// projects screen
let projectsBtn = document.querySelector('.proj-btn');
let projectsScreen = document.querySelector('.projects');
projectsBtn.addEventListener('click', function () {
    projectsScreen.style.display = 'block';
    hero.style.display = 'none';
    abtScreen.style.display = 'none';
    testScreen.style.display = 'none';
    ctaScreen.style.display = 'none';
})

// testimonials screen
let testBtn = document.querySelector('.test-btn');
testBtn.addEventListener('click', function () {
    testScreen.style.display = 'block';
    hero.style.display = 'none';
    abtScreen.style.display = 'none';
    projScreen.style.display = 'none';
    ctaScreen.style.display = 'none';
})

let ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', function() {
    ctaScreen.style.display = 'block';
    testScreen.style.display = 'none';
    hero.style.display = 'none';
    abtScreen.style.display = 'none';
    projScreen.style.display = 'none';
})