const parrent = document.querySelector('[data-show]');

if(parrent){
    const button = document.querySelector('.click');
    const items = [...document.querySelectorAll('.statistics-list__item')];
    let showCounter = +parrent.getAttribute('data-show');
    const showDefault =  1;

    items.forEach(function(item){
        item.style.display = 'none';
    });

   function showMoreAdd(currentArray, currentCounter) {
    [...currentArray.slice(0, currentCounter)].forEach(function(item){
        item.style.display = 'grid';
    });
   }

   showMoreAdd(items, showDefault);
   

    button.addEventListener('click',function(e){
    e.preventDefault;

    showMoreAdd(items, showCounter + showDefault)

    if(showCounter >= items.length){
        button.style.cssText = 'opacity: 0.2; pointer-events: none;'
    }
    showCounter +=  showCounter;
    })
}





