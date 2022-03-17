const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, name: "Vue", clicked: false },
        { id: 2, name: "React", clicked: false },
        { id: 3, name: "Angular", clicked: false },
        { id: 4, name: "Php", clicked: false },
        { id: 5, name: "Java", clicked: false },
        { id: 6, name: "Css", clicked: false },
      ],
    
    };
  },
  methods: {
    deleteItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((todo) => todo != todoItem);
    },
  },
  computed:{
      checkList(){
          const a = [];
          for(let item in this.todoList) {
           if(this.todoList[item].clicked === true){
                a.push(this.todoList[item].name);
           }
          }
          return a;

      }
  }
 
}).mount("#app");
