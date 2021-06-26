<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>Hello world</h1>
      <p>Please like comment and subscribe</p>
      <template v-slot:links>
        <a href="#">sign up</a>
        <a href="#">like</a>
        <a href="#">comment</a>
        <a href="#">subscribe</a>
      </template>
    </Modal>
  </div>
  <p>Welcome</p>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app",
      modalHeader: "Sign up for the site",
      modalText: "pls like and sub",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  color: #2c3e50;
}
</style>
