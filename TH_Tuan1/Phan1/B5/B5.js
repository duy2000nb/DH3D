function Check(){
    tuoi = myform.tuoi.value;
    if(tuoi >= 18){
        document.write(" Tuổi của bạn hợp lệ, " + tuoi);
    }
    else{
        alert("bạn chưa đủ tuổi ")
    }
}