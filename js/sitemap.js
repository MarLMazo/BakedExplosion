
function sitemap(){

  var spanIcon= document.querySelectorAll('.main-content span');
  var descrip = document.getElementsByClassName('descrip')


  for(let i=0;i<spanIcon.length; i++){
      // Adding listener to each Span once click, it toggle the class name of iconfolder and iconOpenfolder
      spanIcon[i].addEventListener("click",function(){
      this.classList.toggle("iconfolder");
      this.classList.toggle("iconOpenfolder");
      
      //descrip.innerHTML = "<h2>"+ this.innerText+"</h2>";
      // Run the initialize function to hide all description tag
      Initialize();
      descrip[i].classList.remove("hidden");

      if( this.nextElementSibling === null){
        //If Span has no next UL-tag,
        //console.log("This is the last one"); 
        // nothing to do when the value is null
      }
      else{
        this.nextElementSibling.classList.toggle("hidden");
      }
      // for(let i =0;i<descrip.length; i++){
      //   descrip[i].classList.add("hidden");
      // }
      
    });
  }

  //Add hidden class to each description tag
  function Initialize(){
    for(let i =0; i<descrip.length;i++){
      descrip[i].classList.add("hidden");
    }
  }
  Initialize();
}

sitemap();
