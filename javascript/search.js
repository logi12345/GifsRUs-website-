$(document).ready(function(){
  //   let gifyAPIurl = "";
  //   let gifyImageURL = "";
  //   const createGifyAPIURL = (val) =>{
  //       gifyAPIurl="api.giphy.com/v1/gifs/"+val+"?api_key=JqYOPDtN0pje41qNgnN1xAgrjkRC5X3t&limit=1"        
  //   }
  //   const createGifyImageURL = (val) =>{
  //       gifyImageURL="https://media.giphy.com/media/"+val+"/giphy.gif"
  //   }

  //   const fetchAPI = () =>{
        
  //       fetch(gifyAPIurl)
  // .then(response => {
  //   if (response.status === 200) {
  //       return response.json();
  //   } else {
  //     throw new Error('Something went wrong on api server!');
  //   }
  // })
  // .then(function(response) {
  //       createGifyImageURL($(response.data[i].id))    
  //       console.log(gifyImageURL)
  // }).catch(error => {
  //   console.error(error);
  // });
  //   }


    $("#search-form").submit(function(event){
        event.preventDefault();
        try{
          //  createGifyAPIURL($("#search-field").val())
          //  fetchAPI()
        }catch(err){

        }
    });
});
