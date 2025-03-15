const slides = document.querySelectorAll(".slides")
var counter=0;
console.log(slides);
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`;
    }
)
function changeback(){
    var background=document.querySelector(".container")
    background.style.background = `url('${slides[counter].currentSrc}') no-repeat center center fixed`;
    background.style.backgroundSize='cover';
}
function goright(){
    counter++;
    counter=counter%5;
    slideImage();
    changeback();
}
function goleft(){
    if(counter==0)
        counter=4
    else
    counter--;
slideImage();
changeback();
}
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}