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

  
                                

  


                  
