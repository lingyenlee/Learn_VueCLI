<template>
  <li class="list-group-item" style="cursor:pointer" v-on:click="serverSelected">Server #{{ server.id }}</li>
</template>

<script>
import { bus } from "../../main";

export default {
  props: {
    server: Object
  },
  methods: {
    serverSelected() {
      bus.$emit("serverSelected", this.server);
    }
  },
  
  // created() {
  //   bus.$on("resetServer", data => {
  //     this.server.status = data;
  //   });
  // }
};
</script>

<style>
</style>