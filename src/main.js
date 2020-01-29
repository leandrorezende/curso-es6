import { callFunction } from './estudo/wrapper';
callFunction();

//---------------------------------------------------------
import api from "./api";

class App {
    constructor() {
        this.reposoties = [];
        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.querySelector("input[name=repository]");
        this.listEl = document.getElementById("repo-list");
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading == true) {
            let loadingEl = document.createElement("span");
            loadingEl.appendChild(document.createTextNode("Carregando..."));
            loadingEl.setAttribute("id", "loading");
            this.formEl.appendChild(loadingEl);
        }
        else {
            document.getElementById("loading").remove();
        }
    }

    async addRepository() {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) {
            return;
        }

        this.setLoading();
        try {
            const reponse = await api.get(`/repos/octokit/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = reponse.data;
            this.reposoties.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.render();
        } catch (err) {
            alert("O repositório não existe!");
        }
        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = "";
        this.reposoties.forEach(repo => {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", repo.avatar_url);

            let titleEl = document.createElement("strong");
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement("p");
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement("a");
            linkEl.setAttribute("target", "_blank");
            linkEl.setAttribute("href", repo.html_url);
            linkEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement("li");
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();