function output(){
    var input = document.getElementById("i1").value;
    var pi;
    pi =Math.PI;
    pi=pi.toFixed(input);
    document.getElementById("out").innerHTML = pi;


}