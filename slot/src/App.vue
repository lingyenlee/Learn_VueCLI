<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p slot="content">A wonderful quote</p>
        </quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./component/Quote.vue";

export default {
  data() {
    return {
      quoteTitle: "The Quote"
    };
  },
  components: {
    quote: Quote
  }
};
</script>

<style>
h2 {
  color: red;
}
</style>
