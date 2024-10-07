const obj = {
  a: "lws",
  b: undefined,
  c: "learn with sumit",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "k",
  i: true,
  j: NaN,
};
const truthyObject = function(obj){
 for(let i in obj){
    if(!obj[i]){
        delete obj[i];
    }
 }
 return obj;
}
console.log(truthyObject(obj));
