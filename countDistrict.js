// You are managing an amazing city and indeed its a maze. This city has the particularity to be divided into districts which are unreachable from the other districts. More precisely, a district consists of one or more places connected with roads. If there is two places p1 and p2 and there is a path (not necessarily direct) between p1 and p2 then p1 and p2 are in the same district.

// As a manager, your objective is to count the number of district.

// To perform this task you have for each place in the city the list of the other places that are directly reachable through a street. For example if you are given the city

// var city = { 
//   'p0': ['p1', 'p2'],
//   'p1': ['p0'],
//   'p2': ['p0'],
//   'p3': []
// }
// then you can directly reach p1 and p2 from p0 but you cannot reach directly p2 from p1, you have to go through p0. Moreover there is no path from p3 to the other places so p3 is in another district.

// Note that all the streets are bidirectional, if there is a street from p1 to p2 then you can also go from p2 to p1 through this street.

// The city has always at least one place.

// Hint: This problem can be easily solved by modeling the city as an undirected graph where the nodes represents the places and the edges are the roads between the edges.




function countDistricts(city){

    let districts = [];
    let edges = [];

    Object.keys(city).forEach(key => {

        if(city[key].length === 0){

            districts.push([]);

        } else{

            edges.push([key, ...city[key]]); 
        }             
    });

    while(edges.length > 1){

        let head = edges[0];

        for(let i = 1; i < edges.length; i++){

            if(head.some(r => edges[i].includes(r))){

                edges[0] = Array.from(new Set(head.concat(edges[i])));
                edges.splice(i,1);
                break;

            } else {

                if(i === (edges.length -1)){

                    districts.push(edges[0]);
                    edges.shift();
                    break;
                }
            }
        }

        if(edges.length === 1) districts.push(edges[0]);
    }

    return  districts.length;
}


const test1 = { n0: [ 'n5' ],
n1: [ 'n7' ],
n2: [ 'n8', 'n3' ],
n3: [ 'n2', 'n8' ],
n4: [],
n5: [ 'n0', 'n7', 'n9' ],
n6: [ 'n9' ],
n7: [ 'n1', 'n5', 'n9' ],
n8: [ 'n2', 'n3' ],
n9: [ 'n6', 'n5', 'n7' ] };


console.log(countDistricts(test1));


//communitiy's solutions:

const countDistricts2 = city => {
    const connect = (d, district) => {
        return city[d].filter(next => !district.has(next)).reduce((d, next) => connect(next, d.add(next)), district);
    }
    
    return Object.keys(city)
      .reduce(([handled, count], key) => {
        return handled.has(key) 
          ? [handled, count] 
          : [[...connect(key, new Set())].reduce((h, d) => h.add(d), handled), count + 1];
      }, [new Set(), 0])[1];
  }



  function countDistricts3(city){
    var visited = [];
    var count = 0;
    Object.keys(city).forEach(v => {
      if (!visited.includes(v)) { 
        dfs(v, visited, count, city);
        count++;
      }
    });
    
    return count;  
  }
  
  function dfs(v, visited, count, city) {
    visited.push(v);
    city[v].forEach(n => {
      if (!visited.includes(n)) {
        dfs(n, visited, count, city);
      }
    });
  }


  function countDistricts4(city){
    var nbDistricts = 0;
    let viewed = new Set();  
    for (node in city){
      if (viewed.has(node)) continue;
      nbDistricts++;
      let pass = [node];
      while (pass.length >0){
        let currentNode = pass.pop();
        if (viewed.has(currentNode)) continue;
        city[currentNode].forEach(i=>pass.push(i));
        viewed.add(currentNode);
      };
    } 
    return nbDistricts;  
  }

