<template>
  <div class="block">
    Click Me!
  </div>
</template>

<script>
export default {
  props: ["delay"]
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: green;
  color: honeydew;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
