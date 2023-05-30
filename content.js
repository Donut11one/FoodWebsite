const fs = require("fs");

fs.readFile("Dishes.json", (error,data) =>{
    if(error){
        console.error(error);
    
    throw error;
    }
    const dishInfo = JSON.parse(data);
    
});