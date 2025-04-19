<template>
    <h1>Editar Cadastro</h1>
    <div class="dados" v-show="procura">
        <label for="nomeProcurar">Digite o nome do cadastro que deseja alterar:</label>
        <input type="text" name="" id="nomeProcurar" v-model="nomeProcurado">
    </div>

    <div class="dadosEncontrados">
        <button @click="getPesquisa()">Pesquisar</button>


        <div class="newDados" v-if="dadosEncontrados">
            <p>Nome: {{ usuarioEncontrado.name }}</p>
            <p>Email: {{ usuarioEncontrado.email }}</p>

            <label for="nome">Digite o novo nome de usuario:</label>
            <input type="text" name="" id="nome" v-model="novoNome">
            <label for="email">Digite o novo e-mail:</label>
            <input type="email" name="" id="email" v-model="novoEmail">
            <button @click="alterarCadastro()">Alterar Cadastro</button>
        </div>
        <MensagemConfirmacao class="MensagemConfirmacao" v-else :msg="msg" />
    </div>
</template>

<script>
import api from '@/api';
import MensagemConfirmacao from '@/components/MensagemConfirmacao.vue';

export default {
    name: 'CadastroUpdate',

    components: {
        MensagemConfirmacao
    },

    data() {
        return {
            nomeProcurado: "",
            usuarios: [],
            dadosEncontrados: false,
            procura: true,
            novoNome: "",
            novoEmail: "",
            msg: "",
            usuarioEncontrado: null,
        }
    },
    methods: {
        async getUsuarios() {
            try{
                let req = await api.get('http://localhost:3000/users');
                this.usuarios = req.data;
            }catch(e){
                console.log("Erro: "+e);
            }

        },

        async getPesquisa() {
            if(!this.usuarios.length){
                await this.getUsuarios();
            }

            const usuario = this.usuarios.find(u => u.name.toLowerCase() === this.nomeProcurado.toLocaleLowerCase());

            if(usuario){
                this.usuarioEncontrado = usuario;
                this.dadosEncontrados = true;
                this.msg = ""
            }else{
                this.dadosEncontrados = false;
                this.msg = "Usuário não encontrado";
                setTimeout(() => this.msg = "", 3000);
            }
        },

        async alterarCadastro() {
            if (!this.novoNome.trim() || !this.novoEmail.trim()) {
                this.dadosEncontrados=false;
                this.msg = "Por favor, preencha todos os campos!";
                setTimeout(() => this.msg = "", 3000);
                return;
            }

            try{
                let novoUsuario = {
                    name: this.novoNome,
                    email: this.novoEmail
                }

                await api.patch("http://localhost:3000/users/" + this.usuarioEncontrado.id, novoUsuario);

                this.dadosEncontrados = false;
                this.msg = "Cadastro alterado com sucesso!";
                setTimeout(() => this.msg = "", 3000);

                this.nomeProcurado = "";
                this.novoEmail = "";
                this.novoNome = "";
            }catch(e){
                console.log("Erro ao alterar cadastro: "+e);
            }


        }
    }
}
</script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    background-color: #f7f7f7;
    min-height: 100vh;
}

.newDados, .dados{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
h1 {
    margin-top: 20px;
    font-size: 28px;
    color: #333;
    font-weight: bold;
}


label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
}

input {
    width: 60%;
    padding: 10px;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

button {
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    padding: 12px 20px;
    margin: 10px 0 15px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.MensagemConfirmacao {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    color: #e74c3c;
}

@media (max-width: 768px) {
    .form-container {
        padding: 20px;
        width: 100%;
    }
}
</style>