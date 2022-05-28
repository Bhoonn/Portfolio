const RightImages = document.getElementsByClassName("work_right")

const Images = [
    "images/pw1.gif",
    "images/pw2.gif",
    "images/pw3.gif",
    "images/pw4.gif",
]

for ( let i = 0; i < RightImages.length; i++) {
    RightImages[i].style.backgroundImage = "url('" + Images[i] + "')"
}