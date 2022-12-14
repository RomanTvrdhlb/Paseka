import { removeClassInArray,addCustomClass } from "../functions/customFunctions";


const tabParents = [...document.querySelectorAll('[data-tabs-parrent]')];

function tabFunktion(initAttr, navAttr, contentAttr, activeClass = 'active'){ 

  initAttr.map((tabParent) => {
    if(tabParent) {
      const tabNav = [...tabParent.querySelectorAll(`[${navAttr}]`)];
      const tabContent = [...tabParent.querySelectorAll(`[${contentAttr}]`)];

      tabNav.map((nav) => {
        nav.addEventListener('click', (e) => {
          e.preventDefault();
        
          const activeTabAttr = e.target.getAttribute(`${navAttr}`);
          removeClassInArray(tabNav, activeClass);
          removeClassInArray(tabContent, activeClass);
          addCustomClass(tabParent.querySelector(`[${navAttr}="${activeTabAttr}"]`), activeClass);
          addCustomClass(tabParent.querySelector(`[${contentAttr}="${activeTabAttr}"]`), activeClass);
          
        });
      });
    }
  });

}

tabFunktion(tabParents, 'data-tab', 'data-tab-content');
tabFunktion(tabParents, 'data-inner-tab', 'data-inner-content');
tabFunktion(tabParents, 'data-analitics-tab', 'data-analitics-content');




