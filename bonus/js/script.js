/*
//-------------------------------------

- BONUS
  - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
  -  cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

bonus 1:
 ....
bonus 2: 
  1. aggiungere un event listener all'elemento che contiene il testo ,
  2. al click scatenare una funzione che inverte il valore del done


*/
const { createApp } = Vue;
createApp({
  data() {
    return {
      newTodo: "",
      todoList:[]
    }
  },
  methods:{
    removeTodo(index){
      this.todoList.splice(index, 1);
    },
    /* teoricamente funziona ma la funzione viene chiamata 2 volte , la prima stampa perchè il this.newTodo != 0 poi si svuota this.newTodo = ""; e quindi la seconda volta la funzione viene chiamata ma non stampa nulla dato che la condizione this.newTodo != 0 dà false */
    addTodo(){
      console.log('ok 1')
      if(this.newTodo != 0){
        const newObject = {
          text: this.newTodo,
          done: false,
        };
        this.todoList.push(newObject);
        this.newTodo = "";
      }
    },
    cangeDoneStatus(index){
      this.todoList[index].done = !this.todoList[index].done;
    }
  },
  
}).mount('#app');