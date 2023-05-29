function calckrug(){
    let r=document.getElementById("r").value
    let s=Math.PI*r**2
    document.getElementById("s").innerText="Площадь="+s
    let p=2*Math.PI*r
    document.getElementById("p").innerText="Периметр="+p
}
function calcrepair(){
    let dl1=document.getElementById("dl1").value
    let vis1=document.getElementById("vis1").value
    let dl2=document.getElementById("dl2").value
    let vis2=document.getElementById("vis2").value
    let s1=Math.round(dl1*vis1)
    let s2=Math.round(dl2*vis2)
    let rooms=Math.round(s1*2+s2*2)
    let rool=document.getElementById("roll").value
    let srool=Math.round(rool*10)
    let result=Math.ceil(rooms/srool+rooms/srool/10)
    document.getElementById("rollsht").innerText="Количество рулонов="+result
}
function calckequation(){
    let a=document.getElementById("a").value
    let b=document.getElementById("b").value
    if (a==0) document.getElementById("root").innerHTML="корень не существует"
    else document.getElementById("root").innerHTML="корень="+(-b/a)
    let e=a+"x+"+b+"=0"
    document.getElementById("lineq").innerHTML=e
}
function clearequation(){
    document.getElementById("a").value=""
    document.getElementById("b").value=""
    document.getElementById("root").innerHTML=""
    document.getElementById("lineq").innerHTML="уравнения:"
}
let hod=1
function play(event){
    if (hod>9)
    return false
    if (event.target.innerHTML=="x" || event.target.innerHTML=="0")
    return false
    if (hod%2!=0)
    event.target.innerHTML="x"
    else
    event.target.innerHTML="0"
    hod++
    wwin()
}
function wwin(){
    table=document.getElementById("ttt")
    tr=table.rows
    for(i=0; i<tr.length ; i++){
        if(tr[i].cells[0].innerHTML=="x" && tr[i].cells[1].innerHTML=="x" && tr[i].cells[2].innerHTML=="x")
        setTimeout('alert ("крестики выиграли"); clearttt()', 1000)
        if(tr[i].cells[0].innerHTML=="0" && tr[i].cells[1].innerHTML=="0" && tr[i].cells[2].innerHTML=="0")
        setTimeout('alert ("нолики выиграли")', 1000)
    }
    for(i=0; i<tr.length ; i++){
        if(tr[0].cells[i].innerHTML=="x" && tr[1].cells[i].innerHTML=="x" && tr[2].cells[i].innerHTML=="x")
        setTimeout('alert ("крестики выиграли"); clearttt()', 1000)
        if(tr[0].cells[i].innerHTML=="0" && tr[1].cells[i].innerHTML=="0" && tr[2].cells[i].innerHTML=="0")
        setTimeout('alert ("нолики выиграли"); clearttt()', 1000)
    }
    if(tr[0].cells[0].innerHTML=="0" && tr[1].cells[1].innerHTML=="0" && tr[2].cells[2].innerHTML=="0")
    setTimeout('alert ("нолики выиграли"); clearttt()', 1000)
    if(tr[0].cells[0].innerHTML=="x" && tr[1].cells[1].innerHTML=="x" && tr[2].cells[2].innerHTML=="x")
    setTimeout('alert ("крестики выиграли"); clearttt()', 1000)
        if(tr[0].cells[2].innerHTML=="0" && tr[1].cells[1].innerHTML=="0" && tr[2].cells[0].innerHTML=="0")
        setTimeout('alert ("нолики выиграли"); clearttt()', 1000)
        if(tr[0].cells[2].innerHTML=="x" && tr[1].cells[1].innerHTML=="x" && tr[2].cells[0].innerHTML=="x")
        setTimeout('alert ("крестики выиграли"); clearttt()', 1000)
}
function clearttt(){
    table=document.getElementById("ttt")
    tr=table.rows
    for(i=0; i<tr.length ; i++){
        tr[i].cells[0].innerHTML=""
        tr[i].cells[1].innerHTML=""
        tr[i].cells[2].innerHTML=""
    }
}