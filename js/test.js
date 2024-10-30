const javaScript = {
  name: "javascvript",
  libraries: ['react', 'angular', 'vue'], 
  printLibraries: function(){
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
  }
}
javaScript.printLibraries();
