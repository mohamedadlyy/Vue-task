<template>
   <div class="col-8" v-if="user.id == userid">
       <img v-bind:src=" user.avatar_url" class="img-wrapper">
       <h4 class="user-info"> name : {{ user.login }} </h4>
       <h4 class="user-info"> id : {{ userid }}</h4>
       <h4 class="user-info"> email :{{ user.url }}</h4>  
    </div>
</template>

<script>

export default {
  name: 'User',
  components: {
    
   
  },
  props: ['user','userid'],

}
</script>

<style lang="scss" scoped>
.img-wrapper{width:400px;border: 1px solid;margin-bottom: 50px}
.user-info{margin-bottom: 20px;border: 1px solid;padding: 5px;background-color: #ddd;}
</style>
