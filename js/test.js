const mixedArray = ['lws', undefined, 'learn with sumit', false, '', 'apple', 40, 'k', true, 'thanks all', NaN];
const trueArray = mixedArray.filter(function(el){
    if(el){
        return true;
    }
    else{
        return false;
    }
});
console.log(trueArray);