<template>
    <main>
        <h1>Informe os dados do novo usuario</h1>
        <div class="central">
            <div class="caixa">
                <label for="nome">Digite o nome do usuario:</label>
                <input type="text" name="" id="nome" v-model="nome">
            </div>
            <div class="caixa">
                <label for="email">Digite o e-mail:</label>
                <input type="email" name="" id="email" v-model="email">
            </div>

            <button @click="cadastrar()">Cadastrar</button>
            <MensagemConfirmacao :msg="msg"/>
        </div>
    </main>
</template>

<script>
import MensagemConfirmacao from '@/components/MensagemConfirmacao.vue'
import api from "../api.js"

    export default{
        name:'AddUsuario',

        components:{
            MensagemConfirmacao
        },

        data(){
            return{
                nome:"",
                email:"",
                msg:null,
            }
        },

        methods:{
            async cadastrar(){
                if(!this.nome.trim() || !this.email.trim()){
                    this.msg = "Preencha todos os campos!"
                    setTimeout(()=> this.msg="",3000);
                    return;
                }

                const newUser={
                    id : Math.floor(Math.random() * 1000),
                    name : this.nome,
                    email : this.email,
                };

                await api.post("http://localhost:3000/users", newUser);

                this.msg = "Usuario "+this.nome+" adicionado com sucesso!";
                setTimeout(()=>this.msg="",3000);

                this.nome="";
                this.email="";
            }
        }
    }
</script>

<style scoped>
main{
    display: grid;
    place-items: center;
}

.central {
    background: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    margin: 20px 0 40px 0;
}

.caixa {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

label {
    font-size: 16px;
    margin-bottom: 5px;
    color: #555;
}
input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    outline: none;
    transition: 0.3s;
}

input:focus {
    border-color: #007bff;
}

button {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
}

button:hover {
    background: #0056b3;
}
</style>