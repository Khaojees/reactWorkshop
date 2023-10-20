const inputBox = document.getElementById('input-box')
const toDoList = document.getElementById('toDoList')

add=()=>{
      if(inputBox.value === ""){
            alert("Put some thing...")
      }else{
            let li = document.createElement('li')
            li.innerHTML = inputBox.value
            toDoList.appendChild(li)
            let span = document.createElement('span')
            span.innerHTML = "\u00d7"
            li.appendChild(span)            
      }
      inputBox.value = ""
      saveData()
}

toDoList.addEventListener('click', (e)=>{
      if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked")
            saveData()
      }
      else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
            saveData()
      }
},false)

saveData=()=>{
      localStorage.setItem("data",toDoList.innerHTML)
}
showTask=()=>{
      toDoList.innerHTML = localStorage.getItem('data')
}
showTask()