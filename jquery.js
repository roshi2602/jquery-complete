//$ is used in jquery
// 1)fading elements in and out
$(function() {
    $('.red-box').fadeOut('slow');

    //fade ho gaya red color on reloading the page
    $('.green-box').fadeOut(2000);   //2000 for duration of fading i.e 2 seconds
    $('.red-box').fadeIn(1000);
    $('.red-box').fadeTo(1000, 0.5); //1000 for duration and 0.5 for opacity
    $('.blue-box').fadeToggle(); //toggle to check wheteher the element is visible or not






//2)elements appear and disappear
$('.blue-box').show();       //blue box 2 show ho ra hai
$('.blue-box').hide(1000);    //blue box2 hide hora hai





//3)sliding elements up and down

$('.green-box').slideUp(1000); //slide up makes disappear
$('.green-box').slideUp(1000);
$('p').hide();
$('p').slideDown(1000);

//for first blue box appears and other blue box disappears
$('.blue-box').slideToggle(2000);





//4)moving elements
//create an object by using curly braces
//in curly braces specify key and values(dictionary)
$('.blue-box').animate({
    "margin-left" : "200px"
//blue mox moves away

}, 1000, "linear");      //isse blue boxes liearly move hue            






//5)animate multiple css properties at once
$('.blue-box').animate({
    "margin-left" :"200px",
    "opacity":"0"   ,            //isse blue box gayab hore hai
    "height":"50px",
    "width":"50px",
    "margin-Top":"25px"



},1000);             //for 1 second we want to animate








//6)chain and delay animations
//we want red box first to start fading , then blue box and then green box
$('.red-box').fadeTo(1000,0.2);
//chaining means you call one function and then you call another function
$('.green-box').delay(1000).fadeTo(1000,0.4);
$('.blue-box').delay(1000).fadeTo(1000,0.6).fadeOut().delay(500).fadeIn(); //visible hoke disappear hue then visisble hua





//7)callback functions
$('.red-box').fadeTo(1000,0,function(){

});






//8)creating signup light box
//html me iske lie form banaya hai
$('.lightbox').delay(500).fadeIn(1000);
//form appear hua isse 








//9)using selectors in jquery
$("p").css("background-color", "pink");
$("input[type='text']").css("background-color", 'yellow');  //form me jo text field hai us box ko yellow kia
//we can use multiple tags
$("h2,p").css("background-color","purple");

//list me even tags ke lie
$("li:even").css("background-color", "olive");










//10)jquery methods for traversal
 ///$("#list").parents().css("background-color", "orange"); //complete orange 
//parents means grand parents and parents
//when you only want derect parent
///$('#list').parent("body").css("background-color",'greenyellow');

///$("#list").siblings().css("background-color", "aqua");

//now if you want to select previous element of the list
/// $("#list").prev().css("background-color", "black");

//next element
///$("#list").next().css("background-color", "black");













//11)methods for filtering
$("#list").find('li').filter(":even").css("background-color", "gray");
//we can even pass the function

/*
$("li").filter(function(index){

    return index % 2==0;
}).css("background-color", "violet");

//this is just the index of matched element
// return index when values are 0, 2, 4, 6--
});
*/
//we can even use a function eq for equals and we can specify the index we want

$("li").eq(3).css("background-color","orange");

//if you want the list items but not the matched ones
$("li").not("#list ul li").css("background-color","pink");











//12)dom
//13)adding new elements to dom
$("ul li:first").append("<li>i am last item");

//li tag me i am the last item likha aa jayega
 //append to function -the perimeter you pass in the element is you want to append to
 $("<li>i am first item</li>").appendTo($("ul:first"));

//prepend function- thats going to add new elements as the first child
$("ul:first").prepend("<li>roshi</li>");

//adding new elemnts as next and previous sibling
$(".red-box").after('<div class="red-box">another red box </div>');
//will add another red box

$(".red-box").before('<div class="red-box">before red box </div>');
//will add red box before the red box

//2 variants of before and after
$(".blue-box").before(function(){
    return "<div class= 'blue-box'>another blue box </div>";
});

//move an element

$(".blue-box").before($(".red-box"));
//blue box ke pehle red box aa gaya

$("p").after($("#list"));
//clone kar dia
//copy kar dia list ko 2 bar ho gayi








//14)replace existing elements on page
/*
$("li").replaceWith("<li>list tags replaces</li>");
*/ 
//all list tags are replaced
//next
var firstitem = $("li:first");
$("p:first").replaceWith(firstitem);
//items ne exchange krli apni positions

/*
$(".red-box, .blue-box").replaceWith("<div class='green-box'>more green boxes</div>");
*/
//sare boxes green ho gaye
/*
//replace all function
$("<div class='green-box'> green boxes</div>").replaceAll(".red-box", ".blue-box");
*/










//15)removal of existing elemnts
/*
$("li:first").remove();
*/
//first element of li gets removed

//to use reuse , redisplay the elemnt later use detach function
/*
var det= $("li").detach();
$("#content").append(det);

//empty function
$("p:first").empty();
//para hi empty
$(".red-box,.blue-box,.green-box").empty();
//removes the text written inside red, green, blue box
*/







//16)manipulate the attributes of elements

//a)attribute()
var sp=$("#link");
console.log(sp.attr("href"));
//console pe image ki link aa jayegi

//now chnage the link
sp.attr('href','https://84qzthygewqrnifslnjd3q-on.drv.tw/topic/topic/Principal%20Component%20Analysis%20explained%20visually.html');

//this has moved to the next link by clicking the anchor tag 

//b)prop function
//html li line number 32 me check box me lagaya hai usme checked ho jayega automaticaaly page pe

var checkk= $("input:checkbox");
console.log(checkk.prop("checked"));
//ab tick hat jayega checkbox se 

//val()
//value = laga do html me
var tet=$("input:text");
console.log(tet.val());
//one jo uski id di thi vo likhi hui aa gayi 
//line 29 pe dekho








//17)creating image slide show
var gal=$(".gallery").find("img").first();
var images=[
    //2 images ke path copy kie hai
    'https://builtin.com/sites/default/files/inline-images/Principal%20Component%20Analysis%20second%20principal.gif','https://miro.medium.com/max/698/1*WVFe7w1rzZWsmghdvaoXag.png'
];
//use javascript  fun in it
var i=0;
setInterval(function(){
        i=(i+1) %images.length; // for image format 0 ,1 ,2,0,1,2
        gal.fadeOut(function(){
            $(this).attr("src", images[i]);
            $(this).fadeIn();
         

         }); 
         console.log(gal.attr("src"));
}, 2000);

//images animations me show ho rahi hai aur fade in bhi ho rahi hai while changing











//18)changing css properties of elements
var red= $(".red-box");
console.log(red.css("width"));
console.log(red.width());
//isse red box ki width dedi console pe i.e 80px

//now change red box to black box
red.css("background-color","black");
//increase the width of red box
red.css("width","+150px");


//change properties now
var propp =$("p").css(["font-size","color"]);
console.log(propp);










//19)adding or remove css classes
$("p:first").addClass("large emphasize");
//elemnt comes in italic and bold in gray color

//adding through function
$("div").addClass(function(index,currentClass){
    if (currentClass== "dummy"){
        return "red-box";
    }

});
//another red box appears

//remove class
$(".red-box").removeClass("red-box").addClass("blue-box")
//all red box turned to blue box











//20)changing data of element
var gall=$(".gallery");
var im=[
    "https://www.google.com/search?q=images+of+beaches&rlz=1C1CHBF_enIN924IN924&sxsrf=ALeKk00vtJnnExsa8etm9XaVJ3hiEoE5yw:1614238568174&tbm=isch&source=iu&ictx=1&fir=jPCOd7eNwnR2fM%252C_kDMsDPJaJlooM%252C_&vet=1&usg=AI4_-kQ0xyqVh__XUR_LYS6HKBAjd4lpDQ&sa=X&ved=2ahUKEwjh98Cjw4TvAhWVUn0KHWNEB2QQ9QF6BAgNEAE#imgrc=jPCOd7eNwnR2fM",
    "https://www.google.com/search?q=images+of+beaches&rlz=1C1CHBF_enIN924IN924&sxsrf=ALeKk00vtJnnExsa8etm9XaVJ3hiEoE5yw:1614238568174&tbm=isch&source=iu&ictx=1&fir=srU8c_FRB255-M%252C3Z_4sE7OnZb3dM%252C_&vet=1&usg=AI4_-kS-rGOoxqXqXMQyEJp3Qvnlpeb6AA&sa=X&ved=2ahUKEwjh98Cjw4TvAhWVUn0KHWNEB2QQ9QF6BAgLEAE#imgrc=srU8c_FRB255-M",
];
gall.data("image of beaches",im);
console.log(gall.data("image of beaches"));
//console pe array dega of 3 images ka address

var fr=$("p:first");
console.log(fr.data("mydata"));
//console pe data dikhega
//html ki line 15












//21)retriving and changing content of element
var firstpara=$("p:first");
console.log(firstpara.text());
console.log(firstpara.html());
firstpara.text("<h1>hello</h1>");  //this will print on html page



firstpara.html(firstpara.html()+"this was append");
//this will get print on html page












//22)events and event handlers
//events are like signals that something has happened on the page and those signals are emitted when user performs some kind of action
//example the alertbox comes on clicking




//a)click event
//html line 14
/*
$("#btn").click(function(){
    alert("clicked");
});
//alert box dega ye on clicking the button
$(".blue-box").click(function(){
    $(this).fadeTo(1000,0.5);
});
//blue box gets faded on clicking
*/











//23)adding hovers
/*
$("#hover").hover(function(){
    alert("was hovered");
});
//hover button ko touch krne se 2 bar alert box aaega
*/
$(".green-box").hover(function(){
    $(this).text("text changes");
});

//text under green box chanegs when touched(hovered) it
 








//24)mouse enter and mouse leave handlers
var bluebox=$(".blue-box");
bluebox.mouseenter(function(){
  //  $(this).fadeTo(1000,0.7);
  $(this).stop().fadeTo(1000,0.7);
});
bluebox.mouseleave(function(){
   // $(this).fadeTo(1000,1);
   $(this).stop().fadeTo(1000,0.7);
});
//when i hover the blue box ,it gets fade in and when we leave it ,it gets fadeback

//apply stop function to execute any animation in the above code
//use either line 329 or line 330
//use either line 325 or line 326









//25)adding handlers for multiple events
$("html").on("click keydown",function(){
    console.log("key was press");
});
//console pe key was press likha aaega aur screen me kahi pe bhi click krne pe counting hogi console pe










//26)modularizing event handlers
//not done




//27)delegated events
//ye <p> tag pe laga hai
//to define your event handler on some parent element which will always be on the pageand the parent elemnt once that event actually occurs will then delegate that event to be handled by its children

$(function(){
/*
$("p").click(function(){
    $(this).slideUp();
});
$("#content").append("<p>this is added paragraph</p>");
});
//click on para written on last of the page and it disappers
*/




//delegated events
$("#content").on("click","p",function(){
    $(this).slideUp();
});
$("#content").append("<p>this is h5</p>");



$("body").on("mouseenter","li", function(){
    $(this).css("color","#666");
});
//jaha jaha hover krenege li items pe vo grey hote jaenges














//27)passing additional data to events
//a)greetUser function
$("#btn").click({
    user:"roshi",
    domain:"roshi2602@gmail.com"    //additional data
}, function(event){
    greetUser(event.data);

});
function greetUser(userdata){
    username=userdata.user || "anonymous";
    domain=userdata.domain || "example.com";
    alert("welcome"+username+domain);
}
//alert box aaega click button pe which will show welcome roshi  roshi@2602.com












//28)creating image gallery with lightbox preview
var galler = $(".gallery2").find("img");
//html code 36 to 41
galler.css("width", "30%").css("opacity",0.7);

galler.mouseenter(function(){
    $(this).stop().fadeTo(1000,0.8);
});

galler.mouseleave(function(){
    $(this).stop().fadeTo(1000,0.7);
});
//images fade hori hai on hovering
//for adding light box
galler.click(function(){
    var sor=$(this).attr("src");
    var ima=$("<img>").attr("src",sor).css("width","100%");
    $(".lightbox").empty().append(ima).fadeIn(2000);

});
//images pe click kro to vo badi hori hai neeche


//for fading out the light box out
$(".lightbox").click(function(){
    $(this).stop().fadeOut();
});

//isse badi wali image click krne pe remove hori hai





//29)handing keyup and keydown events
$(function(){
$('html').keydown(function(event){
    console.log(event.which);
});

});
//event which is used for which  key is pressed

//console kholo aur webpage pe kahi bhi a, b, f6 kuch bhi press kro wo uska number dega console pe


//code for arrow right-

var arro=39;
$('html').keydown(function(event){
    if(event.which == arro){
        $('.blue-box').animate({
            marginLeft: "+=10px"
        },50);
    }
    });
});

//right arrow key press kro keyboard pe blue box move krta jayega towards right








//29)focus and blur events
//ye form ke text ki box shadow lagane aur remove krne ke liye hai

var inp = $("input:text, input:password, textarea");
inp.focus(function(){
    $(this).css("box-shadow","0 0 4px #999");
});

//blur ke liie
inp.blur(function(){
    $(this).css("box-shadow","none");
});

//validation lagaenge ab ispe
//hum red box shadow laagenge agar kuch galat hai to
//aur green box shadow lagaenge agar sab sahi hai to
$("#name").blur(function(){  //#name- name element from html
    var textt=$(this).val();
    if (textt.length < 3){
        $(this).css("box-shadow","0 0 4px #181");
    }
    else{
        $(this).css("box-shadow","0 0 4px  #811");
    }
});
//KUCH BHI DAALO text box me agar vo 2 character se zyada hai to vo red line dega aur agar sahi hai to vo green line dega





//30)change event
//html ki line 49 to 56
$("#checkbox").change(function(){  //#checkbox as checkbox element from html
    var ischek=$(this).is(":checked");
    if(ischek){
        $(this).add("label[for='cb']").css("box-shadow","0 0 4px #181");
    }
    else{
        $(this).add("label[for='cb']").css("box-shadow","0 0 4px #181");
    }
});
$('#select').change(function(){       //#SELECT as select element from html
    var sel=$(this).find(":selected").text();  // : pseudo selector which will give all selected elements
    alert(sel);
})

//issse options me jab hum fruit choose krenge form me to alert box aaega every time we chose the option







//31)handling submit events
//not done




//32)form validation
//very important
//html ki form wali se lia hai ye sab elements
$(function(){

    var form = $('#form');
    enableFastFeedback(form);


$('#form').submit(function(event){
    var name=$('#name').val();
    var password=$('#password').val();
    var message=$('#message').val();
    var checked=$('#checkbox').is(":checked");  //using :checked selector

    validname(name, event);
    validpass(password,event);
    validmes(message,event);
    validcheck(checked, event);


});
});
function enableFastFeedback(formElement){
    var nameinput= formElement.find('#name');
    var passwordinput= formElement.find('#password');
    var messinput= formElement.find('#message');
    var checkinput= formElement.find('#checkbox');



//feedback form
//name ke liye line 788 se line 803
nameinput.blur(function(event){       //using blur function, pass event here
    var name=$(this).val(); //this will give the text in input field
    validname(name,event);

    if(!isvalidname(name)){
        $(this).css({'box-shadow':"0 0 4px #811", "border":"1px solid #600"});
    }
    else{
        $(this).css({'box-shadow':"0 0 4px #181", "border":"1px solid #060"});
    }
    //isse validation me name wale usme red box shadow aaya 
    //aur agar validation sahi hai to green box aaega
//ye sabme laga sakte hai maine sirf name me lagaya hai
});




//password ke liye
passwordinput.blur(function(event){       //using blur function, pass event here
    var password=$(this).val(); //this will give the text in input field
    validpass(password,event);

    if(!isvalidpass(password)){
        $(this).css({'box-shadow':"0 0 4px #811", "border":"1px solid #600"});
    }
    else{
        $(this).css({'box-shadow':"0 0 4px #181", "border":"1px solid #060"});
    }
    //isse validation me name wale usme red box shadow aaya 
    //aur agar validation sahi hai to green box aaega
//ye sabme laga sakte hai maine sirf name me lagaya hai
});


//message ke liye


messinput.blur(function(event){       //using blur function, pass event here
    var message=$(this).val(); //this will give the text in input field
    validpass(message,event);

    if(!isvalidmes(message)){
        $(this).css({'box-shadow':"0 0 4px #811", "border":"1px solid #600"});
    }
    else{
        $(this).css({'box-shadow':"0 0 4px #181", "border":"1px solid #060"});
    }
    //isse validation me name wale usme red box shadow aaya 
    //aur agar validation sahi hai to green box aaega
//ye sabme laga sakte hai maine sirf name me lagaya hai
});


//checkbox ke liye

checkinput.blur(function(event){       //using blur function, pass event here
    var checkbox=$(this).val(); //this will give the text in input field
    validcheck(checkbox,event);

    if(!isvalidcheck(checkbox)){
        $(this).add("label[for='cb']").css({'box-shadow':"0 0 4px #811", "border":"1px solid #600"});
    }
    else{
        $(this).add("label[for='cb']").css({'box-shadow':"0 0 4px #181", "border":"1px solid #060"});
    }
    //isse validation me name wale usme red box shadow aaya 
    //aur agar validation sahi hai to green box aaega
//ye sabme laga sakte hai maine sirf name me lagaya hai
});


}





function isvalidname(name){
    return name.trim().length >=2;
}


function isvalidpass(password){
    return password >= 6;
}


function isvalidmes(message){
    return message.trim() !="";
}

function isvalidcheck(checkbox){
    return checkbox.trim() !="";
}


 //using the events now
 function validname(name,event){
     if(!isvalidname(name)){
         $('#text-feedback').text("please enter  right");
         event.preventDefault();
     }
     else{
         $('#text-feedback').text("");
     }

 }


//isse name wale box me form me agar 1 letter daal ke submit kroo to vo validation dega,please enter right digit
//2 character daalne ka bolega

//for password now

function validpass(password,event){
    if(!isvalidpass(password)){
        $('#pass-feedback').text("please enter  password");
        event.preventDefault();
    }
    else{
        $('#pass-feedback').text("");
    }


}

//to validate message field in password

function validmes(message,event){
    if(!isvalidmes(message)){
        $('#mes-feedback').text("please enter message");
        event.preventDefault();
    }
    else{
        $('#mes-feedback').text("");
    }
}


//to validate checkbox
function validcheck(isvalidcheck,event){
    if(!isvalidcheck) {
        $('#check-feedback').text("please enter checkbox");
        event.preventDefault();
    }
    else{
        $('#check-feedback').text("");
    }
}



//sabpe validation laga gaya

});








































































