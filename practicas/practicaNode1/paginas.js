let contador = {
    contadorVisitas: 0,
    cont: function() {
        this.contadorVisitas++;
    }
}

const webpage1 = () => 
    `
    <h1> Pagina de prueba1 </h1>
    <p style="color: blue"> Hora actual ${new Date().toLocaleString()} </p>
    <p> Cantidad de clicks: ${contador.contadorVisitas} </p>
    `;


    const webpage2 = () => 
    `
    <h1> Pagina de prueba2 </h1>
    <p style="color: red"> Hora actual ${new Date().toLocaleString()} </p>
    <p> Cantidad de clicks: ${contador.contadorVisitas} </p>
    `;

module.exports = {
    webpage1,
    webpage2, 
    contador
}
