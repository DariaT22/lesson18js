alert('js runs');

const meta = document.createElement('meta');
meta.setAttribute('charset', "UTF-8");


const title = document.createElement('title');
title.innerHTML = 'Document';


const viewport = document.createElement('meta');
viewport.setAttribute('name', 'viewport');
viewport.setAttribute('author','Daria')


let h1=document.createElement('h1');
h1.innerHTML='Chose Your Option';
console.log(h1);
document.body.appendChild(h1);


let h5=document.createElement('h5');
h5.innerHTML='But I must explain to you how all this mistaken idea of denounsing';
console.log(h5);
document.body.appendChild(h5);


let div=document.createElement('div');
div.className='block1';
div.innerHTML='<p>FREELANCER</p> <p>Initially designed to</p> <p>But I must explain to you how all this mistaken idea of denounsing</p> <p><button>START HERE</button></p>';
div.inner
console.log(div);
document.body.appendChild(div);


let div2=document.createElement('div');
div2.className='block2';
div2.innerHTML='<p>Studio</p> <p>Initially designed to</p> <p>But I must explain to you how all this mistaken idea of denounsing</p> <p><button>START HERE</button></p>' ;
div2.inner
console.log(div2);
document.body.appendChild(div2);


let style=document.createElement('style');
style.innerHTML=`
    h1{
        font-size:10px;
        color: #404040;
        text-align:center;
    }
    h5 {
        font-size:5px;
        color: grey;
        text-align:center;
    }
    .block1 {
        padding-top: 3px;
        background-Color: pink;
        width: 50%;
        font-size:5px;
        text-align:center;
    }
    .block2 {
        padding-top: 3px;
        background-Color: grey;
        width: 50%;
        font-size:5px;
        text-align:center;
    }
    button {
        border: 1px solid yellow;
        border-radius: 30px;
        font-size: 5px;
        margin-bottom: 5px;
    }
    `
document.head.appendChild(style);    