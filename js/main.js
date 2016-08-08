function setActive(){
	//$(document).ready(function () {
   /* $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });*/
//});

$('.nav li').click(function(event){
        //remove all pre-existing active classes
        $('.active').removeClass('active');

        //add the active class to the link we clicked
        $(this).addClass('active');

        //Load the content
        //e.g.
        //load the page that the link was pointing to
        //$('#content').load($(this).find(a).attr('href'));      

        event.preventDefault();
    });

}

function about(){
	console.log("About work");
	$(".cover-heading").text("About");
	//$(".content").text("I am a graduate student in Penn State University.");
	$(".content").load("data/about.txt");

	/*jQuery.get('data/projects.txt', function(data) {
    console.log(data);
});*/

}

function projects(){
	console.log("Projects work");
	$(".cover-heading").text("Projects");
	$(".content").load("data/projects.txt");
}

function resume(){
	console.log("Resume work");
	$(".cover-heading").text("Resume");
    $(".content").load("data/resume.txt");
}

function contact(){
	console.log("Contact work");
	$(".cover-heading").text("Contact");
    $(".content").load("data/contact.txt");
}

