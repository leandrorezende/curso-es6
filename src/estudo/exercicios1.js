export function exercicio01() {
    console.log("------------ Exercício 01 --------------");

    class Usuario {
        constructor(email, senha) {
            this.email = email;
            this.senha = senha;
        }

        isAdmin() {
            return this.admin || false;
        }
    }

    class Admin extends Usuario {
        constructor(email, senha) {
            super(email, senha);
            this.admin = true;
        }
    }

    const user1 = new Usuario('email@teste.com', 'senha123');
    const user2 = new Admin('email@teste.com', 'senha123');
    console.log(`User1 is admin? ${user1.isAdmin()}`) // false
    console.log(`User2 is admin? ${user2.isAdmin()}`) // true
}

export function exercicio02() {
    console.log("------------ Exercício 02 --------------");

    const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    const usersAge = [];
    const ages = usuarios.map(u => usersAge.push(u.idade));
    console.log(`Idade dos usuários ${ages}`);
    console.log(usuarios.filter(u => u.idade > 18 && u.empresa === "Rocketseat"));
    console.log(usuarios.find(u => u.empresa === "Google"));
    console.log(usuarios.map(u => { u.idade *= 2; return u; }).filter(u => u.idade <= 50));
}

export function exercicio03() {
    console.log("------------ Exercício 03 --------------");

    //3,1
    const arr = [1, 2, 3, 4, 5];
    console.log(`New Array  ${arr.map(i => i += 10)}`);

    //3,2
    const usuario = { nome: 'Diego', idade: 23 };
    const monstrarIdade = (user) => user.idade;
    console.log(`Idade ${monstrarIdade(usuario)}`);

    //3,3
    const nome = "Diego";
    const idade = 23;

    const mostraUsuario = (nome = "Diego", idade = 18) => { return { nome, idade }; };

    console.log(mostraUsuario(nome, idade));
    console.log(mostraUsuario(nome));

    // 3,4
    const promise1 = () => {
        return new Promise(function (resolve, reject) {
            return resolve();
        })
    }
}

export function exercicio04() {
    console.log("------------ Exercício 04 --------------");

    // 4,1
    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };

    const { nome, endereco: { cidade }, endereco: { estado } } = empresa;
    console.log(nome);
    console.log(cidade);
    console.log(estado);

    //4,2
    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
}


export function exercicio05() {
    console.log("------------ Exercício 05 --------------");

    // 5,1
    const arr = [1, 2, 3, 4, 5, 6];
    const [x, ...y] = arr;
    console.log(x);
    console.log(y);

    function soma(...params) {
        return params.reduce((total, index) => total + index);
    }

    console.log(soma(1, 2, 3, 4, 5, 6));
    console.log(soma(1, 2));

    // 5,2
    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }
    };

    const usuario2 = { ...usuario, nome: "Gabriel" };
    console.log(usuario2);
    const usuario3 = { ...usuario, cidade: "Lontra" };
    console.log(usuario3);
}

export function exercicio06() {
    console.log("------------ Exercício 06 --------------");

    const usuario = 'Diego';
    const idade = 23;
    console.log(`O usuário ${usuario} possui ${idade} anos`);
}


export function exercicio07() {
    console.log("------------ Exercício 07 --------------");

    const nome = 'Diego';
    const idade = 23;
    const usuario = {
        nome,
        idade,
        cidade: 'Rio do Sul',
    };

    console.log(usuario);
}