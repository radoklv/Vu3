const app = Vue.createApp({
  data() {
    return {
      todosArr: [
        "First Todo",
        "Second Todo",
        "Third Todo",
        "Fourth Todo",
      ],
      searchedWord: "",
      todoToAdd: "",
    };
  },

  methods: {
    deleteTodo(index) {
      this.todosArr.splice(index, 1);
    },

    addTodo() {
      if (this.todoToAdd != "") {
        this.todosArr.push(this.todoToAdd);
      } else {
        return;
      }

      this.todoToAdd = "";
    },
  },

  computed: {
    todos() {
      const todos = this.todosArr.filter((todo) => {
        const word = todo.toLowerCase();
        const searched = this.searchedWord.toLowerCase();

        return word.includes(searched);
      });

      return todos;
    },
  },
});

app.mount("#app");
