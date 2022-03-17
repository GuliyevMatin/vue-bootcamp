const app = Vue.createApp({
  data() {
    return {
      title: "Vue 3 Bootcamp",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://www.google.com",
      corrds: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    coordinates(event) {
      this.corrds.x=event.x
      this.corrds.y=event.y
    },
  },
}).mount("#app");
