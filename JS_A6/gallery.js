			/*
			Student:Sean Morden
            Student#:300490950
            Filename: gallery.js
            Assignment 6 - Image Gallery Ajax
			*/

var Center;
var Last;
var Next;
var timer;
var cowPictures;
var length;
var counterPlus=function(){
	if(Last === cowPictures.pictures.length){
			Last = 0
		}
		if(Center === cowPictures.pictures.length){
			Center = 0
		}
		if(Next === cowPictures.pictures.length){
			Next = 0
		}
}
var counterMinus=function(){
	if(Last < 0){
			Last = 5
		}
		if(Center < 0){
			Center = 5
		}
		if(Next < 0){
			Next = 5
		}
}

function main(){
	$("#loadButton").click(loadPictures);
}

function next(){
	clearInterval(timer);
	Last++;
	Next++;
	Center++;
	counterPlus();

	$('#lastImage').fadeIn(500).attr('src',cowPictures.pictures[Last++].path);
	$('#nextImage').fadeIn(500).attr('src',cowPictures.pictures[Next++].path);
	timer = setInterval(clearAndLoadNext,cowPictures.pictures[Center].time);
	$('#currentImage').fadeIn(500).attr('src',cowPictures.pictures[Center++].path);

		
	
}
function updateNext(){
	counterPlus();
	$('#lastImage').fadeIn(300).attr('src',cowPictures.pictures[Last++].path);
	$('#nextImage').fadeIn(300).attr('src',cowPictures.pictures[Next++].path);
	timer = setInterval(clearAndLoadNext,cowPictures.pictures[Center].time);
	$('#currentImage').fadeIn(500).attr('src',cowPictures.pictures[Center++].path);
	
}
function imageNext(){
	clearInterval(timer);
	updateNext();
}
function imageLast(){
	clearInterval(timer);
	last();
}

function last(){
		
		Last--;
		Center--;
		Next--;
		counterMinus();
		$('#lastImage').fadeIn(200).attr('src',cowPictures.pictures[Last].path);
		$('#nextImage').fadeIn(500).attr('src',cowPictures.pictures[Next].path);
		timer = setInterval(next,cowPictures.pictures[Center].time);
		$('#currentImage').fadeIn(500).attr('src',cowPictures.pictures[Center].path);
		

}

function clearAndLoadNext(){
	clearInterval(timer);
	$('#lastImage').fadeOut(300);
	$('#nextImage').fadeOut(300,imageNext);
	$('#currentImage').fadeOut(200);
}
function clearAndLoadLast(){
	clearInterval(timer);
	$('#lastImage').fadeOut(300);
	$('#nextImage').fadeOut(300);
	$('#currentImage').fadeOut(1000,imageLast);
}

function loadPictures(){
	$.getJSON('images.json.txt',function (file){
		document.getElementById("loadButton").style.color="Green";
		document.getElementById("loadButton").style.fontSize="20px";
		document.getElementById("loadButton").innerText="LOADED!";
		cowPictures=file;
		length = cowPictures.pictures.length;
		
		Last = 0;
		Center = 1;
		Next = 2;
		clearInterval(timer);
		timer = setInterval(clearAndLoadNext,cowPictures.pictures[Center].time);
		$('#btnNext').click(clearAndLoadNext);
		$('#btnLast').click(clearAndLoadLast);
	});
}
window.addEventListener("load",main,false);