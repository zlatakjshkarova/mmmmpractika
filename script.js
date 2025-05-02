let savedd = localStorage.getItem('dd')
if (savedd) {
    document.body.className = savedd;
}

function tggledd() {
    let currentdd = document.body.className
    let nevdd = currentdd === 'light' ? 'dark' : 'light';
    document.body.className = nevdd
    localStorage.setItem('theme', nevdd)
}