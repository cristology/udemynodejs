//Requireds
//const fs = require('fs');
//const fs = require('express'); //expansiones creadas no nativas de node
//const fs = require('./fs'); //comienza con ./ o ../ existen dentro de nuestro proyecto

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { listarTabla, crearTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Comando Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Comando Crear');
        crearTabla(argv.base, argv.limite).then(archivo => {
            console.log(`El archivo ` + colors.green(archivo) + ` ha sido creado!`);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');

}