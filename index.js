const contacts = require("./contacts")

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
            break;

        case "get":
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
            break;
        
        case "add":
            const addedContact = await contacts.addContact({ name, email, phone });
            return console.log(addedContact);
      break;


    }
}

invokeAction({ action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22" })
