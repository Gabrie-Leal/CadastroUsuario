<template>
  <nav>
    <router-link to="/">Lista de Cadastros</router-link>
    <router-link to="/AddUsuario">Adicionar um Usuário</router-link>
    <router-link to="/CadastroUpdate">Editar um cadastro</router-link>
  </nav>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  background-color: #007bff;
}

nav a {
  font-weight: bold;
  color:#fff;
  margin:0 auto;
}

nav a.router-link-exact-active {
  color: #e0f7ff;
}
</style>
