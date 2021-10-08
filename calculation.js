let display = document.getElementById('formula');
let output = document.getElementById('output');
let buttons = Array.from(document.getElementsByTagName('button'));

buttons.map( button => {
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                output.innerText = "0";
                break;
            case '->':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    output.innerText = eval(display.innerText);
                }catch{
                    output.innerText = 'Error';
                }
                display.innerText = "";
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})