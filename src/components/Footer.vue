<template>
 <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© 2019
               All rights reserved. Created by
              <a href="#">Mohamed Adly</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</div> 
</template>

<script>
export default {
  name: 'Footer',
  
}

</script>

<style lang="scss" scoped>
.footer {
 background:#192027;
 text-align:center;
 padding:32px 0
}
.footer p {
 margin:0;
 line-height:26px;
 font-size:15px;
 color:#999
}
.footer p a {
 color:#5867dd
}
.footer p a:hover {
 color:#34bfa3
}
</style>
