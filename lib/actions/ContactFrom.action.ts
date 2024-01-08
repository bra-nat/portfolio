"use server"

import { connectToDatabase } from "../mongoose"
import ContactForm from "@/database/ContactFrom.model";

export async function createForm(params: any) {
    
    try { 
        connectToDatabase();

        const { name, phone, email, subject, message } = params;

         await ContactForm.create({
            name,
            phone, 
            email, 
            subject,
            message
        })
     } catch (error) {
        
    }
}