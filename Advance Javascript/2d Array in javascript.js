  
let a = new Array(6); // create 1D array of length 6

  for (let i = 0; i < a.length; i++) {
    a[i] = new Array(6); //creating an array of length 6 against each 1D array index
  }
  let val = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      a[i][j] = val; // adding file to 2D array
      process.stdout.write(" " + a[i][j]);
    }
    console.log();
  }
