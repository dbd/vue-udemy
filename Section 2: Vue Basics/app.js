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
    changeTitle() {
      this.title = "The Road to El Dorado";
    },
  },
});

app.mount("#app");
