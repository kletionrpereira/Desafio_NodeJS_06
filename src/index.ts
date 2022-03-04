
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 const readline = require('readline-sync');
 const db = require('../models/index.js')
 
 dotenv.config();

 
 if (!process.env.PORT) {
	 process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();
 
 
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 
 
 app.listen(PORT, async () => {
	 console.log(`Listening on port ${PORT}`);
 
	 const qtd = parseInt(readline.question('Qual a quantidade de alunos? '));
	 
	 for (let i = 0; i < qtd; i++) {
		  
		 const nome = readline.question('Qual o nome do aluno? ');
 
		 const nota = parseFloat(readline.question('Qual a nota do aluno? '));
 
		 
		 await db.Aluno.create({nome: nome, nota: nota});
	 }
 
 });
