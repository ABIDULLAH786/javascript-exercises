// cusotm Iterator
function iterator(values){
    let index=0;
    return{
        next: function(){
            if(index< values.length){
                return {
                    value: values[index++],
                    done: false
                }
            }else{
                return {
                    value: values[index++],
                    done: true
                }
            }
        }
    }
}
const iterableArray = [1,2,3,4,5];

// using cusotm Iterator
const myIterator = iterator([1,2,3,4,5]);

// using prebuild symbole
const iteratorObj = iterableArray[Symbol.iterator]();

console.log(iteratorObj.next())  //  { value: 1, done: false } 
console.log(iteratorObj.next())  //  { value: 2, done: false }
console.log(iteratorObj.next())  //  { value: 3, done: false }
console.log(iteratorObj.next())  //  { value: 4, done: false }
console.log(iteratorObj.next())  //  { value: 5, done: false } 
console.log(iteratorObj.next())  //  { value: undefined, done: true }