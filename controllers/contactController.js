import Contact from '../models/Contact.js';

// GET all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET one contact
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
};

// POST create new contact
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// PUT update contact
export const updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed' });
  }
};

// DELETE contact
export const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
};
