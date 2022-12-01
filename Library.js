
//constructor
function Book (name,author,type) {
  this.name = name;
  this.author = author;
  this.type = type; 
}








function Display(){
  
}


// add methods to the Display prototype
Display.prototype.add= function (book){

  console.log("adding to the UI" )
 let tableBody = document.getElementById('tableBody');
 let uiString= `
 
                          <tr>                                                  
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}</td>
                          </tr>`;
                          tableBody.innerHTML += uiString;
}

//implement the clear function 
Display.prototype.clear= function(){
  let libraryForm =  document.getElementById('LibraryForm');
   libraryForm.reset();
}

 
//implement the validate  function 
Display.prototype.validate= function(book){
   if (book.name.length<3|| book.author.length<3 )
   {
        return false;
   }
   else {
    return true;
   }

  }



  //implement the show function 
  Display.prototype.show= function(type, msg){
    let message = document.getElementById('message');
     let boldText ; 
    if(type==='success'){
      boldText= 'success';
    }
    else{
      boldText= 'error';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldText}:</strong> ${msg} .
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 2000);     
    
  }








//add  submit event listener to the Library form
 let libraryForm =  document.getElementById('LibraryForm');
 libraryForm.addEventListener('submit',libraryFormSubmit);
                
 function libraryFormSubmit(e){
  
  let name  = document.getElementById('BookName').value;  
  let author   = document.getElementById('Author').value;  
  let type;
   
   let Self = document.getElementById('Self'); 
   let Fiction  = document.getElementById('Fiction'); 
   let Programming  = document.getElementById('Programming'); 
    
      if (Self.checked){
        type = Self.value;
      } 
      else if (Fiction.checked){
        type = Fiction.value;
      }
      else if (Programming.checked){
       type = Programming.value;
      }

    let book = new Book( name ,author,type); 
    console.log(book);

      let display = new Display();
      if(display.validate(book)){        
      display.add(book);
      display.clear();
      display.show('success', 'Your book has been successfully saved');  
    }  
      else{
        display.show('danger', 'Sorry you cannot save this book. Please try again !! ');
      }

   e.preventDefault();
 }
 

















