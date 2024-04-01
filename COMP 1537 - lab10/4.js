

const result = unicorns.filter(
  (aUnicorn)=> {
    if(aUnicorn.gender == 'f' && (aUnicorn.loves.includes('apple') || aUnicorn.weight < 500 )){
      return true
    }
  }
  
)
console.log(result.length)
// 4. Find the female unicorns that either love apples or weigh less than 500 pounds
