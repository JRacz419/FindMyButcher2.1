const wrapper = document.querySelector(".wrapper"); 
const selectBtn = wrapper.querySelector(".select-btn"); 
const searchInp = wrapper.querySelector("input"); 
const options = wrapper.querySelector(".options");  
let countries = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",                  
"Connecticut", "Delaware", "Distric of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",                  
"Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",                  
"Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",                  
"New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",                  
"Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont","Virginia",
"Washington", "West Virginia","Wisconsin", "Wyoming"];  

let countryLinks = {    "Ohio": "states/ohio.html",    };   

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
    
    let searchWord = searchInp.value.toLowerCase();     
        
    arr = countries.filter(data => {         return data.toLowerCase().startsWith(searchWord);     }).map(data => 
        {         let isSelected = data === selectBtn.firstElementChild.innerText ? "selected" : "";         
        let countryLink = countryLinks[data];         
        return `<li onclick="updateName(this); window.location='${countryLink}'" class="${isSelected}">${data}</li>`;     }).join("");     
        options.innerHTML = arr ? arr : '<p style="margin-top: 10px;">Oops! State not found</p>'; });  
        
        selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));