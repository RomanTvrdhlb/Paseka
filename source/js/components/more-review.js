const showReviews = document.querySelector('.show-reviews');


if (showReviews) {
  const reviewItems = [...showReviews?.querySelectorAll('.reviews-list__item')];
  const showMore = showReviews?.querySelector('.show-more');
  let initialValue = 4;

  const itemLenght = reviewItems.length;
  function showInitialItems(itemArray,count) {
    [...itemArray.slice(0, count)].map(function(initialItem){
      initialItem.style.display = 'flex';
    });
  }
  reviewItems.map(function(reviewItem){
    reviewItem.style.display = 'none';
  });
  showInitialItems(reviewItems,initialValue);
  showMore.addEventListener('click', function(e){
    e.preventDefault();
    initialValue += 5;
    initialValue >= itemLenght ?
    showMore.classList.add('disable'):
    showMore.classList.remove('disable');
    showInitialItems(reviewItems,initialValue);
  });
}


