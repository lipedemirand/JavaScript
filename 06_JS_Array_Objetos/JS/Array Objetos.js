// Objetos 
let pessoa = {
    firstName: 'Jorel',
    idade: 10,
    corDosOlhos: 'preto',
    hobbies: ['música', 'filmes', 'esportes'],
    endereco: {
        rua: 'Rua do bolos',
        numero: 'São Paulo',
        estado: 'SP',
    },    
};

console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.latNmae, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereco.cidade);

// Atribuição via  desentruturação
console.clear();

const {
    firstName,
    latNmae,
    endereco: { cidade},
} = pessoa;
console. log(`${firstName} ${latNmae} é de ${cidade}`);

// Array de objetos 
console.clear();
const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Emcontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];

console.log(tarefas);
console.log(tarefas[1].texto);

// Transformar um array em JSO
console.log(JSON,stringify(tarefas));