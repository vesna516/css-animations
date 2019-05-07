const dayNightWrapper = document.getElementById('dayNightWrapper');
const dayNightSwitcher = document.getElementById('dayNightSwitcher');
const dayNightMoon = document.getElementById('dayNightMoon');
const dayNightSun = document.getElementById('dayNightSun');
const dayNightStars = document.getElementById('dayNightStars');

dayNightSwitcher.addEventListener('click', () => {
    dayNightWrapper.classList.toggle('active');
    
    if(dayNightWrapper.classList.contains('active')) {
        dayNightMoon.classList.remove('day-night__moon_day');
        dayNightSun.classList.remove('day-night__sun_day');
        dayNightStars.classList.remove('day-night__stars_day');
    } else {
        dayNightMoon.classList.add('day-night__moon_day');
        dayNightSun.classList.add('day-night__sun_day');
        dayNightStars.classList.add('day-night__stars_day');
    }
});