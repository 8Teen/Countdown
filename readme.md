# Countdown Timer

This is a basic JavaScript countdown timer. It will countdown to any date and time in the future with the option to display a message when the countdown finishes.

## Basic Usage

Getting started is really easy.

Include the `css/countdown.min.css` file in the `<head>` tag of your html document (or copy to your master .css file).

Include the `js/countdown.min.js` file just before the `</body>` tag of your html document (or copy to your master .js file).

Add this code just below the included .js file (replace `YYYY, MM, DD, HH, MM` with the year, month, day, hour and minute you want to countdown to):

    var countdown = new Countdown(YYYY, MM, DD, HH, MM);
    countdown.startCountdown();

Add this html where you'd like to display the countdown:

    <div id="countdown">
        <div class="time" id="days"></div>
        <div class="time" id="hours"></div>
        <div class="time" id="mins"></div>
        <div class="time" id="secs"></div>
    </div>

## Extended Usage

Create the countdown object:

    var countdown = new Countdown(YYYY, MM, DD, HH, MM);

When you are ready to start the countdown, call:

    countdown.startCountdown();

When the countdown is complete, it will remove all traces of itself. If you'd like to display a message instead:

    countdown.setMessage('Countdown done!');

At any point you can check the status of the countdown by checking for the `complete` property:

    if (countdown.complete) alert('Countdown done!');

By defualt, the countdown lets you control down to the minute, but you can set the timer down to the second if you really want:

    countdown.second = 32;