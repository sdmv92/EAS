const container = document.querySelector("#container")
const squaresButton = document.querySelector("#squaresButton")

squaresButton.addEventListener("click", function(){
    container.textContent = ""
    const numberOfSquares = prompt("Enter the number of squares")
    const gridSquares = numberOfSquares*numberOfSquares  
    for(initialValue = 0; initialValue < gridSquares ; initialValue++){
    
        const div = document.createElement("div")
        div.style.width = (600 / numberOfSquares)+'px' 
        div.style.height = (600 / numberOfSquares)+'px' 
        container.appendChild(div)
        div.addEventListener("mouseover",()=> div.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()}`, {once:true})
        div.addEventListener("mouseover",()=> div.style.opacity = Number(div.style.opacity) + 0.1)

    }

})


function randomColor(){
    return Math.floor(Math.random()*(255-0)+0)
}

function getUserInput(){
    const userInput = prompt("Enter the number of squares")
    return userInput
}
