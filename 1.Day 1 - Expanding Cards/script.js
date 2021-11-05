const panels = document.querySelectorAll(".panel");
//console.log(panels[0]); //prints out the node list

//forEach is a method used to loop thro the array/nodelist
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // console.log(123);
    //remove active class from all before you add one
    removeActiveClasses();
    //add active class on the one you click
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
