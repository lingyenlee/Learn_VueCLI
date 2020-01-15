<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button v-on:click="changeName">Change my name</button>
    <p>Name is {{name}}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          v-bind:name="name"
          v-on:nameWasReset="name=$event"
          v-bind:resetFn="resetName"
          v-bind:userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit 
        v-bind:userAge="age" 
        v-on:ageWasEdited="age=$event" 
        v-bind:editFn="editAge"
        >
        </app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Max",
      age: 28
    };
  },
  methods: {
    changeName: function() {
      this.name = "Anna";
    },
    //passing this callback to child component
    resetName() {
      this.name = "Max";
    },
    editAge() {
      this.age = 30;
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
