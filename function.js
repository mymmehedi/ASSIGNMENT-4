let currentTab = "all";
const tabActive = ["bg-navy", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-700"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");


function switchTab(tab) {
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {

        const tabName = document.getElementById("tab-" + t);
        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for (const section of pages) {
        section.classList.add("hidden")
    }
    if (tab === "all") {
        allContainer.classList.remove("hidden");
        // interviewContainer.classList.add("hidden");
        // rejectedContainer.classList.add("hidden");
    }
    else if (tab === "interview") {
        // allContainer.classList.add("hidden");
        // rejectedContainer.classList.add("hidden");
        interviewContainer.classList.remove("hidden");
    }
    else {
        // allContainer.classList.add("hidden");
        // interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
    }
}

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");

totalStat.innerText = allContainer.children.length;
// interviewStat.innerText = allContainer.children.length;
// rejectStat.innerText = allContainer.children.length;

switchTab(currentTab);


document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    
    if(clickedElement.classList.contains("interview")){
        interviewContainer.appendChild(card);
        status.innerText = "Interviewed";
    }
    if(clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
    }
    if(clickedElement.classList.contains("delete")){
        interviewContainer.appendChild(card);
    }
});