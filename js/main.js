var headingId = "#heading1";
var contentId = "#mainContent1";

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
	$(headingId).text("About");
	//$(contentId).text("I am a graduate student in Penn State University.");
	$(contentId).load("data/about.txt");

	/*jQuery.get('data/projects.txt', function(data) {
    console.log(data);
});*/

}

function projects(){
	console.log("Projects work");
	$(headingId).text("Projects");
	$(contentId).load("data/projects.txt");
}

function resume(){
	console.log("Resume work");
	$(headingId).text("Resume");
    $(contentId).load("data/resume.txt");
}

function contact(){
	console.log("Contact work");
	$(headingId).text("Contact");
    $(contentId).load("data/contact.txt");
}

