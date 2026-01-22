function agendarCita(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let servicio = document.getElementById("servicio").value;
    let fecha = document.getElementById("fecha").value;

    document.getElementById("mensaje").innerHTML =
        "Gracias " + nombre + ", tu cita ha sido agendada correctamente 💖";

    document.getElementById("imagenConfirmacion").style.display = "block";

    let texto =
        "Hola, nueva cita agendada:%0A" +
        "Nombre: " + nombre + "%0A" +
        "Servicio: " + servicio + "%0A" +
        "Fecha: " + fecha;

    
    let numero = "524621561138";

    let url = "https://wa.me/" + numero + "?text=" + texto;

    window.open(url);
}