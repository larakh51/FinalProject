"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const deleteAllBtn = document.getElementById("deleteAllBtn");
  const addBtn = document.getElementByld("addContactBtn");
  const popup = document.getElementById("popupOverlay");
  const form = document.getElementById("contactForm");
  const detailsPopup = document.getElementById("detailsPopup");
  
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = contacts.filter((c) =>
      c.name.toLowerCase().includes(query)
    );
    renderContacts(filtered);
  }); 

  deleyeAllBtn.addEventListener("click",() =>{
    if(confirm("Are you sure you want to delete all contacts?"){
      contacts.length = 0;
      renderContacts([]);
    }
  });

  addBtn.addEventListener("click" , () => {
    form.reset();
    popup.classList.remove("hidden");
    form.onsubmit = (ev) => {
      ev.preventDefault();
      const newContact = {
        name: document.getElementByld("nameInput").value,
        phone: document.getElementById("phoneInput").value,
        address: document.getElementById("addressInput").value,
        age: document.getElementById("ageInput").value,
        imageUrl:
          document.getElementById("imageUrlInput").value ||
          "https://i.pravatar.cc/200?u=" + Math.random(),
      };
      if (!newContact.name || !newContact.phone){
        alert("Name and phone are required.");
        return;
      }
      contacts.push(newContact);
      renderContacts(contacts);
      popup.classList.add("hidden");
    };
  });
        
        

  
                                

  


                  
