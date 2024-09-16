//offer of the dayyyyy
// Set the countdown end time to the end of the current day
const countdownDate = new Date();
countdownDate.setHours(23, 59, 59, 999); // End of the day

// Function to update the countdown every second
const countdown = () => {
    const now = new Date();
    const distance = countdownDate - now;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24); //24 shows  one day hours
    const minutes = Math.floor((distance / (1000 * 60)) % 60); 
    const seconds = Math.floor((distance / 1000) % 60);

    // Update the countdown display
    document.getElementById('countdown').innerText = `${hours}h ${minutes}m ${seconds}s`;

    // Check if the countdown has ended
    if (distance < 0) {
        document.getElementById('countdown').innerText = "Special offer has ended!";
        clearInterval(intervalId); // Clear the interval when time is up
    }
};

// Update the countdown every second
const intervalId = setInterval(countdown, 1000);

// Initial call to display the countdown immediately
countdown();






function orderNowAlert() {
   
    document.getElementById('order-now');
    Swal.fire({
        text: "ThankYou For Choosing Us!"
      });




}


function buttonAlert() {
    var date = document.querySelector('[name="date"]').value;
    var time = document.querySelector('.form-select.custom-dropdown.primary-border').value;
    var people = document.querySelector('.form-select.custom-dropdown.primary-border').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    // var email = document.getElementById('email').value;  && email

    if (date && time && people&& name && phone ) {
        // alert("Your table has been booked!");
        Swal.fire({
            icon: "success",
            text: "Your table has been booked!",
            showConfirmButton: false,
            timer: 1500
          });
          
          
    } else {
        // alert("Please fill in all fields.");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the fields!",
                  });
    }
}






$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true,
        todayBtn: "linked",
        title: "Cafe Calendar",
        startDate: new Date(), 
    }).datepicker('update', new Date());
});

