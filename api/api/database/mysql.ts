import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Conexão com banco MySQL iniciada... 🌐'))
  .catch((err) =>
    console.log(
      'Falha na Conexão com banco MySQL... 🌐' + '' + 'Erro: ' + err.message
    )
  );
