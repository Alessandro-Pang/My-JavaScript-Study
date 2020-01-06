<template>
    <div id="app">
        <div id="cover"></div>
        <my-header></my-header>
        <my-todo></my-todo>
        <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from './todo/header.vue'
import myFooter from './todo/footer.vue'
import myTodo from './todo/todo.vue'

export default {
    components:{
        'my-header':myHeader,
        'my-footer':myFooter,
        'my-todo':myTodo,
    }
}
</script>

<style lang="stylus" scoped>
// scoped 声明 类样式只在组件内使用 
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0   
        background-color #999 
        opacity 0.2
        z-index -1

</style>