var n = document.querySelectorAll(".song").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".song")[i].addEventListener("click", function() {
        var button_inner_html = this.innerHTML
        makesound(button_inner_html);
    })
}


function makesound(key) {
    switch(key) {
        case "NightChanges":
            var x1 = new Audio("night_changes.mp3");
            x1.play();
            break;

        case "Closer":
            var x2 = new Audio("closer.mp3");
            x2.play();
            break;

        case "ThousandYears":
            var x3 = new Audio("thousand_years.mp3");
            x3.play();
            break;

        case "Runaway":
            var x4 = new Audio("runaway.mp3");
            x4.play();
            break;

        default: console.log(button_inner_html);
    }
}