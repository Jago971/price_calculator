const slider = document.getElementById("slider")
const pageViews = document.querySelector(".pageviews>p:first-of-type")
const price = document.querySelector(".price>h1")

pageViews.innerHTML = getPageViews(slider.value)
price.innerHTML = getPrice(slider.value)

slider.addEventListener("change", () => {
    pageViews.innerHTML = getPageViews(slider.value)
    price.innerHTML = getPrice(slider.value)
})

function getPageViews(value) {
    if(value == 100) {
        return '1M'
    } else {
        return `${value * 10}K`
    }
}

function getPrice(value) {
    if(value == 100) {
        return 36
    } else if (value < 5) {
        return 8
    } else if (value < 10) {
        return 12
    } else if (value < 50) {
        return 16
    } else {
        return 24
    }
}