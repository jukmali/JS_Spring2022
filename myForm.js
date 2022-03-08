function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    alert(x);
    var y = document.forms.myForm.lname.value;
    alert(y);

    if((x == null || x =="") || (x.length < 3)){
        //alert("First name must be filled correctly");
        document.getElementById("feedback").innerHTML = "<b> Fill in properly</b>";
    }
}

function showExtraFields(){
    var x = document.getElementById('myfieldset');
    x.style.display = "block";
}