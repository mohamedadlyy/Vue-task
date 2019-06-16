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
                   <icon name="file-code" size="xs"></icon>
                  <h5>Development</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut,</p>
                </div>
                <div class="col-4 service-component">
                   <icon name="mobile-alt" size="xs"></icon>
                  <h5>Responsiveness</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum saepe, a facilis aut,</p>
                </div>
                <div class="col-4 service-component">
                  <icon name="dice-d6" size="xs"></icon>
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
@import'./style.scss';

h2{
    margin-top: $margin-top-50;
    margin-bottom: $margin-bottom-50}
.service-component{
                    background-color: $base-color;
                    padding: 50px;
                    border:$border;
                    transition: $transition}
.service-component:hover{background-color:#888383dd}
</style>
