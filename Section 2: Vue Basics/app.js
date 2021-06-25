const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Brandonson",
      age: 45,
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
