const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');

//Insira aqui o código da tarefa proposta!
//Apesar de não ser a melhor forma de manter um projeto, utilize apenas esse arquivo. Estamos testando!






process.on('SIGINT', ()=> {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    })
})