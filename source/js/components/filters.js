const myFilters = [...document.querySelectorAll('.catalog-filters__list')];


const filterClickHandler = function() {
  const myElement = this;
  myElement.classList.contains('active') ?
  myElement.classList.remove('active') :
  myElement.classList.add('active');
}

myFilters.map((myFilter) => {
  const filterItems = [...myFilter.querySelectorAll('.catalog-filters__button')];

  filterItems.map((filterItem)=> {
    filterItem.addEventListener('click', filterClickHandler);
  });
});
