// Favourite Feature.
const hearts = document.querySelectorAll(".heart-button");
let heartDisplay = document.getElementById("heart-show");

let heartCount = parseInt(heartDisplay.innerText);

hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartDisplay.innerText = heartCount;
  });
});

// Copy Function

const copy = document.querySelectorAll(".copy-button");
let copyDisplay = document.getElementById("copy-show");

let copyCount = parseInt(copyDisplay.innerText);

copy.forEach(function (copyBtn) {
  copyBtn.addEventListener("click", function () {
    copyCount++;
    copyDisplay.innerText = copyCount;

    const numberElement = copyBtn.closest(".bg-white").querySelector(".number");
    const number = numberElement.innerText;

    navigator.clipboard.writeText(number);
    alert(number + " copied!");
  });
});


// Call Function

const call=document.querySelectorAll(".call-button");
let callDisplay=document.getElementById("call-show")

let callCount=parseInt(callDisplay.innerText)

call.forEach(function(callBtn){
  callBtn.addEventListener("click",function(){
    if(callCount>=20)
    {
      callCount -= 20
      callDisplay.innerText = callCount
    }
    else
    {
      alert("Not Enough Balance")
      return;
    }

    const serviceElement= callBtn.closest(".bg-white").querySelector(".service")
    const service=serviceElement.innerText
    const numberElement = callBtn.closest(".bg-white").querySelector(".number")
    const number = numberElement.innerText;

    alert("📞 Calling " + service + " " + number + "...")


    // Call History

    const callHistory=document.getElementById("history-container")
    const time= new Date().toLocaleTimeString()


    const div = document.createElement("div")
        div.innerHTML = `
          <div class="bg-white mt-4">
              <div class="bg-[#FAFAFA] p-3 flex items-center justify-between rounded-2xl">
                <div class="flex flex-col">
                  <h1 class="font-bold">${service}</h1>
                  <p class="text-[#5C5C5C] mt-1">${number}</p>
                </div>
                <div>
                  <p>${time}</p>
                </div>
              </div>
            </div>
        `;

        callHistory.append(div);
  })
})

// Call history clear function

const clear=document.getElementById("clear-button")
const callHistory=document.getElementById("history-container")

clear.addEventListener("click",function(){

  callHistory.innerHTML="";
})