let topics = {

list:{
title:"Python List",
explanation:"Lists store multiple items in a single variable.",
code:"let arr=[1,2,3,4];\narr.forEach(x=>console.log(x));"
},

tuple:{
title:"Python Tuple",
explanation:"Tuple is immutable (cannot change).",
code:"let t=Object.freeze([10,20,30]);\nt.forEach(x=>console.log(x));"
},

set:{
title:"Python Set",
explanation:"Set stores unique values only.",
code:"let s=new Set([1,2,2,3]);\ns.forEach(x=>console.log(x));"
},

pattern:{
title:"Pattern Program",
explanation:"Print star pattern using loops.",
code:"for(let i=1;i<=5;i++){console.log('*'.repeat(i));}"
}

};

function playSound(id){document.getElementById(id).play();}

function loadTopic(name){
playSound("clickSound");
document.getElementById("title").innerText=topics[name].title;
document.getElementById("explanation").innerText=topics[name].explanation;
document.getElementById("codeArea").value=topics[name].code;
document.getElementById("output").textContent="";
}

document.getElementById("codeArea").addEventListener("input",()=>{
try{new Function(document.getElementById("codeArea").value);
document.getElementById("liveError").innerText="Code looks good ✔";
}
catch(err){document.getElementById("liveError").innerText="Syntax Error ⚠";}
});

function runCode(){
playSound("clickSound");

let code=document.getElementById("codeArea").value;
let outputBox=document.getElementById("output");

let logs=[];
let originalLog=console.log;
console.log=(...args)=>logs.push(args.join(" "));

try{
eval(code);
outputBox.textContent=logs.join("\n");
playSound("successSound");
}
catch(err){
outputBox.textContent=err;
playSound("errorSound");
}

console.log=originalLog;
}
