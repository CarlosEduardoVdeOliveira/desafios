const arrow = document.querySelectorAll('.arrow')
const links = document.querySelectorAll('.ul-links')


const toggleClass = (id) =>{
    for (let i = 0; i < links.length; i++) {
        const idEl = links[i].getAttribute('id')
        const verifyId = id === idEl
        const verifyIdEl = idEl === links[i].id
        const verifyClass = "active-links"
        verifyId && verifyIdEl && verifyClass ? links[i].classList.toggle(verifyClass) 
            : links[i].classList.remove(verifyClass);
    }
}

const toggleArrow = (id) => {
    for (let i = 0; i < arrow.length; i++) {
        const verifyId = id === arrow[i].id
        const verifyClass = "fa-angle-right"
        if (verifyId && verifyClass) {
            arrow[i].classList.toggle('fa-angle-right')
            arrow[i].classList.toggle('fa-angle-down')
        }else{
            arrow[i].classList.add("fa-angle-right")
            arrow[i].classList.remove("fa-angle-down")
        }
    }
}

const active = (event) => {
    event.preventDefault()
    const el = event.target
    const id = el.getAttribute('id')
    toggleClass(id)
    toggleArrow(id)
}

arrow.forEach(item => item.addEventListener('click', active))
