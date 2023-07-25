const btn = document.querySelector('.btn')

btn.addEventListener('click',() => {
    const request = new XMLHttpRequest()
    request.open("GET", "format.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector('.mister').innerHTML = data.mister
        document.querySelector('.missis').innerHTML = data.missis
        document.querySelector('.son').innerHTML = data.son
    }
})