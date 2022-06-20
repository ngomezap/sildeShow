
const imgList = document.querySelectorAll('#slides>img');
const mainPic = document.getElementById('mainPic');
const dots = document.querySelectorAll('#dots>div');


imgList.forEach((n) => {
    n.addEventListener("click", (e) => {
        mainPic.src = e.target.getAttribute('src');
        selectDot(e);
    })
})


const selectDot = function(e){
    let label = e.target.getAttribute('alt');
    dots.forEach((dot) => {
        if(dot.id.charAt(dot.id.length - 1) === label.charAt(label.length - 1)){
            dot.classList.add("selected");
        }else{
            dot.classList.remove("selected");
            dot.classList.add("notSelected");
        }
    })
}