let taskNumberElement = document.getElementById("taskNumber");
let taskNumber = document.getElementById("taskNumber").innerText.trim();

let CheckNumberElement = document.getElementById("CheckNumber");
let CheckNumber = document.getElementById("CheckNumber").innerText.trim();


function setAlertOnClickById(elementId) {

    let button = document.getElementById(elementId);


    button.addEventListener("click", function () {
            alert("Board Update Successfully!");

            this.disabled = true; 
            this.classList.add("opacity-20", "cursor-not-allowed");

            let taskNumberElement = document.getElementById("taskNumber");
            let taskNumber = parseInt(taskNumberElement.innerText.trim(), 10);
            let CheckNumberElement = document.getElementById("CheckNumber");
            let CheckNumber = parseInt(CheckNumberElement.innerText.trim(), 10);

            taskNumber--;  
            CheckNumber++; 

            if(taskNumber===0){
                alert("Congrates!!! You Have completed all the current task.");
            }
            
            taskNumberElement.innerText = taskNumber.toString().padStart(2, "0"); 
            CheckNumberElement.innerText = CheckNumber.toString().padStart(2, "0");

            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let amPm = hours >= 12 ? "PM" : "AM";

            hours = hours % 12 || 12;
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");

            let formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;

            let taskElement = this.closest(".task-container").querySelector("h1");
            let taskTitle = taskElement ? taskElement.innerText.trim() : "Unknown Task";

            let taskList = document.getElementById("taskList");

            let newTaskMessage = document.createElement("p");
            newTaskMessage.className = "text-[15px] text-gray-700 leading-relaxed bg-white p-4 mt-6 rounded-lg shadow";
            newTaskMessage.innerHTML = `You completed the task <span class="font-semibold text-gray-900">"${taskTitle}"</span> at <span class="text-blue-600">${formattedTime}</span>.`;

            taskList.appendChild(newTaskMessage);

            document.getElementById("clearHistoryBtn").addEventListener("click", function() {
                newTaskMessage.className="";
                newTaskMessage.innerHTML = ""; 
            });


    });
}

setAlertOnClickById("completeButton1");
setAlertOnClickById("completeButton2");
setAlertOnClickById("completeButton3");
setAlertOnClickById("completeButton4");
setAlertOnClickById("completeButton5");
setAlertOnClickById("completeButton6");