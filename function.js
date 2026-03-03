let currentTab = "all";
const tabActive = ["bg-navy","border-navy","text-white"];
const tabInactive= ["bg-transparent","text-slate-700","border-slate-700" ];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");

console.log(allContainer,interviewContainer,rejectedContainer);

function switchTab(tab){
    // console.log(tab);
    const tabs = ["all","interview","rejected"];

    for(const t of tabs){

        const tabName =document.getElementById("tab-"+ t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    if(tab==="all"){
        allContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
    }
    else if (tab==="interview"){
        allContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
        interviewContainer.classList.remove("hidden");
    }
    else{
        allContainer.classList.add("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
    }
}
switchTab(currentTab);
