const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Brandonson",
      age: 45,
      x: 0,
      y: 0,
    };
  },

  methods: {
    handleEvent(e, n) {
      console.log(e, n);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
