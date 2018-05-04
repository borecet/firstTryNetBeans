
for (i=1;i<9;i++){
var x = document.createElement("TR");
    x.setAttribute("id", "Tr"+i);
    document.getElementById("chessTable").appendChild(x);
    for (j=1;j<9;j++){
    var y = document.createElement("TD");
    var k = 10*j+9-i;
        var t = document.createTextNode(k);
    
    y.setAttribute("id","td"+k);
    y.appendChild(t);
    document.getElementById("Tr"+i).appendChild(y);
         }
    }
