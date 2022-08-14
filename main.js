const getData = async () => {
   try {
      const response = await fetch("data.json");
      const data = await response.json();
      setMainData(data);
   } catch (error) {
      console.error(error);
   }
};

// get required element form html

const mainBody = document.getElementById("main-body");

const setMainData = (data) => {
   mainBody.innerHTML = "";
   const bars = data
      .map((item) => {
         const { day, amount } = item;

         return `<div class="bars">
                    <span class="balance">$${amount}</span>
                    <span class="bar" style="height:${amount * 2.5}px;"></span>
                    <p class="week-day">${day}</p>
                </div>`;
      })
      .join(" ");

   mainBody.innerHTML = bars;
};

// setMainData();

window.addEventListener("DOMContentLoaded", getData);
