<template>
    <div>qwerty</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

    methods:{

    },

    created(){
        let id2 = this.$route.params.id2;
        let id = this.$route.params.id;

        console.log(id + id2)
    }
}
</script>