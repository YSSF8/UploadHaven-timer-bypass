// ==UserScript==
// @name         UploadHaven Timer Bypass
// @version      1.0
// @description  Bypasses the UploadHaven download timer
// @author       YSSF
// @match        https://uploadhaven.com/download/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    seconds = 0;

    //Original stolen script ↓↓↓
    /*
    let seconds = 0;
    let countdownTimer;

    function countDown() {
    if (seconds === 0) {
        $('.btn-submit-free').html('Free Download');
        $('.btn-submit-free').attr('type', 'submit');

        clearTimeout(countdownTimer);
    } else {
        $('.download-timer-seconds').text(seconds + ' seconds');
    }

    seconds--;
    }

    $(document).ready(function() {
        function startCountdown() {
            $(this).attr('disabled', true);

            countdownTimer = setInterval('countDown()', 1000);
        }

        startCountdown();
    });*/
})();
