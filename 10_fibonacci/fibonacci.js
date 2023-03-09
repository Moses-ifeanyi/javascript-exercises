function fibonacci(n) {
    if(n < 0){
        return "OOPS"
    }

    let prev = 1;
    let curr = 1;
    
    for (let i = 2; i < n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    
    return curr;
  }
  

// Do not edit below this line
module.exports = fibonacci;
