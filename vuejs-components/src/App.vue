<template>
  <div>
    <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
     <serverStatus></serverStatus>
     <serverDetail></serverDetail>
     
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import ServerStatus from "./ServerStatus.vue";
import ServerDetail from "./ServerDetails.vue"

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "serverStatus": ServerStatus,
    "serverDetail": ServerDetail
  }
};
</script>

<style>

</style>
