function starColor(id,colorValue,flag=0){
    let startid = 1;
    let endid = parseInt(id);
    for(let i=startid; i<=endid; i++){
       let act = `star${i}`;
       if(flag===0){
       document.querySelector(`.${act}`).style.color = colorValue;
       }
       else{
          let btn =  document.querySelector(`.${act}`);
          btn.classList.add("goldcolor");
          document.querySelector("#score").innerHTML = `Your rating: ${endid}/5`
       }
    }
 }
 
 function fillfun(event){
    starColor(event.id,"#FFD700");
 }
 
 function removefun(event){
    starColor(event.id,"white");
 }
 
 function fillstar(event){
    starColor(event.id,"white",1);
    document.querySelector("#container").style.pointerEvents = "none";
 
 }