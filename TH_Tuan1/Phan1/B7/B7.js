function kiemTra(){
    var theBox = document.getElementById("kiemtra");
    var color;
    if (theBox.checked == false){
        color = "white";
    }
    else{
        color = "black"
    }
    document.bgColor = color;
}