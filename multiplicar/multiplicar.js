const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        console.log(`El valor introducido ${base} no es un numero`);
        return;
    }

    console.log(`=====================================`.green);
    console.log(`          Tabla de ${base}           `.green);
    console.log(`=====================================`.green);

    for (let i = 1; i <= limite; i++) {
        let fila = `${base} x ${i} = ${base*i}`;
        console.log(fila);
    }
}

let crearTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    listarTabla,
    crearTabla
}