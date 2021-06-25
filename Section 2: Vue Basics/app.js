const app = Vue.createApp({
  // data, functions
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Brandonson",
      age: 45,
    };
  },

  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
