import express from 'express';

import {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} from '../controllers/contactController.js';

import { validateContact }  from '../middleware/validateContact.js';
import { protect } from "../middleware/auth.middleware.js";


import { Router } from 'express';

const router = Router();


router.get('/' ,protect, getAllContacts);
router.get('/:id' , protect, getContactById);
router.post('/',protect,  validateContact, createContact);
router.put('/:id' , protect, updateContact);
router.delete('/:id',   protect  , deleteContact);

export default router;