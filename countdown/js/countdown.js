  /*
    	Helper functions
    */

    // returns true if input argument is negative number
    function isNegative(num) {
    	if (isNaN(num)) {
    		return false;
    	}
    	return Math.min(num, 0) != 0;
    }

    /*
		Main buiness logic functions
    */

    // global variables count down calculations
    
    var now = new Date();
    var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var diffInMilliSeconds = tomorrow - now
    var diffInSeconds = Math.round(diffInMilliSeconds / 1000);

    // count down 
    function countdown() {
        // decrement diff by on seconds
        diffInSeconds--;

        // transform the diff
        var days = Math.floor(diffInSeconds / (24 * 60 * 60));
        var hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
        var minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
        var seconds = Math.floor(diffInSeconds % 60);

        // display the diff
        var placeholder = document.getElementById("countdownPlaceholder");
        placeholder.innerHTML = "Only " +  hours + " h " + minutes + " m " + seconds + " s " + "to go!"

        // check if we should stop counting
        if (isNegative(diffInSeconds)) {
            // stop repetition
            clearInterval(intervalIdentifier);
            // display appropriate message
            placeholder.innerHTML = "You successfully wasted a day!"
        }
    }

    // setup countdown function to be execute once in a second
    var intervalIdentifier = setInterval(countdown, 1000);
    console.log(intervalIdentifier);