import About from './components/About.vue';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
export const routes = [

{path:'', component:Home, name:'home'},
{path:'/about',component:About, name:'about'},
{path:'/users/',component:Users,name:'users'},
{path:'/users/:id',component:Users,name:'details'},

// redirect
{path:'/home',redirect:{name : 'home'}},
{path:'/about',redirect:{name : 'about'}},


//catch
{path:'*',redirect:{name : 'home'}},
];