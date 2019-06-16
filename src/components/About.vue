<template>
 <div>  
    <div class="about">
      <div class="container">
         <h2 class>{{ name }}</h2> 
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut, modi assumenda quod in iure adipisci impedit mollitia cupiditate earum. Sed reiciendis dolor minima ipsa molestiae aliquam?</p>
         
      </div>  
          <div class="service">
            <div class="container-fluid">
               <h2>Service</h2>
              <div class="row">
                <div class="col-4 service-component">
                  <h5>Development</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut,</p>
                </div>
                <div class="col-4 service-component">
                  <h5>Responsiveness</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut,</p>
                </div>
                <div class="col-4 service-component">
                  <h5>Customizable</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut,</p>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'About',
  props: {
   
  },
  data() {
    return {
      name: 'About',
    }
  },
}
</script>

<style lang="scss" scoped>
h2{margin-top: 50px;margin-bottom: 50px}
.service-component{background-color: #dddd;padding: 50px;border:1px solid;transition: all ease-in-out .5s}
.service-component:hover{background-color:#888383dd}
</style>
