var tableRow, tableColumn, fieldName, field;
for (i=8;i>0;i--){
var x = document.createElement("TR");
    x.setAttribute("id", "Tr"+i);
    document.getElementById("chessTable").appendChild(x);
    for (j=1;j<9;j++){
    field = document.createElement("TD");
    switch(j){
        case 1 : tableColumn="a";
            break;
        case 2 : tableColumn="b";
            break;
        case 3 : tableColumn="c";
            break;
        case 4 : tableColumn="d";
            break;    
        case 5 : tableColumn="e";
            break;
        case 6 : tableColumn="f";
            break;
        case 7 : tableColumn="g";
            break;
        default : tableColumn="h";
           
    }
    var fieldName = tableColumn+i;
        var t = document.createTextNode(fieldName);
    if((i+j)/2===Math.floor((i+j)/2)){
        field.style.backgroundColor="black";
    };
    field.setAttribute("id",fieldName);
    field.appendChild(t);
    document.getElementById("Tr"+i).appendChild(field);
         }
    }
