const wrapper = document.querySelector(".wrapper"); 
const selectBtn = wrapper.querySelector(".select-btn"); 
const searchInp = wrapper.querySelector("input"); 
const options = wrapper.querySelector(".options");  
let countries = ["Ohio", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",                  
"Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",                  
"Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",                  
"Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",                  
"Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",                  
"Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];  

let countryLinks = {    "Ohio": "states/ohio.html",    "Algeria": "algeria.html",};   

function addCountry(selectedCountry = null) {     options.innerHTML = "";     

countries.forEach(country => {         
    let isSelected = country === selectedCountry ? "selected" : "";         
    let countryLink = countryLinks[country];         
    let li = `<li onclick="updateName(this); window.location='${countryLink}'" class="${isSelected}">${country}</li>`;         
    
    options.insertAdjacentHTML("beforeend", li);     }); }  addCountry();  
    function updateName(selectedLi) {     searchInp.value = "";     addCountry(selectedLi.innerText);     
    
    wrapper.classList.remove("active");     
    selectBtn.firstElementChild.innerText = selectedLi.innerText;     
    window.location = countryLinks[selectedLi.innerText]; }  
    searchInp.addEventListener("keyup", () => {     let arr = [];     
        let searchWord = searchInp.value.toLowerCase();     a
        
        rr = countries.filter(data => {         return data.toLowerCase().startsWith(searchWord);     }).map(data => {         let isSelected = data === selectBtn.firstElementChild.innerText ? "selected" : "";         let countryLink = countryLinks[data];         return `<li onclick="updateName(this); window.location='${countryLink}'" class="${isSelected}">${data}</li>`;     }).join("");     options.innerHTML = arr ? arr : '<p style="margin-top: 10px;">Oops! Country not found</p>'; });  selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));