// Codigo sincrono vs asincrono
// Codigo sincrono
console.log('Inicio de programa');
console.log('Recibiendo solicitud');
console.log('Procesando solicitud');
console.log('Mostrando resultados');
console.log('Fin de programa');

// Codigo asincrono
console.log('Inicio de programa');
setTimeout(() => {
    console.log('Hola');
}, 2000);
console.log('Mundo');
console.log('Fin de programa');


// Uso de promesas en JS
const FuncionPromesa = (valueResolve) => {
    return new Promise((resolve, reject) => {
        if (valueResolve) {
            // En caso de resolverse la promesa
            resolve('La promesa se resolvió exitosamente');
        } else {
            // En caso de rechazarse la promesa
            reject('La promesa no se resolvió');
        }
    })
}

// Uso de la promesa
FuncionPromesa(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Uso de async y await
const FuncionAsync = async () => {
    try {
        // Esperara a que se resuelva la promesa para continuar
        const response = await FuncionPromesa(true);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

FuncionAsync();
