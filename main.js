const getData = async () => {
   const url =
      "https://raw.githubusercontent.com/Meqdad-Moradi/expenses-chart-component/main/data.json";
   try {
      const response = await fetch(url);
      const data = await response.json();
      displayData(data);
      handleBarEvents();
   } catch (error) {
      console.error(error);
   }
};

// get required element form html

const mainBody = document.getElementById("main-body");

const displayData = (data) => {
   mainBody.innerHTML = "";
   const bars = data
      .map((item) => {
         const { day, amount } = item;

         return `<div class="bars">
                    <span class="balance">$${amount}</span>
                    <span class="bar" data-id="${amount}" style="height:${
            amount * 2.5
         }px;"></span>
                    <p class="day">${day}</p>
                </div>`;
      })
      .join(" ");

   mainBody.innerHTML = bars;
};

// calculate the balance

const handleBarEvents = () => {
   const bars = document.querySelectorAll(".bar");

   bars.forEach((bar) => {
      // get the data-id of the element and turn it into intiger
      const id = Number(bar.dataset.id);

      // show balance element on mouse over
      bar.addEventListener("mouseover", (e) => {
         bar.previousElementSibling.style.opacity = 1;
         console.log("working");
      });

      // hide balance element on mouse leave
      bar.addEventListener("mouseleave", (e) => {
         bar.previousElementSibling.style.opacity = 0;
      });

      // return all bar which data-id is bigger than 50
      if (id < 50) return;
      bar.style.backgroundColor = "hsl(186, 34%, 60%)";
   });
};

window.addEventListener("DOMContentLoaded", getData);
