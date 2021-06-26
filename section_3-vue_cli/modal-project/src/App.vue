<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal">
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
  </teleport>
  <teleport to="#modals" v-if="showOtherModal">
    <Modal @close="toggleOtherModal">
      <h1>Hello from the other modal</h1>
      <p>still a modal</p>
    </Modal>
  </teleport>
  <p>Welcome</p>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleOtherModal">Open Other Modal</button>
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
      showOtherModal: false,
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
    toggleOtherModal() {
      this.showOtherModal = !this.showOtherModal;
    },
  },
};
</script>

<style>
#app,
#modals {
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
