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
async function execute() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);

    console.log("Terminamos na ", fase3);
  } catch (error) {
    console.log(error);
  }
}
execute();

//pending -> pendente
// fulfilled -> resolvida
//rejected -> rejeitada
