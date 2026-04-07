document.addEventListener('contextmenu', event => event.preventDefault());

    const buttons = document.querySelectorAll('.sound-button');
    const audio = document.getElementById('hover-audio');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                audio.volume = 0.25;
                audio.currentTime = 0;
                audio.play();
        });
    });


    
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    const lightImg = "lighticon.png"; 
    const darkImg = "darkicon.png";

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.src = (theme === 'dark') ? lightImg : darkImg;
    }

    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
       
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    });
});
                