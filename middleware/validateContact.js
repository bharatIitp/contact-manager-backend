import { body , validationResult} from 'express-validator';

export const validateContact = [
    body('name')
    .isEmpty().withMessage('Name is required')
    .isLength({min: 2}).withMessage('Name must be at least 2 characters long'),


    body('email')
    .isEmail().withMessage('Invalid email formate'),

    body('phone')
    .isEmpty().withMessage('Phone number is required')
    .isMobilePhone().withMessage('Invalid phone number'),


    body('label')
    .isIn(['Friend', 'Family', 'Work']).withMessage('Invalid label'),


    (req,res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array() });
        }

        next();
    }


];