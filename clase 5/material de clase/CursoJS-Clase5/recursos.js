const getWebPage1 = () => 
    `
        <h1 style="color:red;">
            La fecha es <span style="color:blue;">${new Date().toLocaleString()}</span>
        </h1>
    `;

let info = {
    contVisitas : 0,
    incContador : function() {
        this.contVisitas++;
    }
}

const getWebPage2 = () => 
`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Pagina 1</title>
        <style>
            body {
                background-color: brown;
            }
            h1 {
                color: orange;
            }
            p {
                color: powderblue;
            }
        </style>
    </head>
    <body>
        
        <h1>Página desde el servidor</h1>
        <b style="color:yellow;">Contador de visitas: ${info.contVisitas}</b>
        <i style="color:pink;">${new Date().toLocaleString()}</i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Fuga illum velit consectetur ut, obcaecati nam quisquam! Unde quod sit laborum temporibus veniam porro totam, quia ipsa tempora hic.</p>

        <script>
            var arr = [1,2,3,4,5];
            document.write(arr);
        </script>
    </body>
    </html>
`
;

module.exports = {
    getWebPage1,
    getWebPage2,
    info   
}
