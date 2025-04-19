<template>
    <div class="mensa">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>

    export default{
        name:'MensagemConfirmacao',

        props:{
            msg: String,
        },

        data(){
            return{
            }
        }
    }
</script>