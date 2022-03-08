function addData(){
    index += 1;
    //localStorage.setItem("firstname","Jukka");
    // localStorage.setItem("lastname", "Malinen");
    let spesific_tbody = document.getElementById('mytable');
    let row = spesific_tbody.insertRow(index);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = 'New item 1';
    cell2.innerHTML = 'New item 2';
    var arr=[];
    table = document.getElementById('mytable').innerHTML;
    localStorage.setItem('table', table);
}

function showData(){
    //var place = document.getElementById("storage_data");
    //place.innerHTML = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
    document.getElementById('mytable').innerHTML = localStorage.getItem("table");
}

function deleteData(){
    //localStorage.removeItem("firstname");
    document.getElementById('mytable').deleteRow(index);
    
    index -= 1;

}