const boxes = document.querySelectorAll('.content');

window.addEventListener('scroll' , checkbox)

checkbox()

function checkbox(){
    const bottomline = window.innerHeight -100;

    boxes.forEach((content) => {
        const boxTop = content.getBoundingClientRect().top

        if(boxTop < bottomline){
            content.classList.add('show')
        }else{
            content.classList.remove('show')
        }
    }
    )
}

