import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts.length);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

countContacts();
