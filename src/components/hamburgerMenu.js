const hamburger = document.querySelector(".hamburger")

//Function get a element on which mouse click and add it active class
const activeClass = function(){
    console.log(this);
    const nameOfElement = this.classList[0];
    const activeClass = nameOfElement+'--active';
    this.classList.toggle(activeClass);

    console.log(activeClass);
}

hamburger.addEventListener("click", activeClass);