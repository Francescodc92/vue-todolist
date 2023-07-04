/*
- Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    - text, una stringa che indica il testo del todo
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no 
    RAGIONAMENTO BASE 
    1.  creare un array di oggetti in data contenente:
    - il testo , che in un primo momento sarà fisso nell'array (successivamente verrà dall'input)
    - il done che definisce uno "stato" come variabile d'appoggio che avrà come valore true o false (ci servirà successivamente per visualizzare il contenuto della lista in maniera differente in base allo stato)
    //-------------------------------------
- MILESTONE 1 :
  - Stampare all'interno di una lista HTML un item per ogni todo.
    Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

 RAGIONAMENTO BASE 
 1. creare una ul nell'html  
 2. aggiungere un li all'interno che riceverà un ciclo (v-for), in maniera da essere ripetuto tante volte quanti sono gli elementi dell'array
 3. dare all'li una classe legata ad una condizione che verifica lo stato del done dell'oggetto 
  - creare una classe utilitaria nell'css che verrà aggiunta in caso la condizione sia verificata (ossia in caso l'elemento della lista abbia come done il valore true)
  //-------------------------------------
  - MILESTONE 2 :
  - Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
RAGIONAMENTO BASE
1. creare un a/span/button in ogni li 
2. aggiungere l'evento click (@click="")
  -al click far partire una funzione
3. creare una funzione in methods che (passandole l'index) fà lo splice dell'elemento (oggetto) dall'array
di conseguenza l'elemento verrà eliminato anche dall'html
   //-------------------------------------
- MILESTONE 3 :
  - Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

RAGIONAMENTO BASE
creare un form con un input , al submit del form far partire una funzione che aggiunge il testo al nuovo oggetto nell'array 
  - la funzione dovrà pushare un oggetto nell'array che avrà come testo il contenuto dell'input e come 
*/
const { createApp } = Vue;
createApp({
  data() {
    return {
      newTodo: "",
      todoList:[
        {
          text: 'fare la spesa',
          done: false,
        },
        {
          text: "finire l'esercizio",
          done: false,
        },
        {
          text: 'ricordare il Q&A con i tutor alle 15:30 ',
          done: true,
        },
        {
          text: 'ricordarsi di pushare ',
          done: false,
        }
      ]
    }
  },
  methods:{
    removeTodo(index){
      this.todoList.splice(index, 1);
    },
    addTodo(){
      if(this.newTodo.trim() != ""){
        const newObject = {
          text: this.newTodo,
          done: false,
        };
        this.todoList.push(newObject);
        this.newTodo = "";
      }
    },
  },
  
}).mount('#app');