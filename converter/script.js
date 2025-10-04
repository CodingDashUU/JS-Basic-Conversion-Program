 let option1 = document.getElementById("option1");
 let option2 = document.getElementById("option2");
 
 let result = document.getElementById("result");
 let resultnum;

 function cmtofeet(){
    let value = Number(document.getElementById("valuebox").value);
    return value / 30.48 ;
 }
 function feettocm(){
    let value = Number(document.getElementById("valuebox").value);
    return value * 30.48;
 }

document.getElementById("enterbutton").onclick = function(){
 if(option1.checked){
   resultnum = cmtofeet();
    result.textContent = resultnum.toFixed(2) + " feet";
   


 }
 else if(option2.checked){
    resultnum = feettocm();
    result.textContent = resultnum.toFixed(2) + " cm";
    
 }


 ;


}