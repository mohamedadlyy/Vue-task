<template>
<div>
 <div class="container-fluid">
   
    <div class="img">
      <h2>{{ name }}</h2>
      <img :src="require('../assets/github.jpeg')">
    </div>
    </div>
    <div class="card">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
         <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </div>
        <div class="col-4">
          <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
         <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </div>
        <div class="col-4">
          <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
         <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </div>
      </div>
    </div>
</div>
</div>
</template>


<script>
export default {
  name: 'Home',
  components: {
    
   
  },
  data(){
    return{
      name: 'Home',
      slide: 0,
      sliding: null
    }
  },
 
}
</script>

<style lang="scss" scoped>
@import'./style.scss';

.container-fluid{padding: 0;overflow-x: hidden;}
h2{
    position: absolute;
    margin-left: 47%;
    margin-top: $margin-top-50;
    color: #ffff;}
.card{
      margin-top: $margin-top-50;
      margin-bottom: $margin-bottom-50;
      border: none;}

</style>
