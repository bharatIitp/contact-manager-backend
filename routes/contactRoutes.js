import express from 'express';

import {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from '../controllers/contactController.js';

import { validateContact }  from '../middleware/validateContact.js';

import { Router } from 'express';

const router = Router();

router.get('/' , getAllContacts);
router.get('/:id' , getContactById);
router.post('/', validateContact, createContact);
router.put('/:id' , updateContact);
router.delete('/:id', deleteContact);

export default router;