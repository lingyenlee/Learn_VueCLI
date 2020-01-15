<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>
<script>
import {bus} from "../main"

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "Vue Ninjas"
    };
  },
  methods: {
    changeTitle() {
      //emit an event to pass from child to parent
      // this.$emit("changeTitle", "Vue Wizards");

      //using bus event to emit events
      this.title = "Vue Wizards"
      bus.$emit("titleChanged", this.title)
    }
  }
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
