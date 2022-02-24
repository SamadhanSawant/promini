$(document).ready(
  () => {
      $('button').click(
          (e) => {
              e.preventDefault();
              var FirstName = $('#FirstName').val();
              var SurName =$('#SurName').val();
              var MailId = $('#MailId').val();
              var category = $('#category').val();
              var concern = $('#concern').val();

      if(FirstName=='' || SurName=='' || MailId=='' || category=='' || concern=='' ){
      alert("MailId and concern not entered");
      }
      else{
        {
              $.ajax({
                  url: " http://localhost:3000/Concerns",
                  method:"POST",
                  data: {
                      "FirstName": FirstName ,
                      "SurName": SurName,
                      "MailId": MailId,
                      "category": category,
                      "concern": concern,
                  },
                  dataType:"json",
                  success:(x)=> {
                      
                      window.location="../blogspothtml/contact.html";
                      alert(FirstName +" "+ SurName +"...your concern submitted Successfully !");
                      console.log(x);
               
                      window.location.replace('../index.html')
      
                  }
                 
                  
              })
              
          }
              
          }
          }

      )
           
  })




               
              
          
          
        
        

    

