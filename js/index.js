
var sitName = document.getElementById("sitName");
var sitUrl = document.getElementById("sitUrl");

var nameMessage = document.getElementById("nameMessage");
var urlMessage = document.getElementById("urlMessage");

var alertMessage = document.getElementById("alertMessage");

var bookMarks = [];

if( localStorage.getItem("marks")!= null ){

    bookMarks = JSON.parse( localStorage.getItem("marks") );

    displayMarks();
}

function addBookMark(){

    if( validationName() && validationUrl() ){
        var mark = {

            name: sitName.value,
            url: sitUrl.value,
        }
    
        bookMarks.push( mark );
    
        localStorage.setItem("marks",JSON.stringify(bookMarks));
    
        displayMarks();
    
        clearBookMarks();

    }else{
        alertMessage.classList.remove("d-none")
    }

}

function clearBookMarks(){

    sitName.value = "";
    sitUrl.value = "";
}

function displayMarks(){

    var cartona = "";

    for( var i = 0 ; i < bookMarks.length   ; i++ ){

            cartona += `<tr>
            <td>${i+1}</td>
            <td>${bookMarks[i].name}</td>
            <td>
                <a href="${bookMarks[i].url}" class="btn btn-success" target="_blank"><i class="fa-regular fa-eye"></i> visit</a>
            </td>
            <td>
                <button onclick="deleteMarks(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i> Delete</button>
            </td>
        </tr>`

    }
    
    document.getElementById("tableBody").innerHTML = cartona;
}


function deleteMarks(index){

    bookMarks.splice(index,1);

    localStorage.setItem("marks",JSON.stringify(bookMarks));

    displayMarks();
}

function validationName(){

    var regexSiteName = /^[a-zA-Z0-9]{3,}$/;
    
    if( regexSiteName.test(sitName.value) ){

        sitName.classList.add( "is-valid" );
        sitName.classList.remove( "is-invalid" );

        nameMessage.classList.add("d-none");

        return true
    }
    else {

        sitName.classList.add( "is-invalid" );
        sitName.classList.remove( "is-valid" );

        nameMessage.classList.remove("d-none");

        return false
    }
}



function validationUrl(){

    var regexSitUrl = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/;

    if(regexSitUrl.test(sitUrl.value)){

        sitUrl.classList.add( "is-valid" );
        sitUrl.classList.remove( "is-invalid" );

        urlMessage.classList.add("d-none");

        return true
    }
    else {

        sitUrl.classList.add( "is-invalid" );
        sitUrl.classList.remove( "is-valid" );

        urlMessage.classList.remove("d-none");

        return false
    }
}

function removeDnone(){

    alertMessage.classList.add("d-none")
}




