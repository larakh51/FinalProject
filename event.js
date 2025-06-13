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

  document
  .getElementByld("contactsContainer")
  .addEventListener("click",(e) => {
    const index = e.target.dataset.id;
    if(e.target.classList.contains("delete-btn")) {
      contacts.splice(index, 1);
      renderContacts(contacts);
    }

    if(e.target.classList.contains("edit-btn")){
      const contact = contacts[index];
      document.getElementByld("nameInput").value = contact.name;
      document.getElementByld("phoneInput").value = contact.phone;
      document.getElementByld("addressInput").value = contact.address;
      document.getElementByld("ageInput").value = contact.age;
      document.getElementByld("imageUrlInput").value = contact.imageUrl;

      popup.classList.remove("hidden");

      form.onsubmit = (ev) => {
        ev.preventDefault();
        contacts[index] = {
          name: document.getElementByld("nameInput").value,
          phone: document.getElementByld("phoneInput").value,
          address: document.getElementByld("addressInput").value,
          age: document.getElementByld("ageInput").value,
          imageUrl: document.getElementByld("imageUrlInput").value ||
              "https://i.pravatar.cc/200?u=" + Math.random(),
          };
        renderContacts(contacts);
        popup.classList.add("hiddem");
      };
    }

    
        
        

  
                                

  


                  
