
let options ={
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

const imgdiv = document.querySelectorAll(".all_images");

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {    
        if (entry.isIntersecting) {

             var aa = gsap.to(entry.target.children,{
                opacity: 1,
                duration: 1,
                y: 0,
                stagger: 0.3,
                delay:.2,
            })                 
  
        } else {   
          return;
        }    
    })
  },options);

  imgdiv.forEach(section => {
    observer.observe(section);
  })