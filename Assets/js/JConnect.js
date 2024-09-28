
function showPreview(jobId) {
    const jobDetails = document.querySelectorAll('.job-details');
    jobDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    document.getElementById(jobId).classList.add('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const firstJobDetails = document.querySelector('.job-details');
    if (firstJobDetails) {
        firstJobDetails.classList.add('active');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

    bookmarkButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent triggering the parent click event
            const bookmarkIcon = button.querySelector("i");
            bookmarkIcon.classList.toggle("bookmarked");
        });
    });
});

document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.popUp-container').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popUp-container').style.display = 'none';
})

document.getElementById('clear').addEventListener('click', function() {
    var inputs = document.querySelectorAll('input[type=number]');
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var radios = document.querySelectorAll('input[type=radio]');
    var selects = document.querySelectorAll('select');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }

    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});