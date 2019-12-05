// Task
// Codewars expand their t-shirt selection so that there is one color corresponding to 1 or 2 levels:
// White / 7,8kyu; Orange / 5,6kyu; Blue / 3,4kyu; Purple / 2kyu; Red / 1kyu; Black / 1dan.

// At the beginning of each month Codewars receive a shipment of n t-shirts. There will always be an equal number of each color. Each user can only choose between 2 different colors when ordering a t-shirt. At the end of each month Codewars take all received orders and send t-shirts, but only if it is possible to grant all requests.

// Given n and the list of orders placed, determine if Codewars have enough t-shirts to fulfill all orders (true) or must wait until the next month (false).

// Input/Output
// [input] integer n

// The total number of t-shirts that Codewars have for the month. It is guaranteed that n is a multiple of 6.

// 6 ≤ n ≤ 36

// [input] 2D string array orders

// An array of string arrays representing the orders. Each order is an array of exactly two strings - the color choices the user made. It is guaranteed that only the following colors are given: "Red", "Black", "Blue", "Purple", "Orange" or "White".

// 0 ≤ orders.length ≤ 20

// [output] a boolean value

// A boolean representing if all orders can be fulfilled for the month with the given t-shirts.

// Example
// For n = 6 and orders = [["Red", "Black"],["Red", "Black"]],

// the output should be true.

// Codewars have 6 shirts in stock, which means 1 of each color. If they send a red t-shirt for the first order, we can still send a black t-shirt for the second order. Thus, both orders can be fulfilled.

// For n = 6 and orders = [["Red", "Black"], ["Red", "Black"], ["Red", "Black"]]

// the output should be false.

// Again, there is 1 t-shirt of each color. It is possible to fulfill the first two orders by sending 1 red and 1 black shirt, however there won't be any red/black shirts to fulfill the third order. Thus, it's impossible to fulfill all orders this month.



function codewarsTshirts(n, orders) {

    let inventory = {White:0,Orange:0,Blue:0,Purple:0,Red:0,Black:0};

    Object.keys(inventory).forEach(e => inventory[e] += n/6);

    let unique = Array.from(new Set(orders.map(e=>e.sort().join("-"))));

    let orderAmount = unique.map(e=>{

        return [e,orders.map(e=>e.sort().join("-")).reduce((acc,val) => e===val ? acc+1 : acc+0, 0)];
        
    });
    console.log("unique,", unique);

    console.log("amount", orderAmount);



    // while(orders.length > 0){

    //     let order = orders.shift().sort().join("-");

    // }

    return true;
      
}

//console.log(codewarsTshirts(6,[["Red","Black"],["Red","Black"]]));

//console.log(codewarsTshirts(6,[["Red","Black"],["Red","Black"],["Red","Black"]]));

console.log(codewarsTshirts(18,[["Black","Blue"],["Purple","Blue"],["Blue","White"],["White","Orange"],["White","Blue"],["Purple","White"],["White","Purple"],["White","Red"],["Blue","Purple"],["Orange","White"],["Black","Blue"],["Purple","Red"],["Blue","Red"],["Blue","White"],["Purple","White"],["Purple","Blue"],["Orange","Red"]]));


//working solutions from the community:


function codewarsTshirts2(n, orders) {
    const stock = ['White', 'Orange', 'Blue', 'Purple', 'Red', 'Black'].reduce((acc, color) => {
      acc[color] = n / 6
      return acc
    }, {})
    
    return checkOrders(orders, stock)
  }
  
  function checkOrders([order, ...restOrders], stock) {
    if (!order) return true
  
    return order.some(color => {
      if (stock[color] === 0) return false
  
      const restStock = Object.assign({}, stock)
      restStock[color] -= 1
      return checkOrders(restOrders, restStock)
    })
  }
//---------------

  function codewarsTshirts3(n, orders) {
    var e = n/6;
    var s = {"White":e,"Orange":e,"Blue":e,"Purple":e,"Red":e,"Black":e};
    function order(orders, s) {
      if (orders.length == 0) 
        return true;
      var o = orders.pop();
      var possible = false;
      if (s[o[0]]>0) {
        s[o[0]]--;
        possible = order(orders, s);
        s[o[0]]++;
      } 
      if (s[o[1]]>0) {
        s[o[1]]--;
        possible = possible || order(orders, s);
        s[o[1]]++;
      }
      orders.push(o);
      return possible;
    }
    return order(orders,s);
  }


//-------
  function codewarsTshirts4(n, orders) {
    orders = orders.map(order=>order.map(color=>['White','Orange','Blue','Purple','Red','Black'].indexOf(color)))
    let a = Math.pow(2,orders.length)
    while (a--) {
      let cnts=[0,0,0,0,0,0], b=a<<1
      for (let i=0; i<orders.length; i++) cnts[orders[i][(b>>=1)%2]]++
      if (cnts.every(x=>x<=n/6)) return true
    }
    return false
  }


  const colors = ['White', 'Orange', 'Blue', 'Purple', 'Red', 'Black'];

function codewarsTshirts5(n, orders) {
  for (let cs = 0; cs < 2 ** orders.length; cs++)
    if (colors.every(c => orders.filter((o, i) => o[cs >> i & 1] == c).length <= n / 6))
      return true;
  return false;
}



//----------


const validator = function(n, orders) {
    const { colors } = validator;
    n = Math.floor(n / colors.length);
    let combos = [colors.map(cur => cur.repeat(n)).join('')];
    return orders.every(order => {
        combos = order.reduce((res, cur) =>
            [...res, ...combos.map(comb => {
                const temp = comb.replace(cur, '');
                return temp !== comb && temp;
            }).filter(cur => typeof cur === 'string')], []
        );
        return combos.length;
    });
};

validator.colors = ['Red', 'Black', 'Blue', 'Purple', 'Orange', 'White'];

const codewarsTshirts6 = validator;