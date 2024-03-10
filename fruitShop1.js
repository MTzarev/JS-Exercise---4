function fruitShop1(input) {
    let Price=0
      let fruit = input[0];
   let day = input [1];   
   let quantity = Number (input [2]);
if (day === "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" ){
    }else if (fruit === "banana"){
        Price = quantity*2.50
    }else if (fruit === "apple"){
        Price=quantity*1.20
    }else if (fruit === "orange"){
        Price=quantity*0.85
    }else if (fruit === "grapefruit"){
        Price= quantity*1.45
    }else if (fruit === "kiwi"){
        Price = quantity*2.70
    }else if (fruit === "pineapple"){
        Price = quantity*5.50
    }else if (fruit === "grapes"){
        Price = quantity*3.85
    } console.log (`${Price.toFixed(2)}`)   
if (day === "Saturday" || "Sunday"){
    }else if (fruit === "banana"){
        Price=quantity*2.70
    }else if (fruit === "apple"){
        Price=quantity*1.25
    }else if (fruit === "orange"){
        Price = quantity *0.90
    }else if (fruit === "grapefruit"){
        Price = quantity *1.60
    }else if (fruit === "kiwi"){
        Price = quantity*3.00
    }else if (fruit === "pineapple"){
        Price= quantity*5.60
    }else if (fruit === "grapes"){
        Price = quantity *4.20
    }
    
console.log (`${Price.toFixed(2)}`)
}

fruitShop1(["apple", "Tuesday", "2"]);