import { removeClassInArray,addCustomClass,addClassInArray } from "../functions/customFunctions";


const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];
const tabAside = [...document.querySelectorAll('[data-aside-nav]')];

function tabFunction(initAttr, navAttr, contentAttr, activeClass = 'active'){ 

    initAttr.map((tabParent) => {
      if(tabParent) {

        const tabNav = [...tabParent.querySelectorAll(`[${navAttr}]`)];
        const tabContent = [...tabParent.querySelectorAll(`[${contentAttr}]`)];
  
        tabNav.map((nav) => {
          nav.addEventListener('click', (e) => {
            e.preventDefault();
          
            const activeTabAttr = e.target.getAttribute(`${navAttr}`);

            if(tabParent.querySelector('[data-tab="3"]').classList.contains('active')){
              removeClassInArray(tabAside, activeClass);
              addCustomClass(tabParent.querySelector(`[data-aside-nav="${activeTabAttr}"]`), activeClass);
            }
          
            removeClassInArray(tabNav, activeClass);
            removeClassInArray(tabContent, activeClass);
            addCustomClass(tabParent.querySelector(`[${navAttr}="${activeTabAttr}"]`), activeClass);
            addCustomClass(tabParent.querySelector(`[${contentAttr}="${activeTabAttr}"]`), activeClass);  
          });
        });
      }
    });
}


tabParents.map((tabParent) => {

  if(tabParent) {
    tabAside.map((btn) => {
      btn.addEventListener('click', function(e){
        e.preventDefault();

        removeClassInArray(tabAside, 'active');
        addCustomClass(this, 'active');
        removeClassInArray([...tabParent.querySelectorAll('[data-tab]')], 'active')
        removeClassInArray([...tabParent.querySelectorAll('[data-tab-content]')], 'active')
        addCustomClass(tabParent.querySelector('[data-tab="3"]'), 'active');
        addCustomClass(tabParent.querySelector('[data-tab-content="3"]'), 'active');

        const currentData = e.target.getAttribute('data-aside-nav');

        removeClassInArray([...tabParent.querySelectorAll('[data-analitics-tab]')], 'active');
        removeClassInArray([...tabParent.querySelectorAll('[data-analitics-content]')], 'active');
        addCustomClass(tabParent.querySelector(`[data-analitics-content="${currentData}"]`), 'active');
        addCustomClass(tabParent.querySelector(`[data-analitics-tab="${currentData}"]`), 'active');
        
      })
    })
  }
})
 
tabFunction(tabParents, 'data-tab', 'data-tab-content');
tabFunction(tabParents, 'data-inner-tab', 'data-inner-content');
tabFunction(tabParents, 'data-analitics-tab', 'data-analitics-content');
tabFunction(tabParents, 'data-statistics-tab', 'data-statistics-content');




