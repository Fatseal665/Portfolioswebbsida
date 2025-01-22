document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement('button');
    themeToggle.style.marginLeft = 'auto';
    themeToggle.style.padding = '8px 12px';
    themeToggle.style.marginLeft = '16px';
    themeToggle.style.border = 'none';
    themeToggle.style.backgroundColor = '#fff';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.borderRadius = '5px';

    const header = document.querySelector('header nav');
    header.appendChild(themeToggle);

    const heroImage = document.getElementById('hero-image');
    const pageName = document.body.id; // Hämta id från <body>

    // Hero images, light/dark mode
    const heroImages = {
        home: {
            dark: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa5%2Ffa%2F22%2Fa5fa220cefe27610626fa660a0def0e2.jpg&f=1&nofb=1&ipt=a9553e79f41ce94e5e184320a23324bc8b7bf7667c9043f2383cff0460c3f7c5&ipo=images",
            light: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3856872.jpg&f=1&nofb=1&ipt=b7d5b4dafeb4554a313a1def80e1de9e23f6aa27afd9cfb5660ea76d05d9935c&ipo=images",
        },
        abilities: {
            dark: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffile%2F2440x1440-programming-background-2440-x-1440-tafu77wspp7j3is4.jpg&f=1&nofb=1&ipt=5febde748787c0f0eb5309e397e2ac6bd7c55faaf1a5296dcb7e3b6641297416&ipo=images",
            light: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F70373%2Fraw%2F0123098e5f5a4672b33ca99b75582e18-abstract-orange-tech-background.jpg&f=1&nofb=1&ipt=7dad2e89b0e6eae7d20e02ee7f82c2f98f3a3e032201c2d4e1f9cddf5363f843&ipo=images",
        },
        about: {
            dark: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa5%2Ffa%2F22%2Fa5fa220cefe27610626fa660a0def0e2.jpg&f=1&nofb=1&ipt=a9553e79f41ce94e5e184320a23324bc8b7bf7667c9043f2383cff0460c3f7c5&ipo=images",
            light: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3856872.jpg&f=1&nofb=1&ipt=b7d5b4dafeb4554a313a1def80e1de9e23f6aa27afd9cfb5660ea76d05d9935c&ipo=images",
        },
        contact: {
            dark: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2044727.jpg&f=1&nofb=1&ipt=5ca5c6f4ceb0cb2022c49083fdc55167d9cbbc1113ee2484ecd6875153ac056f&ipo=images",
            light: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffile%2Fred-white-orange-platonic-solids-5u45bi97ue1dfrli.jpg&f=1&nofb=1&ipt=32cb2bce9d91e42e078b2c9250f36c2b19929c6ca127c0c8fef68a7e6bd494db&ipo=images",
        },
    };

    // Kontrollera om användaren redan har valt ett tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = 'Dark Mode';
    } else {
        themeToggle.textContent = 'Light Mode';
    }

    // Uppdatera hero-bilden vid sidladdning baserat på temat
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    if (heroImage && pageName && heroImages[pageName]) {
        heroImage.src = heroImages[pageName][currentTheme];
    }

    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        themeToggle.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';

        // Uppdatera hero-bildens källa beroende på temat
        if (heroImage && pageName && heroImages[pageName]) {
            heroImage.src = isLightMode ? heroImages[pageName].light : heroImages[pageName].dark;
        }

        // Spara temat i localStorage
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });
});