import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

// Utility function to validate MongoDB ID
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET all contacts
export const getAllContacts = async (req, res, next) => {
  


  try {
    const userId = req.user._id;
    const { search = "" , page = 1 , limit= 10} = req.query;

    const query = {
      user: userId,
      $or: [


        { name: {$regex: search , $options: "i"}},
        { email: {$regex: search , $options: "i"}},
        { label: {$regex: search , $options: "i"}},

      ],
    };

    const skip = (page - 1)*limit;

    const contacts = await Contact.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    next(err);
  }
  }




// GET contact by ID
export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid contact ID' });
    }

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

// POST create contact
export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, label } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      label,
      user: req.user._id,
    });

    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};


// PUT update contact
export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid contact ID' });
    }

    const updated = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

// DELETE contact
export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid contact ID' });
    }

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (err) {
    next(err);
  }
};
