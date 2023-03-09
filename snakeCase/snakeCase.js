const snakeCase = (str) => {
    str = str.replace(/([a-z\d])([A-Z])/g, '$1_$2');
    str = str.replace(/[\W_]+/g, '_');
    str = str.toLowerCase();
    str = str.replace(/^_+|_+$/g, '');
    return str;
  };
  
  
  

// Do not edit below this line
module.exports = snakeCase;
