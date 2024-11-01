// Get User input ratting 
// loop over user input in case user can't decide 
// save user input to dom
// upload to dom using Js

const submitBtn = document.querySelector('.submit');
const rateBtn = document.querySelectorAll('.rate-btn');
const container = document.querySelector('.rate-container')






let num = 0;
// function for buttons
// use .forEach to loop over buttons.
rateBtn.forEach((button) =>{
    //add event listener to hande the logic
    button.addEventListener('click', () => {
        num = button.dataset.number;
         let btnNumber = button.dataset.number;
         // remove active class on not chosen buttons
        rateBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        console.log(btnNumber); // do somthing here
    });
    
});


    

submitBtn.addEventListener('click', () => {
    if (num === 0) {
        alert("Please Choose a Rating 1-5")
    }
    else {
    console.log(num);

    container.innerHTML = ` 
    
    
    <div class="favicon-container">
        <img
          src="images/illustration-thank-you.svg"
          alt=""
          class="thanks-img"
        />
      </div>
      <div>
          <div class="inner-container" style="display: grid; grid-template-rows: 4rem; padding: 0 2rem; row-gap: 1.7rem; align-items: center;">
      </div>
        <p
          style="
            text-align: center;
            color: var(--orange);
            margin-top: 10px;
            margin-bottom: 20px;
          "
          class="end-rating"
        >
          You selected ${num} out of 5
        </p>
        <h2 style="text-align: center">Thank you!</h2>
        <p style="text-align: center; color: var(--light-grey)">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>`;
}

});
