<template>
 <div class="user-component">  
    <div class="container">
        <h2>{{ name }}</h2> 
        <div class="wrapper">
            <div class="row">
                <div class="col-4">
                    <ol class="users">
                        
                        <li 
                            class="user-name"
                            v-for="user in users.data "
                            v-bind:key="user.id" 
                            v-on:click="select(user)">{{ user.login }}
                        </li>
                            
                    </ol>
                    <button v-on:click= getUsers() class="btn btn-primary load-more"> load more</button>
                </div>
                <User :user="user"
                    :userid="userid"
                    v-for="user in users.data"
                    v-bind:key="user.id"/>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import User from './user.vue';
import axios from 'axios';
export default {
    
    components: {
    User,
    
  },
 data() {
   return {
        name: 'Users',
       users : [
           {
               login:"",
               id:"",
               avatar_url:""
           }
          
       ],
       maxNo:10,
       isLoading:false,
       userid:1
    
   }
},
methods:{
    getUsers:function(){
         this.isLoading=true;
    // get only 10 user == maxNo
    axios.get('https://api.github.com/users?since=0&per_page='+this.maxNo)
         .then(
                data=>{this.users=data},
                 this.maxNo +=10,
                 
                  )
          .catch(
                error=>{(
                    
                /* eslint-disable no-console */
                console.log(error)
                /* eslint-enable no-console */)})
                          
    },
    select: function(user) {
        this.userid = user.id;
        this.$router.push({ name:'details',params:{id : this.userid}});
}
  
},
 mounted () {
    this.getUsers();   
    this.userid = this.$route.params.id || 1
  },
}
</script>

<style lang="scss" scoped>
.user-component{
      
}
.user-component h2{padding-top: 50px;}
.user-name{
    font-size: 20px;
    margin: 10px;
    font-family: monospace;
    transition: all ease-in-out .5s;
}
.user-name:hover{
    cursor: pointer;
    color: #f55d78;

}
.users{
    border: 1px solid;
}
.load-more{margin-bottom: 50px;}
.wrapper{margin-top: 50px;}
</style>
