const input = document.querySelector("input");
const inputBtn = document.querySelector(".input-btn");
const deleteBtn = document.querySelector(".delete-btn");
const tabBtn = document.querySelector(".tab-btn");
const ul = document.querySelector("ul");

const LEADS_KEY = "leads";
const localLeads = localStorage.getItem(LEADS_KEY);

let leads = [];

function render(leads) {
  // parameter for re-usability

  let stringLeads = "";
  for (const lead of leads) {
    stringLeads += `<li><a href=${lead} target=_"blank">${lead}</a></li>`;
  }
  ul.innerHTML = stringLeads;
}

if (localLeads) {
  leads = JSON.parse(localLeads);
  render(leads);
}

inputBtn.addEventListener("click", () => {
  leads.push(input.value);
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));

  input.value = null;
  render(leads);
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  leads = [];

  render(leads);
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leads.push(tabs[0].url);
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));

    render(leads);
  });
});
