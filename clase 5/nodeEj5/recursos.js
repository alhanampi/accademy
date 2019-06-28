let info = {//la variable suelta creaba una copia, por eso tuve que ponerla en un objeto. Por eso las variables deben estar siempre en objetos
    contadorVisitas: 0, //para ver cuantas visitas hay
    incContador: function () {
        this.contadorVisitas++ //puedo llevar esto al otro lado, entonces en vez de ponerlo en server, paso la funcion
    }
}

//tener 2 rutas:
const getWebPage1 = () => 
    `
        <h1 style="color: maroon"> 
            La hora actual es <span style="color:purple"> ${new Date().toLocaleString()} </span>
        <b> Esta página ha sido visitada ${info.contadorVisitas} veces </b>

        </h1>
    `;

const getWebPage2 = () => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    
        <style>
            body {
                background-color: burlywood;
                margin: 50px;
            }
    
            h1 {
                color: sienna;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 48px;
    
            }
    
            p {
                color: sienna;
                font-size: 24px;
            }
    
        </style>
    </head>
    <body>
    
        <h1>Página de prueba para Node</h1>
        <b> Esta página ha sido visitada ${info.contadorVisitas} veces </b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit rem exercitationem provident laborum at corrupti alias similique, minus nam magnam aliquam vitae perferendis minima soluta, facilis non tempora porro.</p>

        <p><i>${new Date().toLocaleString()} </i></p>
        
        <script> 
        var arr = [1, 2, 3, 4]
            document.write(arr)
        </script>

    </body>
    </html>
    `;

    //exporta un objeto. Hay que poner las funciones así pueden ser requeridas en el otro archivo:
    module.exports = {
        getWebPage1, //es una clave que se llama igual a su valor así que se puede poner solo el valor
        getWebPage2,
        info
    }