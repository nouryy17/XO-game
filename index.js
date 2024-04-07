let title=document.querySelector(".header h1")
trus = "x"
let itm=[]
function game(id){
    let element=document.getElementById(id)
    if (trus ==="x" && element.innerHTML=="") {
        element.innerHTML="X"
        title.innerHTML="O"
        trus="O"
    }
    else if (trus ==="O"  && element.innerHTML=="") {
        element.innerHTML="O"
        title.innerHTML="X"
        trus="x"

    } 
    winner()
}
function winner(){
    for(let i=1 ;  i<10 ; i++){
    itm[i]=document.getElementById("itme"+i).innerHTML
    }
    
    if (itm[1] ==itm[2] && itm[2] ==itm[3] && itm[1] !="") {
      cheng(1,2,3)

    }
    else if (itm[4] ==itm[5] && itm[5] ==itm[6] && itm[6] !="") {
      cheng(4,5,6)
      }
      else if (itm[7] ==itm[8] && itm[8] ==itm[9] && itm[8] !="") {
        cheng(7,8,9)
      }
      else if (itm[1] ==itm[4] && itm[4] ==itm[7] && itm[7] !="") {
        cheng(1,4,7)

      }
      else if (itm[2] ==itm[5] && itm[5] ==itm[8] && itm[8] !="") {
        cheng(2,5,8) 
      }
      else if (itm[3] ==itm[6] && itm[6] ==itm[9] && itm[9] !="") {
        cheng(3,6,9)  
      }
      else if (itm[3] ==itm[5] && itm[5] ==itm[7] && itm[7] !="") {
        cheng(3,5,7)  
      }
      else if (itm[1] ==itm[5] && itm[5] ==itm[9] && itm[9] !="") {
        cheng(1,5,9)  
      }
}
function cheng(win1,win2,win3) {
  title.innerHTML=`the winner is ${itm[win1]}`
  document.getElementById("itme"+win1).style.background="#000"
  document.getElementById("itme"+win2).style.background="black"
  document.getElementById("itme"+win3).style.background="black"
 setInterval(function () {
  title.innerHTML +=" ."
 },1000)
setTimeout(function () {
  location.reload()
},4000)
}