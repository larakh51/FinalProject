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

    card.innerHTML =  `
      <img class="avatar" src="${contact.imageUrl}" alt="${contact.name}">
      <div class="info">
        <div class="contact-name">${contact.name}</div>
        <div class="contact-phone">📞 ${contact.phone}</div>
        <div class="card-buttons">
          <button class="view-btn" data-id="${index}">ℹ️</button>
          <button class="edit-btn" data-id="${index}">✏️</button>
          <button class="delete-btn" data-id="${index}">🗑️</button>
        </div>
      </div>
    `;

      

    
