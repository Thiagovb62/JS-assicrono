function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.random() * (max - min) + min;
}

function esperaAi(msg, temp, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("BAD VALUE");
                return;
            }
            resolve(msg.toUpperCase() + " - Passei ns promise");
        }, temp);
    });
}

const promises = [
    "primeiro valor",
    esperaAi("promise1", 3000),
    esperaAi("promise2", 500),
    esperaAi("promise3", 1000),
    //esperaAi(1000, 1000),
    "outro valor",
];

const promises2 = [
    esperaAi(1000, rand(1, 5)),
    esperaAi("promise1", rand(1, 5)),
    esperaAi("promise2", rand(1, 5)),
    esperaAi("promise3", rand(1, 5)),
];

Promise.all(promises) // retorna todas as promises ,porem no caso de erro nao retorna as outras
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (err) {
        console.log(err);
    });

Promise.race(promises2) // retorna a promise que é resolvida mais rápido,porem caso caia no erro nao retorna as outras.
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (err) {
        console.log(err);
    });

function baixarPagina() {
    const Emcache = true;

    if (Emcache) {
        return Promise.resolve('Pagina em cachê');
    } else {
        return esperaAi('Baixando pagina', 3000);
    }
}
baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
