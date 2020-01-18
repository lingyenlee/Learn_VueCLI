<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>id: {{server.id}} Server status: {{server.status}}</p>
    <button v-on:click="resetStatus">Reset status</button>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },

  methods: {
    resetStatus() {
        this.server.status = "Normal"
    //   bus.$emit("resetStatus", this.server.status);
    }
  },
  //   props: ["id"],
  created() {
    bus.$on("serverSelected", data => {
      this.server = data;
    });
  }
};
</script>

<style>
</style>
