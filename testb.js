const routes = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 3,
      y: 3,
    },
    {
      x: 5,
      y: 4,
    },
    {
      x: 9,
      y: 10,
    },
  ];
  
  const startPoint = {
    x: 3,
    y: 2,
  };
  const ans = [];
  //Assume distance : Modulus of x1-x2 + y1-y2
  const sortedSchedules = (point) => {
      let min = 100;
      if(routes.length - 1 === 0 ){
        ans.push(routes[0])
      }

      for(let i = 0 ; i < routes.length-1 ; i++){
        let distanceA = Math.abs(routes[i].x - point.x) + (Math.abs(routes[i].y - point.y));
        let distanceB = Math.abs(routes[i+1].x - point.x) + (Math.abs(routes[i+1].y - point.y));

      if(distanceA < min || distanceB < min){
        if(distanceA > distanceB){
          min = distanceB
        }else{
          min = distanceA
        }
      }
        
    }
    for(let i = 0 ; i < routes.length ; i++){
        let distance = Math.abs(routes[i].x - point.x) + (Math.abs(routes[i].y - point.y));
        if(distance === min){
            ans.push(routes[i]);      
        }
    }

    for(let i = 0 ; i<routes.length ; i++){
        if(routes[i].x == ans[ans.length - 1].x && routes[i].y == ans[ans.length - 1].y){
          routes.splice(i,1);
        }
    }
    return ans;
  };

  do{
    if(ans.length == 0){
      console.log(sortedSchedules(startPoint));
    }
    else{
      console.log(sortedSchedules(ans[ans.length - 1]));
    }
  }while(routes.length != 0)

  
  //   const answer = [
    //     { x: 3, y: 3 },
    //     { x: 5, y: 4 },
    //     { x: 1, y: 1 },
    //     { x: 9, y: 10 },
    //   ];