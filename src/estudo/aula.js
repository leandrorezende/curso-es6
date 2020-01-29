export function streams() {
    const arr = [1, 3, 4, 5, 8, 9];

    const newArr = arr.map((i, index) => i * index);
    console.log(newArr);

    const sum = arr.reduce(function (total, next) {
        return total + next;
    });
    console.log(sum);

    const filter = arr.filter(function (item) {
        return item % 2 === 0;
    });
    console.log(filter);

    const find = arr.find(function (item) {
        return item === 4;
    });
    console.log(find);
}

export function rest() {
    /*
        REST - pegar o resto das propriedades utilizando a 
        sintaxe ...nomeVarialArmazenaResto
    */

    const arr = [1, 2, 3, 4];
    const [a, b, ...c] = arr;
    console.log(c);

    function soma(a, b, ...params) {
        return params;
    }
    console.log(soma(1, 3, 4, 6));

    const endereco = {
        street: "Rua 1",
        city: "São Paulo",
        country: "Brazil"
    }
    const { street, ...rest } = endereco;
    console.log(rest);
}

export function spread() {
    /*
        SPREAD - copia uma estrutura de dados para outra
    */

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);

    const usuario = {
        nome: "Diego",
        idade: 23,
        endereco: {
            cidade: "Rio do Sul",
            estado: "SC",
        }
    }
    const usuarioSpread = { ...usuario, nome: "Robson" }
    console.log(usuarioSpread);
}

export function templateLiterals() {
    /*
        template literals - forma de incluir váriaveis dentro do stream
    */

    const nomeUser = "Diego";
    const idadeUser = 23;

    console.log("Meu nome é " + nomeUser + " e tenho " + idadeUser + " anos");
    console.log(`Meu nome é ${nomeUser} e tenho ${idadeUser} anos`);
}

export function objectShort() {
    /*
        Object short sintaxe - utilizado na construção de objectos em que o parâmetro
        tem a mesma escrita da propriedade do objecto, não precisar repetir.
    */
    const nome = "Diego";
    const idade = 23;
    const usuario = {
        nome,
        idade,
        empresa: "Rockseat"
    }
    console.log(usuario);
}

export function objectDestruction() {
    const usuario = {
        nome: "Diego",
        idade: 23,
        endereco: {
            cidade: "Rio do Sul",
            estado: "SC",
        }
    }

    function mostraNome({ nome }) {
        console.log(nome);
    }
    mostraNome(usuario);

    const { nome, endereco: { cidade } } = usuario;
    console.log(nome, " ", cidade);
}

export function arrowFunction() {
    const minhaPromise = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ok");
        }, 2000);
    })
    executaPromise();

    async function executaPromise() {
        console.log(await minhaPromise());
        console.log(await minhaPromise());
    }

    // arrow function version of a call to a async function
    const executaPromisse2 = async () => {
        console.log(await minhaPromise());
    }
    executaPromisse2();

    const teste = () => ({ nome: "Diego" });
    console.log(teste());

    function soma(a = 3, b = 6) {
        return a + b;
    }
    const somaWithDefauts = soma = (a = 3, b = 6) => a + b;
    console.log(soma(1));
}