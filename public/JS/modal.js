export default function Modal() {
  function open(){
    // add class active
    document.querySelector('.modal-wrapper').classList.add('active');
  }
  function close(){
    // remove class active
    // document.querySelector('.modal-wrapper').classList.remove('active');
  }

  return {
    open, close
  }
}