const arrow = document.querySelectorAll('.arrow')
const links = document.querySelectorAll('.ul-links')

const active = (event) => {
    event.preventDefault()
    const el = event.target
    const id = el.getAttribute('id')

    for (let i = 0; i < links.length; i++) {
        const idEl = links[i].getAttribute('id')
        const verifyId = id === idEl
        const verifyIdEl = idEl === links[i].id
        const verifyClass = "active-links"
        verifyId && verifyIdEl && verifyClass ? links[i].classList.toggle(verifyClass) : false;
    }

    for (let i = 0; i < arrow.length; i++) {
        const verifyId = id === arrow[i].id
        const verifyClass = "fa-angle-right"
        if (verifyId && verifyClass) {
            if( true ) {arrow[i].classList.toggle('fa-angle-right')}
            arrow[i].classList.toggle('fa-angle-down')
        }
    }
    
}

arrow.forEach(item => item.addEventListener('click', active))
