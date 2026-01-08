import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from "./lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SERVICE_ID = "service_umq28ur";
    const TEMPLATE_ID = "template_215bqbn";
    const PUBLIC_KEY = "gNebO0RQvmE2GOiFG";
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result)=> {
             setIsSubmitting(true);

            setTimeout(() => {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                })
            setIsSubmitting(false);

            }, 1500);
            setFormData({name: "", email: "", message: ""});

        }).catch(()=> alert("Oops, Something went wrong, Please try again"))
       

    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:oluwatobilobaadedapo81@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    oluwatobilobaadedapo81@gmail.com
                                </a>
                            </div>
                        </div>

                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+2347052151804" className="text-muted-foreground hover:text-primary transition-colors">
                                   +234 7052 151 804
                                </a>
                            </div>
                        </div>

                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a  className="text-muted-foreground hover:text-primary transition-colors">
                                   Lagos, Nigeria
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank">
                                <Linkedin />
                            </a>
                             <a href="#" target="_blank">
                                <Twitter />
                            </a>
                             <a href="#" target="_blank">
                                <Instagram />
                            </a>
                             <a href="#" target="_blank">
                                <Twitch />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required value={formData.name} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Abegunde Oluwatobiloba..." onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="oluwatobilobaadedapo81@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your message</label>
                            <textarea  id="message" name="message" required value={formData.message} className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..." onChange={(e) => setFormData({...formData, message: e.target.value})} />
                        </div>
                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 z-100",

                        )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                           
                            <Send size={16}/>

                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}