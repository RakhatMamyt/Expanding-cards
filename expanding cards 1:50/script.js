const panels = document.querySelectorAll('.panel')
// on mouse over the panels should open/close
panels.forEach((panel)=>{
  panel.addEventListener('mouseover',()=>{
    removeActiveClasses();
    panel.classList.add('active');

  })

})
const removeActiveClasses = ()=>{
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}