import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "GS KIGEME A",
        "Nyamagabe District, Southern Province",
        "Rwanda"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +250 788 123 456",
        "Admissions: +250 788 123 457",
        "Emergency: +250 788 123 458"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@kigemeschool.rw",
        "admissions@kigemeschool.rw",
        "principal@kigemeschool.rw"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 7:30 AM - 5:00 PM",
        "Saturday: 8:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about admissions, 
            want to schedule a visit, or need more information about our programs, 
            we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair font-bold text-2xl text-primary mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-secondary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="font-playfair font-bold text-2xl text-primary mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-secondary mr-3" />
                  Send us a Message
                </h3>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-center mb-8">
                    We'd love to hear from you! Choose your preferred method to get in touch with us.
                  </p>
                  
                  <div className="grid gap-4">
                    <a 
                      href="mailto:info@kigemeschool.rw?subject=General Inquiry&body=Hello, I would like to get in touch regarding..."
                      className="block p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                          <Mail className="h-6 w-6 text-primary-foreground group-hover:text-secondary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                          <p className="text-secondary text-sm">info@kigemeschool.rw</p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="tel:+250788123456"
                      className="block p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                          <Phone className="h-6 w-6 text-primary-foreground group-hover:text-secondary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                          <p className="text-secondary text-sm">+250 788 123 456</p>
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:principal@kigemeschool.rw?subject=Message for Principal"
                      className="block p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                          <MessageCircle className="h-6 w-6 text-primary-foreground group-hover:text-secondary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">Contact Principal</h4>
                          <p className="text-secondary text-sm">principal@kigemeschool.rw</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="card-elevated">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-[var(--radius)] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h4 className="font-playfair font-semibold text-lg text-primary mb-2">
                        GS KIGEME A Location
                      </h4>
                      <p className="text-muted-foreground">
                        Interactive map will be embedded here
                      </p>
                      <Button className="btn-outline mt-4">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center card-elevated p-6 bg-secondary/5">
          <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
            Emergency Contact
          </h3>
          <p className="text-muted-foreground mb-4">
            For urgent matters outside office hours, please call our emergency line:
          </p>
          <a 
            href="tel:+250788123458" 
            className="font-bold text-secondary text-lg hover:text-secondary-foreground transition-colors"
          >
            +250 788 123 458
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;