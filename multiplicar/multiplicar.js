//requireds
const fileSystem = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('========================'.blue);
    console.log(`==Tabla de ${base} hasta ${limite}==`.bgBlue);
    console.log('========================'.blue);

    for (let i = 1; i <= limite; i++) {

        console.log(`   ${base} * ${i} = ${base * i}`.blue);
    }


    console.log('========FIN============='.blue);

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let dato = '';
        for (let i = 1; i <= limite; i++) {

            dato += `${base} * ${i} = ${base * i}\n`;
        }



        const data = new Uint8Array(Buffer.from(dato));
        fileSystem.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt `);
            }
        });


    });

}

module.exports = {
    crearArchivo,
    listarTabla
}