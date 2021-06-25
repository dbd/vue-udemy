const app = Vue.createApp({
  // data, functions
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Brandonson",
          age: 45,
          isFav: true,
        },
        {
          title: "The Road to El Dorado",
          author: "Emp Cusco",
          age: 45,
          isFav: false,
        },
        {
          title: "The Empire Strikes Back",
          author: "Stan Lee",
          age: 45,
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
      url: "dbd.sh",
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
