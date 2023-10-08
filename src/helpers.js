export const showModal = function (id){
    const modal = document.getElementById(id)
    if(modal && modal.classList.contains('hidden')){
        modal.classList.add('flex')
        modal.classList.remove('hidden')
    }
}

export const closeModal = function (id){
    const modal = document.getElementById(id)
    if(modal && modal.classList.contains('flex')){
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
}

export const closeAllModals = function (){
    const modals = document.getElementsByClassName('modal')
    for(let i = 0; i < modals.length; i++){
        let modal = modals.item(i)
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }
}