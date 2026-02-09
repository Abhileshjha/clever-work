import { Mail, Phone, Github, Twitter, Linkedin, Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContact } from "@/hooks/use-contact";
import { insertContactMessageSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFooter() {
  const contactMutation = useContact();
  
  const form = useForm<z.infer<typeof insertContactMessageSchema>>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof insertContactMessageSchema>) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <footer className="pt-24 pb-8 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let's build something <br/>
              <span className="text-gradient">exceptional.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Ready to start your project? Contact me today for a quote. 
              We offer 2 free consultation meetings before kicking off.
            </p>

            <div className="space-y-6 mb-10">
              <a href="mailto:thecleverwork@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Me</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors">thecleverwork@gmail.com</div>
                </div>
              </a>

              <a href="tel:+918766350093" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Me</div>
                  <div className="text-xl font-bold group-hover:text-primary transition-colors">+91 8766350093</div>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors text-muted-foreground">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Name" className="bg-background/50 border-white/10 h-12 focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Email" className="bg-background/50 border-white/10 h-12 focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 min-h-[120px] focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} The Clever Work. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by The Clever Work
          </div>
        </div>
      </div>
    </footer>
  );
}
