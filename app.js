//Requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');


const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');


let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.green))
            .catch(err => console.log(colors.red(err)))
        break;
    default:
        console.log(colors.red('Comando erroneo'));
}