import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, Phone, Mail, Clock, Building, 
  Send, MessageSquare, HeadphonesIcon 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: ["Addis Ababa, Ethiopia", "Bole District", "Chemical Industrial Zone"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+251-11-xxx-xxxx", "+251-91-xxx-xxxx", "Emergency: +251-90-xxx-xxxx"],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@yabchemicals.com", "sales@yabchemicals.com", "support@yabchemicals.com"],
      color: "primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency only"],
      color: "accent"
    }
  ];

  const departments = [
    { name: "General Inquiry", value: "general" },
    { name: "Sales & Quotations", value: "sales" },
    { name: "Technical Support", value: "technical" },
    { name: "Customer Service", value: "customer" },
    { name: "Partnerships", value: "partnerships" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for all your chemical supply needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={info.title}
                  className="text-center hover-shadow hover-lift group transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${info.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-6 w-6 ${info.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+251-xx-xxx-xxxx" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your inquiry" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your chemical requirements, quantities, delivery timeline, etc."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="corporate" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Location and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="hover-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Bole District, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="hover-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HeadphonesIcon className="h-5 w-5 text-accent" />
                    <span>Need Immediate Assistance?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For urgent chemical supply needs or technical emergencies, contact our rapid response team:
                  </p>
                  
                  <div className="space-y-3">
                    <Button variant="accent" className="w-full justify-start" size="lg">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Priority Support
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Emergency Response:</strong> 24/7 for chemical spills, safety incidents
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Technical Support:</strong> Monday-Friday, 8 AM - 8 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;