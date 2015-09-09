/*
  Contains the site specific js

*/

$(document).ready(function() {

  quoteList = new Array (
	'<i>"They alone live who live for others, the rest are more dead than alive"</i>--Swami Vivekananda',
	'<i>"The world is the great gymnasium where we come to make ourselves strong"</i>--Swami Vivekananda',
	'<i>"If we knew what it was we were doing, it would not be called research, would it?"</i>-- Albert Einstein',
	'<i>"A person who never made a mistake never tried anything new."</i>--Albert Einstein',
	'<i>"You can\'t cross the sea merely by standing and staring at the water."</i>--Rabindranath Tagore',
	'<i>"Don\'t limit a child to your own learning, for she was born in another time."</i>--Rabindranath Tagore',
	'<i>"First they ignore you, then they laugh at you, then they fight you, then you win"</i>--M K Gandhi',
	'<i>"Even if you are a minority of one, the truth is the truth."</i>--M K Gandhi',
	'<i>"It is the mark of an educated mind to be able to entertain a thought without accepting it."</i>--Aristotle',
	'<i>"We are what we repeatedly do. Excellence, then is not an act, but an habit"</i>--Aristotle',
	'<i>"You have to dream before your dreams can come true."</i>--Abdul Kalam',
	'<i>"You have to dream before your dreams can come true."</i>--Abdul Kalam',
	'<i>"I can calculate the motion of heavenly bodies, but not the madness of people."</i>--Isaac Newton',
	'<i>"It is the weight, not numbers of experiments that is to be regarded."</i>--Isaac Newton',
	'<i>"Everyone thinks of changing the world, but no one thinks of changing himself."</i>--Leo Tolstoy',
	'<i>"The two most powerful warriors are patience and time."</i>--Leo Tolstoy',
	'<i>"A hero is a man who does what he can."</i>--Romain Rolland'
  );


    number = Math.floor(Math.random() * quoteList.length);
    $('#quote').html(quoteList[number]);

    $('#myCarousel').carousel({
    	interval: 3000
	});

});
