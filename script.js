const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let issue = ["Sales", "Document Pickup", "Document Dispatch", "Document Return", "Payment", "Payment Refund", "Sales Men", "Payment Employee", "Purchese Man", "Document"];

function addIssue(selectedIssue) {
    options.innerHTML = "";
    issue.forEach(issue => {
        let isSelected = issue == selectedIssue ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${issue}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addIssue();

function updateName(selectedLi) {
    searchInp.value = "";
    addIssue(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = issue.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Choose Issue not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));