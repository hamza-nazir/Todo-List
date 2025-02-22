let main = document.querySelector('.main');
let div = document.createElement('div');
let btn = document.querySelector('.p');
let input = document.getElementById('input');
let data = document.getElementById('data');
let parent = document.querySelector('.parent');

btn.addEventListener('click', () => {
 
let row=document.createElement('tr');
row.style.boxSizing="border-box"
let radio=document.createElement('input');
let cross=document.createElement('span');
cross.innerHTML=`<i class="fa-solid fa-xmark"></i>`
radio.type='radio'
if(input.value==""){
    return
}
row.innerHTML=`<td class="hamza" > ${input.value} </td>`;


row.prepend(radio);
row.appendChild(cross)
parent.append(row);

cross.addEventListener('click', () => {
    cross.classList.add('pointer');
row.remove();
})

input.value="";

  let currentState="unCheck";
radio.addEventListener('click',()=>{

  
  
      if(currentState=="unCheck"){
        console.log('0');
        row.style.textDecoration="line-through";
        currentState="check"
    }
    else{
        console.log('1');
          currentState="unCheck";
          row.style.textDecoration="none";
    }
      
})
    






})
