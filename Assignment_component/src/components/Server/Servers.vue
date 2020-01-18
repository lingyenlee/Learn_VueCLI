<template>
   <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
        <app-server v-for="server in servers" v-bind:key="server.id" :server="server"></app-server>
    </ul>
   </div>
</template>

<script>
import Server from "./Server.vue";
import {bus} from "../../main"

export default {
  components: {
      "appServer": Server
  },
  data() {
    return {
      servers: [
        { id: 1, status: "normal" },
        { id: 2, status: "critical" },
        { id: 3, status: "critical" },
        { id: 4, status: "Unknown" },
        { id: 5, status: "normal" }
      ]
    };
  }
};
</script>

<style>
</style>
