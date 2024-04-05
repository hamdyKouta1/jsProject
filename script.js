console.log("welecom");
var seconds = 0;
var minutes = 0;

var emojis = [
    "❤️","❤️","😍","😍",
    "😒","😒","😊","😊",
    "😘","😘","😎","😎",
    "😢","😢","🤣","🤣" ];
    var counter = 0;
    var totalCounter = 0;
    var flag = false;
    var suffulle_emoji = emojis.sort(()=>(Math.random() - .5))
    for (var i = 0 ; i <emojis.length ; i++) {
    var box = document.createElement("div")
    box.className = "item"
    box.innerHTML = suffulle_emoji[i]
   
    
    box.onclick = function(){
        if(!flag){
            startTimer();
            console.log("ffffffffffff");
            document.querySelectorAll('.count')[0].classList.add("addBackground")
            document.querySelectorAll('.timer')[0].classList.add("addBackground")

            flag = true;
        }
       
        this.classList.add("boxOpen")
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length>1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML==
                document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                   
                    if(document.querySelectorAll('.boxMatch').length == suffulle_emoji.length){
                        /*alert('Win')*/
                        document.querySelector('.game').innerHTML='';
                        document.querySelector('.info').innerHTML='';
                        
                        var EndMsg =   document.querySelectorAll('.win')[0]
                        EndMsg.classList.remove('hidden')
                        EndMsg.classList.add('addBackground')
                        EndMsg.innerHTML = `Congratulations you have successfully finished the game in <br>
                         ${( minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)} seconds
                         <br> accurations percentage: ${(((totalCounter-counter)/totalCounter)*100).toFixed(2)} %`

                        document.querySelector('.reset').innerHTML='Play Again !';
                        clearInterval(myTimeHasCome)

                    }
                    totalCounter++;

               
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    counter++;
                    totalCounter++;
                    document.querySelectorAll('.count')[0].innerHTML = `Mistakes : ${counter}` ;


                }
            }

        },500)

    }




    document.querySelector('.game').appendChild(box)

    
    }
    function startTimer() {
        myTimeHasCome = setInterval(function() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            document.querySelectorAll('.timer')[0].innerHTML ="Time : " + ( minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    }