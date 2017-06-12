function loadMembers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://swapi.co/api/people/", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //Success
                //Parse response json string into an object
                var responseObj = JSON.parse(xhr.responseText);
                //Declaring new variable array for storing people data. 'results' is the property of the object responseObj and were received from the server.
                var peopleArray = responseObj.results; //we need: name, gender

                //Finding the table to show people
                var table = document.getElementById('loader_table');
                table.style.display = 'table';
                if (table) {
                    for (var i = 0; i < peopleArray.length; i++) {
                        var row = table.insertRow(table.rows.length);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = peopleArray[i].name;
                        cell2.innerHTML = peopleArray[i].gender;
                    }
                }
                //Shows the modal window
                var modal = document.getElementById('myModal');
                if (modal){
                    modal.style.display = "block";
                }
                //Hide spinner
                var spinner = document.getElementById('spinner');
                if (spinner){
                    spinner.style.display = 'none';
                }
                //End
                //End success 
            } else {
                alert(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        alert(xhr.statusText);
    };
    //Show spinner
    var spinner = document.getElementById('spinner');
    if (spinner){
        spinner.style.display = 'inline-block';
    }
    //End
    //Clear table content before new people request
    var table = document.getElementById('loader_table');
    if (table) {
        table.style.display = 'none';
        while (table.rows.length > 1) {
            table.deleteRow(table.rows.length - 1);
        }
    }
    //End clear
    xhr.send(null)
}

//Closes the modal window
function closeModal(){
    var modal = document.getElementById('myModal');
    if (modal){
        modal.style.display = "none";
    }
}