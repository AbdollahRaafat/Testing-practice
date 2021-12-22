stringLength =(str)=> {
  if(str.length>=1 && str.length<=10)
    return 1;
  else
    return 0;
  
}

reverseString=(str)=> {
  return str.split("").reverse().join("");
}


add=(one,two)=>{
  return two+one;
}

subtract=(one,two)=>{
  return one-two;
}

divide=(one,two)=>{
  return one/two;
}

multiply=(one,two)=>{
  return one*two;
}


capitalize = (str) => {
  let a=str.charAt(0).toUpperCase();
  a+=str.slice(1);
  return a;
}


module.exports = {add, subtract, divide, multiply, stringLength, reverseString};

  
