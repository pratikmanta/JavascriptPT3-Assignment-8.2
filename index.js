// variable declarations
var tableNo = 10
var items = ["Burger","Pasta","Coke"];                          //array of items 

function prepareFood(tableNo,items,callBack) {                  //prepareFood function declaration with parameters
    
    console.log(`preparing food for items`, items);
    callBack(tableNo,items);                                    //callBack function invoked
}

function serveFood(tableNo,items) {                             //serveFood function declaration with parameters
    console.log(`serving food for items`, items);
}

prepareFood(tableNo,items,(serveFood));                        // both functions invoked 