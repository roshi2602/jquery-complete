//33)ajax


//a)fetching file server with jquery
//load()-can get your files very easily from your own server

//using code element from html to retrive the files


$(function(){
    $('#code').load("ajaxjquery.js");

//iisse ye pura code html page par le aae hum




//ab hum code console pe laenge pura
//callback function ka use krke
$('#code').load("ajaxjquery.js",function(response, status){
    if(status=="error"){
        alert("file not found");
    }
    console.log(response);
});
});
//isse pura code console pe aa gaya




//b)flickr api
//flicker is the site where you can share photos
//go to flickr api feeds
//go to public phtos and videos
//copy the url there


//use key value pairs

$(function(){
    var flic='https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'     //copy the url

    //now call the json method and put in thw flic variable

    $.getJSON(flic,{
       
       
       //want we want to search is we will use
       tags:"sun,beach",
       tagmode:"any",
       format:"json"
       
        //we will use done and failure functions now

    }).done(function(data){       //for succes
        console.log(data);

        $.each(data.items, function(index,item){
            console.log(item);
        
        //ye console pe 20 locks dega aur koi ek ko click krne se uske items dikhenge


        //create image tag now
        $("<img>").attr("src",item.media.m).appendTo('#flickr');   //setting source attribute to item.media.m


        });
        //isse sari images aa gayi webpage pe flick ki site se automaticaaly

    }).fail(function(){
        alert('jquery failed');

    });
    });



