 document.getElementById("myText").style.height="30px";
 document.getElementById("myText").style.width="50%";
 document.getElementById("myText").style.fontSize="18pt";
 document.getElementById("myText").style.textAlign="center";
 let i=0;
 let beat = new Audio('Jingle Bells.mp3');
 function myplay(){
  beat.play();
 }
 function mypause(){
  beat.pause();
 }
 function myreload(){
  beat.load();
 }
  function myFunction() {
    var x = document.getElementById("myText").value
    if(x===""){
      alert("You must write something!");
      return;
    }
    const div = document.createElement("div")
    document.body.appendChild(div);
    var button1 = document.createElement('BUTTON');
    button1.innerHTML='<i class="fa fa-square-o" aria-hidden="true"></i>';
    button1.classList.add("btn1");
    button1.classList.add("hover");
    div.innerHTML = x;
    document.getElementById("myText").value="Write a task";
    div.classList.add("task");
    div.classList.add("activetask");
    
    div.appendChild(button1);
    div.id= i;
    var button = document.createElement('BUTTON');
    button.classList.add("btn");
    button.classList.add("hover");
    button.innerHTML='<i class="fa fa-trash"></i>';
    div.appendChild(button);
    button.addEventListener('click',function() {
      div.remove();
      i--;
    });
    var ok= 0;
    button1.addEventListener('click',function() {
      if(ok===1){
      button1.innerHTML = '<i class="fa fa-square-o" aria-hidden="true"></i>';
      div.classList.remove("completetask");
      div.classList.add("activetask");
      ok=0
    }else{
      button1.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
      div.classList.remove("activetask");
      div.classList.add("completetask");
      ok=1;
    }
    });
    i++;
  }
  var input = document.getElementById("myText");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      myFunction();
    }
  });
  function remove(element) {
    element.remove();
  }
  function myFunction1(){
    const elements = document.getElementsByClassName("task");
    console.log(elements);
    for(let element=elements.length-1; element>=0; element--){
      remove(elements[element]);
    }
  }
  let k=0;
  function myFunction2(){
    const elements = document.getElementsByClassName("btn1");
    const elements1=document.getElementsByClassName("task");
    if(k===1){
      document.getElementById("completeall").textContent="Complete all tasks";
      for(let element=elements.length-1; element>=0; element--){
        elements[element].innerHTML = '<i class="fa fa-square-o" aria-hidden="true"></i>';
      }
      for(let element1=elements1.length-1; element1>=0; element1--){
        elements1[element1].classList.remove("completetask");
        elements1[element1].classList.add("activetask");
      }
      k=0;
    }else{
      document.getElementById("completeall").textContent="Uncomplete all tasks";
      for(let element=elements.length-1; element>=0; element--){
        elements[element].innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
      }
      for(let element1=elements1.length-1; element1>=0; element1--){
        elements1[element1].classList.remove("activetask");
        elements1[element1].classList.add("completetask");
      }
      k=1;
    }
  }
  var alltask;
  var j;
  setInterval(function (){
    alltask=document.getElementsByClassName("task");
    j=alltask.length;
    document.getElementById("alltaskb").innerHTML="All Tasks:"+j;
  },1000);
  var completetask;
  var j1;
  setInterval(function (){
    completetask=document.getElementsByClassName("completetask");
    j1=completetask.length;
    document.getElementById("completetaskb").innerHTML="Complete Tasks:"+j1;
  },1000);
  var activetask;
  var j2;
  setInterval(function (){
    activetask=document.getElementsByClassName("activetask");
    j2=activetask.length;
    document.getElementById("activetaskb").innerHTML="Active Tasks:"+j2;
  },1000);
  let z=1;
  var alltaskinterval;
  var completetaskinterval;
  var activetaskinterval;

  function myFunction3(){
    clearInterval(alltaskinterval);
    clearInterval(activetaskinterval);
    completetaskinterval=setInterval(function (){
    const elements=document.getElementsByClassName("task");
    const elements1=document.getElementsByClassName("completetask");
    for(let element=elements.length-1; element>=0; element--){
      elements[element].style.display="none";
    }
    for(let element1=elements1.length-1; element1>=0; element1--){
      elements1[element1].style.display="block";
    }
  }, 1000);
    
  }
  function myFunction4(){
    clearInterval(alltaskinterval);
    clearInterval(completetaskinterval);
    activetaskinterval=setInterval(function (){
    const elements=document.getElementsByClassName("task");
    const elements1=document.getElementsByClassName("activetask");
    for(let element=elements.length-1; element>=0; element--){
      elements[element].style.display="none";
    }
    for(let element1=elements1.length-1; element1>=0; element1--){
      elements1[element1].style.display="block";
    }
  },1000);
  }
  function myFunction5(){
    clearInterval(activetaskinterval);
    clearInterval(completetaskinterval);
    alltaskinterval=setInterval(function (){
    const elements=document.getElementsByClassName("task");
    for(let element=elements.length-1; element>=0; element--){
      elements[element].style.display="none";
    }
    for(let element=elements.length-1; element>=0; element--){
      elements[element].style.display="block";
    }
  },1000);
  }