function addRemoveActionToSantaImg() {
    var items = document.getElementsByClassName("santa");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            this.style.opacity = "0";
            this.style.transition = "1s";
            setTimeout(() => {
                this.remove();
            }, 1000);
        });
    
    }
}

addRemoveActionToSantaImg();

document.getElementsByTagName('img').addEventListener('click', addRemoveActionToSantaImg)