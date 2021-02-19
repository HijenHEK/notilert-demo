import Notilert from 'notilert' ;

// const Notilert = require('notilert');


document.getElementById('default').addEventListener('click' , ()=>{
    new Notilert({type : 'default' 
                    , position : document.getElementById('positiond').value,
                    timeout : parseInt(document.getElementById('timeoutd').value),
                    closeable : document.getElementById('closeabled').value === "false" ? false :true
                });
})
document.getElementById('success').addEventListener('click' , ()=>{
    new Notilert({type : 'success' 
                    , position : document.getElementById('positiond').value,
                    timeout : parseInt(document.getElementById('timeoutd').value),
                    closeable : document.getElementById('closeabled').value === "false" ? false :true
                });
})
document.getElementById('alert').addEventListener('click' , ()=>{
    new Notilert({type : 'alert' 
                    , position : document.getElementById('positiond').value,
                    timeout : parseInt(document.getElementById('timeoutd').value),
                    closeable : document.getElementById('closeabled').value === "false" ? false :true
                });
})
document.getElementById('danger').addEventListener('click' , ()=>{
    new Notilert({type : 'danger' ,
                    position : document.getElementById('positiond').value,
                    timeout : parseInt(document.getElementById('timeoutd').value),
                    closeable : document.getElementById('closeabled').value === "false" ? false :true
                });
    
})
document.getElementById('custom').addEventListener('click' , ()=>{
    
    var opt = {
        position : document.getElementById('position').value === "" ? null : document.getElementById('position').value,
        width : document.getElementById('width').value === "" ? null : document.getElementById('width').value,
        height : document.getElementById('height').value === "" ? null : document.getElementById('height').value,
        color : document.getElementById('color').value === "" ? null : document.getElementById('color').value,
        bgColor : document.getElementById('bgColor').value === "" ? null : document.getElementById('bgColor').value,
        closeable : document.getElementById('closeable').value === "false" ? false : true,
        timeout : document.getElementById('timeout').value === "" ? null : parseInt(document.getElementById('timeout').value),
        
    }
    console.log(opt);
    new Notilert(opt);
})