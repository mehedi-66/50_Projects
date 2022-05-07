
const panels = document.querySelectorAll('.panel');

panels.forEach( (panel, i) => {
    // console.log(panel);
    panel.addEventListener('click', ()=>{
        // console.log(123);
        
        // remove all actives class
        removeActiveClass();

        // add new active class
        panel.classList.add('active'); 
    })
});


function removeActiveClass(){
    panels.forEach( (panel)=>{
         panel.classList.remove('active');
    }) 
}