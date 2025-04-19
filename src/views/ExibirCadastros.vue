<template>
    <main>
        <h1>Listagem de Usuários</h1>
        <table class="usuarios">
                <tr>
                    <th>Nome</th>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
                <tr v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.name }}</td>
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.email }}</td>
                </tr>
        </table>
    </main>
</template>

<script>
import api from "@/api";

export default {
    name: "ExibirCadastros",

    data() {
        return {
            usuarios: [],
        };
    },

    methods: {
        async getUsuarios() {
            try {
                const resposta = await api.get("http://localhost:3000/users");
                this.usuarios = resposta.data;
            } catch (error) {
                console.error("Erro:", error);
            }
        },
    },

    mounted() {
        this.getUsuarios();
    },
};
</script>

<style scoped>
body{
    background-color: #f9f9f9;
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
}

.usuarios {
    width: 80%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 12px 15px;
    text-align: center;
    font-size: 16px;
    color: #333;
}

th {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
}

tr:hover {
    background-color: #e0f7ff;
}

td {
    border: 1px solid #ddd;
}

@media (max-width: 768px) {
    .usuarios {
        width: 100%;
    }

    th, td {
        font-size: 14px;
    }
}
</style>
