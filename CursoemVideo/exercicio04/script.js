function tabuada(){
    let numtxt = document.getElementById('numtxt');
    let tab = document.getElementById('seltab');
    if(numtxt.value.length == 0){
        window.alert("digite um valor")
    }else{
        let num = Number(numtxt.value);   
        let c = 1;
        tab.innerHTML = " "
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${c} X ${num} = ${num*c}`;
            tab.appendChild(item)
            item.value = `tab${c}`
            c++
        }
    }

    
}