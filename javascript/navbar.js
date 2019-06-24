$(document).ready(function () {
  let gifyAPIurl = "";
  let imageValue = 0;
  const createGifyAPIURL = (val) => {
    gifyAPIurl = "https://api.giphy.com/v1/gifs/search?q=" + val + "&api_key=JqYOPDtN0pje41qNgnN1xAgrjkRC5X3t&limit=1"
  }

  function post(path, params, method='get') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }

  const fetchAPI = () => {
    console.log('gifAPIURL='+gifyAPIurl)
    fetch(gifyAPIurl)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(function (response) {
        post('./resultPage.html',{GIF:response.data[imageValue].id});
      }).catch(error => {
        console.error('fetchError='+error);
      });
  }

  let pageURL = window.location.href;
  let page = pageURL.substring(pageURL.lastIndexOf('/') + 1)
  let pageTitle = page.substring(page.length - 5, 0)
  let pageID = "#" + pageTitle
  $(".myNav").load("navbar.html", function () {
    $(pageID).addClass('active')


    $("#searchButton").on("click", function (event) {
      event.preventDefault();
      try {
        createGifyAPIURL($("#search-field").val())
        fetchAPI()

      } catch (err) {
        console.log('searchError='+err)
        event.preventDefault();
      }
    });
  });

});
