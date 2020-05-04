<!--
 * @Author: your name
 * @Date: 2020-05-03 23:07:05
 * @LastEditTime: 2020-05-04 10:16:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\Vue Study\my-vue\App.vue
 -->
 <template>
   <div>
      {{message}}
   </div>
 </template>

 <script>
 export default {
   name:"App",
   data(){
     return{
        message:"hello pangchao"
     }
   }
 }
 </script>

 <style scoped>
   div{
    color:orange;
    font-size:18px;
    font-weight: bold;
   }
 </style>