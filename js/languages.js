const Bars = document.getElementsByClassName("bar_container")
const Circles = document.getElementsByClassName("circleval")

const LangValues = [
    "90", "85", "80", "75", "70", "65", "60", "55"
]

for ( let i = 0; i < Bars.length; i++) {
    const Bar = Bars[i]

    Bar.style.width = LangValues[i] + "%"
    Circles[i].innerHTML = LangValues[i]
}