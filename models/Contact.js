import { Schema , Types, model }  from "mongoose";

const contactSchema  = new Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match:  [/\S+@\S+\.\S+/, 'Invalid email format'],
        lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      unique: true,
      match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number']
    },
    label: {
      type: String,
      enum: {
      values: ['Friend', 'Work', 'Family'],
      message: 'Label must be Friend, Work, or Family'
    }
  },

    address: {
      city: String,
      state: String,
      country: String
    }


},


{ timestamps: true }

)


export default model('Contact', contactSchema);
