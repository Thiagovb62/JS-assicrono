function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.random() * (max - min) + min;
}

function esperaAi(msg, temp, cb) {
  return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, temp);
  });
}
esperaAi('conexao com o BD', rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 5));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
      console.log('Exibe dados na tela.')
  })
  .catch(e=>{
      console.log('ERROR:', e);
  });

  console.log('Isso sera exibido amtes de qualquer promisse')