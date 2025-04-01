var area = window.document.getElementById("area")
area.addEventListener('click', () => {
    var area = window.document.getElementById("area")
    area.innerText = "Clicou!"
    area.style.background = "red"
})
area.addEventListener('mouseenter', () => {
    var area = window.document.getElementById("area")
    area.innerText = "Entrou!"
})
area.addEventListener('mouseout', () => {
    var area = window.document.getElementById("area")
    area.innerText = "Saiu!"
    area.style.background = "green"
})