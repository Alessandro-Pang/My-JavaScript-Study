<template>
    <div id="footer">
        <span>Written by {{this.author}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            author:'pangcy'
        }
    },
}
</script>

<style lang="stylus" scoped>
#footer
    margin-top 40px
    text-align center
    color aqua
    font-size 30px
    text-shadow 1px 5px 3px  #0fa

</style>