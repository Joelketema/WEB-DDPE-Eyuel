const body = document.body
const anchor = document.getElementsByTagName('a')

anchors = Array.from(anchor)
const dark = document.querySelector('.dark')

body.style.backgroundColor = "white"
body.style.color = "black"
dark.style.border = "1px solid black"

dark.addEventListener('click', () => {

  if (body.style.backgroundColor == "white")
  {
    body.style.backgroundColor = "black"
    body.style.color = "white"
    dark.style.border = "1px solid white"  
    dark.innerHTML = "Light Mode"
  anchors.forEach(element => {
    element.style.color = "white"
  });
    }

  else
  {
    body.style.backgroundColor = "white"
    body.style.color = "black"
    dark.style.border = "1px solid black"
    dark.innerHTML = "Dark Mode"
    anchors.forEach(element => {
      element.style.color = "blue"
    });

    }

  
})


dark.style.cursor = "pointer"  
dark.style.padding = "10px"  
dark.style.borderRadius= "6px"  
dark.style.border = "1px solid black"  
const inputs = document.getElementsByTagName('input')
Iarray = Array.from(inputs)

Iarray.forEach(i => {
  i.addEventListener('focus', () => {
    i.style.border = "2px solid white"
    i.style.outline  ="2px solid orange"
  })

  i.addEventListener('blur', () => {
    i.style.border = "2px solid black"
    i.style.outline  ="2px solid white"
  })
})

