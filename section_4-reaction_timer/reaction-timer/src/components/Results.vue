<template>
  <p>Reaction Time: {{ this.score }} ms</p>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    if (this.score < 250) {
      this.msg = "Blazing";
    } else if (this.score < 650) {
      this.msg = "Meh.";
    } else {
      this.msg = "You slow.";
    }
  }
};
</script>

<style></style>
