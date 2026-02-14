// Configuramos la fecha: 3 de marzo a las 7:00 PM (19:00 hrs)
// Nota: En JS, los meses empiezan en 0 (Enero = 0, Marzo = 2)
const startDate = new Date('2025-03-03T19:00:00').getTime();

function updateCounter() {
    const now = new Date().getTime();
    const distance = now - startDate; // Diferencia de tiempo

    // Cálculos matemáticos para convertir milisegundos a unidades de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Inyectamos los resultados en el HTML
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Ejecutar la función cada segundo
setInterval(updateCounter, 1000);

// Ejecutar una vez al cargar para evitar el retraso de 1 segundo

updateCounter();




const btnNo = document.querySelector("#btnNo");

btnNo.addEventListener("mouseover", function () {
    // Calculamos posiciones aleatorias dentro de la ventana
    const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
    const y = Math.random() * (window.innerHeight - btnNo.clientHeight);

    // Aplicamos las nuevas coordenadas
    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
});

// Opcional: Un mensaje lindo cuando logre darle al "Sí"
const btnSi = document.querySelector("#btnSi");
btnSi.addEventListener("click", function() {
    alert("iiiiii yo te quiero mas obviamente ❤️");
});
