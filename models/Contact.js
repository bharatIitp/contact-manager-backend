import { Schema , Types, model }  from "mongoose";

const contactSchema  = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:  /.+\@.+\..+/,
        lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    label: {
      type: String,
      enum: ['Friend', 'Family', 'Work', 'Other'],
      default: 'Other'
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
