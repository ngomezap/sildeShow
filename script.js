
const imgList = Array.from(document.querySelectorAll('#slides>img'));
const mainPic = document.getElementById('mainPic');
const dots = document.querySelectorAll('#dots>div');


imgList.forEach((n) => {
    n.addEventListener("click", (e) => {
        mainPic.src = e.target.getAttribute('src');
        selectDot(e.target);
    })
})


const selectDot = function(e){
    let label = e.getAttribute('alt');
    dots.forEach((dot) => {
        if(dot.id.charAt(dot.id.length - 1) === label.charAt(label.length - 1)){
            dot.classList.add("selected");
        }else{
            dot.classList.remove("selected");
            dot.classList.add("notSelected");
        }
    })
}

function changePic(){
    let num;
    imgList.forEach((im) => {
        if(im.src === mainPic.src){
            let alt = im.getAttribute('alt');
            num = parseInt(alt.charAt(alt.length - 1));
        }
    })
    if(num !== 4){
        mainPic.src = imgList[num].src;
        selectDot(imgList[num]);
    }else{
        mainPic.src = imgList[0].src;
        selectDot(imgList[0]);
    }

}

setInterval(changePic, 5000);