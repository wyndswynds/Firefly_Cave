const holes = [...document.querySelectorAll(".hole")]
const scoreEl = document.querySelector(".score span")
//console.log (holes)
let score = 0

function run (){

document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 20;

    var gameTimer = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeleft +
        "&nbsp"+"seconds remaining";

        timeleft -=1;
        if(timeleft<=0){
            clearInterval(gameTimer);
            document.getElementById("countdown").innerHTML = "Time's UP!"

            //Tyring to 
            if(timeleft <1){
                document.getElementById('.hole.firefly').click = null;
                //clearTimeout(countdown);
                alert("Game OVER!");
                element.innerHTML = "<h1> GAME OVER!</h1>";
              };

                // this inner code stop attempt is not working. Trying a 2nd method nullifying click image with timer. 
          //  timeleft = 0;
        //innerHTML = "Time's UP!"
        
        }
    }, 1000);
}


)
    const i = Math.floor(Math.random() * holes.length)
    //console.log(i)
    const hole = holes[i]
    //let timer = 10

    const img = document.createElement("img")
    img.classList.add("firefly")
    img.src = "/JAVA_SCRIPT/CAVE_4/Firefly Drawn.png"

    img.addEventListener('click', () => {
        score += 1
        scoreEl.textContent = score
    })

    hole.append(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 750
    )
}

run()