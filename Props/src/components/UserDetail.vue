<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{name}}</p>
    <p>User Age: {{userAge}}</p>
    <button v-on:click="resetName">Reset Name</button>
    <button v-on:click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    name: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },

  methods: {
    //   switchName: function() {
    //     return this.name.split("").reverse().join("");
    //   },
    resetName() {
      this.name = "Max";
      //using event to pass back props to parents
      // this.$emit("nameWasReset", this.name);

      
     
    }
  },
  //listent to event emit from bus
  created() {
     bus.$on("ageWasEdited", data => {
        this.userAge = data;
      });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
