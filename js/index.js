
// move to the top
let companyIntro = document.getElementById('companyIntro');
  
let moveTopIcon=document.getElementById('moveupicon');
window.addEventListener('scroll',(e)=>{
    
    if (window.scrollY>=380) {
        moveTopIcon.style.visibility= 'visible';
        moveTopIcon.style.left= '90%';
       
    }else{
        moveTopIcon.style.visibility= 'hidden';
        moveTopIcon.style.left= '120%';
    }

})
moveTopIcon.addEventListener('click',(e)=>{
window.scrollTo(0,0)

})

// companyIntro animation


// contact form submit