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

*/
createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')