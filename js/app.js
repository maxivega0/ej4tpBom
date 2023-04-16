function obtenerFecha() {
    let fechaActual = new Date();
    let fecha = document.querySelector("#fecha"),
    horaMin = document.querySelector("#horamin"),
    segundos = document.querySelector("#segundos");
    const diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const mesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    fecha.innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${mesAño[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    let horaActual = fechaActual.getHours(),
    minutosActuales = fechaActual.getMinutes(),
    segundosActuales = fechaActual.getSeconds();
    if(segundosActuales<10){
        segundosActuales = '0'+segundosActuales;
    }
    if(minutosActuales<10){
        minutosActuales = '0'+minutosActuales;
    }
    if(horaActual<10){
        horaActual = '0'+horaActual;
    }
    horaMin.innerHTML = `${horaActual}:${minutosActuales}:`;
    segundos.innerHTML = `${(horaActual>=12) ?`<p>PM<br>${segundosActuales}</p>` : `<p>AM<br>${segundosActuales}</p>` }`;
    
}

setInterval(obtenerFecha,1000)