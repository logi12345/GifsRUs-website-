$(document).ready(function(){
          
        $("#my-form").submit(function(event){
            event.preventDefault();
            let name = $("#name").val();
            let email = $("#email").val();
            let text = $("#textArea").val()

            let info =[name,email,text]
            let x = "<div class='container box' id='thing' style='position: absolute; z-index: 1; height: 40%; width:30%; background-color: aquamarine; float: left; margin-left: 0px;'>"
            for (let i=0; i<info.length; ++i){
                let y ="<div class='row'>"+info[i]+"</div>"
                x=x+y;
            }

             x = x +"<div class='row'><button onclick='close()' type='button' id='myButton btn btn-primary'>Close</button></div></div>"
            $("#displayBox").html(x)

            console.log(x)
        }); // Submit the form
});