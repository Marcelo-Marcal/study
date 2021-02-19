// Function construtura:
/**
 * expressão new: cria um novo objeto
 * this keyword
 */

 /*
 function Person(name){
  this.name = name
 }

 const sujeito = new Person('Marçal')
 const sujeito02 = new Person('Joao')
 
 console.log(sujeito)
 console.log(sujeito02)
 */
 function Person(name){
  this.name = name
  this.walk = function() {
    return this.name + " está andadndo"
  }
 }

 const sujeito = new Person('Marçal')
 const sujeito02 = new Person('Joao')
 
 console.log(sujeito.walk())
 console.log(sujeito02.walk())