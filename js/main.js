
  function vibration() {
   var time = 500;
   navigator.vibrate(time);
  }


  function load_news(){
    $.ajax({
        url: url,
        type: 'get',
        timeout: ajaxTimeOut,
        crossDomain: crossDomain,
        dataType: jsonType,
        data: {
            'load_all_news': 'yes'
        },
        error: function (er) {
            var toasts = app.toast.create({
                text: 'Network error, please try again later!',
                position: 'bottom',
                closeTimeout: 3000
            });
            vibration();
            app.dialog.close();
        },
        success: function (f) {
            app.dialog.close();
            let all_news = f;
            let all_news_string = JSON.stringify(all_news);
            sessionStorage.setItem("all_news",all_news_string);
        }
    });
  }

  function parse_news(){

      var news = sessionStorage.getItem("all_news");
      var herbs = JSON.parse(news);
      //console.log(herbs[0].image);
      //herbs = JSON.parse(herbs);
      var htmls = "";

      for(var i = 0; i < herbs.length; i++){
          var user_name = herbs[i].title;
          var id = herbs[i].id;
          var img = base_url+"/admin/img/places/"+herbs[i].image;

          htmls += '<div class="col-50">';
          htmls += '<div class="book-div"><div class="book-bg" style="background-image: url('+img+');"></div>';
          htmls += '<div class="book-title">';
          htmls += '<a href="/view-place/?name='+user_name+'&id='+id+'&image='+img+'">'+user_name+'</a><span><i class="material-icons icon">location_on</i> '+herbs[i].town+'</span></div></div></div>';
      }

      $(".all-news-list").html(htmls);

  }
  



document.addEventListener('deviceready', function () {

  //console.log("ready...");
   

}, false);