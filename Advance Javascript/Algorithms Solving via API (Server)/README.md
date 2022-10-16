# Task 2 (LMC) instruction
## **Step 1 :** Before executing any file install dependencies by running the below command inside Task2 directory where packeng.json file is placed

    npm install


## **Step 2 :** After completing step 1, run the following command to start the server

    npm start

Note: if the above command is not working (It may heppand in some cases). then try this command
        
    node server.js


## **Step 3 :** Now you server will start and display the following sentance in your terminal

    Server is Listening on port http://localhost:8080

### **Congratulation** your server is now live to check the program visit the following url in your browser

    http://localhost:8080/lcm?[12,30]

And just pest your array elements in array parentheses to calculate LCM.



$$ example $$

## Correct Input
![Example Image](https://i.postimg.cc/kXGzGJxf/Capture.png)


## Providing non natural number
![Example Image](https://i.postimg.cc/KjxxtVyc/Capture2.png)

## Providing non natural number
![Example Image](https://i.postimg.cc/QxNW3YWr/Capture3.png)


# Testing Instruction
Before mocing towards the steps that how to run the test cases.

i would like to illustrate that where the test cases file are and which file is for which task

    - Main Project Directory
        |
        |___ __tests__
        |   |
        |   |__ bt.test.js
        |   |
        |   |___ lcm.test.js
        |
        |    
        |___ nodemodules
        |
        |
        |___ app.js
        |
        |___ server.js
        |
        |___ BinaryTree.js
        |
        |___ package-lock.json
        |
        |___ package.json
        |
        |___ README.md

So in `__test__` directory the `lcm.test.js` file contains test cases for lcm problem which code is in app.js file

And in `__test__` directory the `bt.test.js` file contains test cases for binary tree problem whose code is in BinaryTree.js file


## **Step 1:** before running test cases make sure that you are in main directory where package.json file is placed. 

## **Step 2:** To test individual suite (file contains test case for tasks) run any of the following commands e.g `npm test -- <file_name>`

    npm test -- lcm
    npm test -- lcm.test
    npm test -- lcm.test.js

In above commands the  command `npm test --` is the part of syntex and the the ` lcm,   lcm.test,   lcm.test.js ` is the file where i have write the test cases for lcm program.

So just change the change the name of the file whilc you want to test

### **Note:** if you want to run and test both files in one command then run this command `npm run test`

