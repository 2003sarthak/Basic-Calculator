let string="";
let buttons=document.querySelectorAll('.btn');
let history=[];
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="="){
        history.push('\n');
        history.push(string);
        history.push('\n');
        string=eval(string);
        document.querySelector('input').value=string;
        history.push("="+string);
      }
      else if(e.target.innerHTML=="C"){
        string="";
        document.querySelector('input').value=string;
        while(history.length > 0) {
          history.pop();
      }
      }
      else if(e.target.innerHTML=='<i class="fa-solid fa-clock-rotate-left"></i>'){
        alert(history);
      }
      else if(e.target.innerHTML=='<i class="fa-solid fa-delete-left"></i>'){
        string=string.slice(0,-1);
        document.querySelector('input').value=string;
        history.pop(string);
      }
      else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
  })
})