const add = document.getElementById('add');
const remove = document.getElementById('remove');
let myinput = document.getElementById('myinput');
let content_catcher = document.getElementsByClassName('content_catcher');
let click_count = 0;

myinput.addEventListener('keypress', ()=>{
    if( event.key ==="Enter"){
        event.preventDefault();
        add.click();
    }
});

add.addEventListener('click', ()=>{
    
    if(myinput.value.length>=1){
        click_count = click_count+1;


        console.log("click_count : "+click_count);

        
        let content_box = document.createElement('div');
        let button = document.createElement('button');
        button.innerHTML="❌";
        let content = document.createTextNode(myinput.value);
        content_box.appendChild(content);
        content_box.appendChild(button);

        content_box.classList.add("task");

        content_box.setAttribute('class', 'add');
        button.setAttribute('class', 'close_btn');
        button.setAttribute('value', click_count);
        
        content_box.setAttribute('value', click_count);
        content_catcher[0].appendChild(content_box);
        
        myinput.value="";


        button.addEventListener('click', ()=>{
            console.log("finally it worked");
            content_box.remove();
        });

    }
    
    console.log("end");
});


