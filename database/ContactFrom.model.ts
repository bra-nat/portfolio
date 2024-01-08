import { Schema, models, model, Document } from "mongoose";

export interface IContactForm extends Document {
    name: string;
    phone: string;
    email: string,
    subject: string;
    message: string;
    createdAt: Date;
}

const ContactFormSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String},
    message: {type: String}, 
    createdAt: {type: Date, default: Date.now}
});

const ContactForm = models.ContactForm || model("ContactForm", ContactFormSchema)

export default ContactForm;