export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')
  const buttonCancel = document.querySelector('.button.cancel')

  buttonCancel.addEventListener('click', close)

  function open(){
    // add class active
    modalWrapper.classList.add('active');
  }
  function close(){
    // remove class active
    modalWrapper.classList.remove('active');
  }

  return {
    open, close
  }
}