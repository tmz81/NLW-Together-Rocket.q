import Modal from './modal';

const modal = Modal()


const checkBtn = document.querySelector('.actions a.check')

checkBtn.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
    
  })
})

