"use strict";

document.addEventListener("DOMContentLoaded", () => {
  renderContacts(contacts);
});

function renderContact(list){
  const container = document.getElementByld
  ("contactsContainer");
  container.innerHTML = "";

  list.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className = "contact-card";

    
