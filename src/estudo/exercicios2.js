import axios from 'axios';

export function exercicio01() {
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

    async function umPorSegundo() {
        await delay();
        console.log('1s');
        await delay();
        console.log('2s');
        await delay();
        console.log('3s');
        await delay();
    }
    umPorSegundo();
}

export function exercicio02() {

    const getUserFromGithub = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
        } catch (err) {
            console.log('Usuário não existe');
        }
    }
    getUserFromGithub('diego3g');
    getUserFromGithub('diego3g124123');
}

export function exercicio03() {
    class Github {
        static async getRepositories(repo) {
            await axios.get(`https://api.github.com/repos/${repo}`)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log('Repositório não existe');
                })
        }
    }
    Github.getRepositories('rocketseat/rocketseat.com.br');
    Github.getRepositories('rocketseat/dslkvmskv');

    const buscaUsuario = async (user) => {
        await axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            });
    }
    buscaUsuario('diego3g');
}