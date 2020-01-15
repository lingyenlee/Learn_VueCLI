<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button v-on:click="editAge">Edit Age</button>
         <button v-on:click="editFn()">Edit Age</button>
    </div>
</template>

<script>
import {bus} from "../main"

export default{
    props: {
        userAge: Number,
        editFn: Function,
    },
    methods: {
        editAge() {
            //store the age in the parent 
            this.userAge = 30;
            // this.$emit("ageWasEdited", this.userAge)
            
            //use event bus to pass data from userEdit to userDetail
            bus.$emit("ageWasEdited", this.userAge)
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
