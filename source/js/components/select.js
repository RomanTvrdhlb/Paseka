
const select = document.querySelectorAll(".select");
if (select.length) {
  select.forEach((item) => {
    const selectInput = item.querySelector(".select__input");
    const selectCurrent = item.querySelector(".select__current");

 if(selectInput){
  let currentId = selectCurrent.dataset.id;
    selectInput.setAttribute("value", currentId)
 }   
    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const innerSelect = event.target.innerHTML;
      
      if (el === "choosen") {
        selectCurrent.innerHTML = innerSelect;
        selectCurrent.setAttribute("data-id", event.target.dataset.id && event.target.dataset.id);
        selectInput.setAttribute("value", event.target.dataset.id);
      }
      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
}
