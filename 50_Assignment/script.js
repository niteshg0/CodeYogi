let num= [3, 23, 7, 17, 42, 9, 22, 4, 33, 88, 13, 27, 10, 64];

function show(event){
  let result= document.getElementById("result");

  if(event.target.innerHTML=="even"){
    let newArr= num.filter((n)=> n%2==0);
    console.log(newArr);

    result.innerHTML= newArr;
  }
  else{
    let newArr= num.filter((n)=> n%2!=0);

    result.innerHTML= newArr;
  }
  
  
}
 