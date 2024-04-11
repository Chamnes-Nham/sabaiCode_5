function sumAll(args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  console.log(sumAll(1, 2));           
  console.log(sumAll(1, 2, 3, 4, 5));  
  