import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};
