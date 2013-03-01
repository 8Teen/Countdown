/**
 * Copyright 2013 Phil Buchanan
 * 
 * A basic JavaScript countdown timer. It will
 * countdown to any date and time in the future
 * with the option to display a message when
 * the countdown finishes.
 * 
 * Feel free to use it in any of your projects.
 * No need to credit me or anything.
 * 
 * @version 1.0
 */

function Countdown(year, month, day, hour, minute) {

	this.year     = year;
	this.month    = month - 1;
	this.day      = day;
	this.hour     = hour;
	this.minute   = minute;
	this.second   = 0;
	this.complete = false;
	this.id       = 'countdown';

	this.dateFuture = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
	
	this.setMessage = function(message) {
		this.message = message;
	}
	
	this.startCountdown = function() {
		var dateNow = new Date();
		var amount  = this.dateFuture.getTime() - dateNow.getTime();
		delete dateNow;
		if (amount <= 0) {
			this.complete = true;
			var e = document.getElementById(this.id);
			if (this.message) {
				e.innerHTML = '<p class="message">' + this.message + '</p>';
			}
			else {
				e.parentNode.removeChild(e);
			}
		}
		else {
			var days, hours, mins, secs = 0;
			amount = Math.floor(amount / 1000);
			days   = Math.floor(amount / 86400);
			amount = amount % 86400;
			hours  = Math.floor(amount / 3600);
			amount = amount % 3600;
			mins   = Math.floor(amount / 60);
			amount = amount % 60;
			secs   = Math.floor(amount);
			
			document.getElementById('days').innerHTML  = days;
			document.getElementById('hours').innerHTML = hours;
			document.getElementById('mins').innerHTML  = mins;
			document.getElementById('secs').innerHTML  = secs;
			
			var _this = this;
			setTimeout(function() {_this.startCountdown();}, 1000);
		}
	}

}