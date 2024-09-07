import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContacts = createFakeContact();
      contacts.push(newContacts);
    }

    await writeContacts(contacts);

    console.log(`${number} new contacts generated and added successfully!`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
