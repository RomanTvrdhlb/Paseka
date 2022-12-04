import vars from '../_vars';
import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { removeClassInArray,addCustomClass, removeCustomClass } from "../functions/customFunctions";

function modalInit(buttonsArray, buttonAttribute ,activeClass) {
  buttonsArray.map(function(btn){
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      const currentModalId = e.target.getAttribute(`${buttonAttribute}`)
      addCustomClass(vars.overlay, activeClass);
      addCustomClass(vars.overlay.querySelector(`[data-popup="${currentModalId}"]`), activeClass);
      disableScroll();
    });

  })
}

vars.overlay?.addEventListener('click', function(e){
  const closeBtn = vars.overlay.querySelector(`${'[data-popup]'+ '.' + vars.activeClass} .close`)
  closeBtn && closeBtn.addEventListener('click', commonFunction());
  if (e.target === vars.overlay) commonFunction();
});

modalInit(vars.modalsButton, "data-btn-modal", vars.activeClass);

const commonFunction = function() {
  removeCustomClass(vars.overlay, vars.activeClass);
  removeClassInArray(vars.modals, vars.activeClass);
  enableScroll();
}













// if (overlay) {
//   plunkModalBtns(propositionBtns,overlay,propositionModal);
//   plunkModalBtns(identBtns,overlay,identModal);

//   hideModalHandler(propositionModal);
//   hideModalHandler(identMobileModal);
//   hideModalHandler(identModal);

//   overlay.addEventListener('click', function(e){
//     if (e.target.classList.contains('overlay')) {
//       hideModal(overlay,propositionModal);
//       hideModal(overlay,identModal);
//     }
//   });
// }



