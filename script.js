const slider = document.getElementById("slider")
const pageViews = document.querySelector(".pageviews>p:first-of-type")
const price = document.querySelector(".price>h1")
const monthYear = document.querySelector(".price>p")
const yearly = document.getElementById("yearly")
let isYearly = false;

pageViews.innerHTML = getPageViews(slider.value)
price.innerHTML = `$${getPrice(slider.value)}.00`

yearly.addEventListener("click", () => {
    if(yearly.checked == true) {
        isYearly = true
        price.innerHTML = `$${getPrice(slider.value)}.00`
        monthYear.innerHTML = `&nbsp/ ${monthOrYear(isYearly)}`
    } else {
        isYearly = false
        price.innerHTML = `$${getPrice(slider.value)}.00`
        monthYear.innerHTML = `&nbsp/ ${monthOrYear(isYearly)}`
    }
})

function monthOrYear(isYearly) {
    if(isYearly) {
        return 'yearly'
    } else {
        return 'monthly'
    }
}

slider.addEventListener("change", () => {
    pageViews.innerHTML = getPageViews(slider.value)
    price.innerHTML = `$${getPrice(slider.value)}.00`
    monthYear.innerHTML = `&nbsp/ ${monthOrYear(isYearly)}`
})

function getPageViews(value) {
    if (value == 100) {
        return '1M'
    } else {
        return `${value * 10}K`
    }
}

function getPrice(value) {
    if (value == 100) {
        if(isYearly) {
            return yearlyBilling(36)
        } else {
            return 36
        }
    } else if (value < 5) {
        if(isYearly) {
            return yearlyBilling(8)
        } else {
            return 8
        }
    } else if (value < 10) {
        if(isYearly) {
            return yearlyBilling(12)
        } else {
            return 12
        }
    } else if (value < 50) {
        if(isYearly) {
            return yearlyBilling(16)
        } else {
            return 16
        }
    } else {
        if(isYearly) {
            return yearlyBilling(24)
        } else {
            return 24
        }
    }
}

function yearlyBilling (value) {
    return value * 0.75 * 12
}