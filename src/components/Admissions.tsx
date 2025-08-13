import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  FileText, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageSquare,
  DollarSign,
  Clock,
  GraduationCap
} from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Complete our online application form with student information and academic history.",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit academic transcripts, birth certificate, and passport photos.",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Attend entrance assessment and meet with our admissions team.",
      icon: Users
    },
    {
      step: 4,
      title: "Enrollment",
      description: "Receive admission decision and complete enrollment process.",
      icon: GraduationCap
    }
  ];

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025" },
    { event: "Application Deadline", date: "March 31, 2025" },
    { event: "Entrance Assessments", date: "April 15-30, 2025" },
    { event: "Admission Results", date: "May 15, 2025" },
    { event: "Enrollment Confirmation", date: "June 30, 2025" },
    { event: "New Student Orientation", date: "August 1, 2025" }
  ];

  const faqs = [
    {
      question: "What are the age requirements for admission?",
      answer: "Students must be between 10-50 years old depending on the grade level they are applying for."
    },
    {
      question: "Are sceince studies available available?",
      answer: "Yes, we offer merit-based science studies. Applications are reviewed during the admission process."
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain small class sizes with a maximum of 20 students per class to ensure personalized attention."
    },
    {
      question: "Do you offer day facilities?",
      answer: "Currently, we are a boarding school. However, we assist families in finding reliable accommodation nearby."
    }
  ];

  return (
    <section id="admissions" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            Admissions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our community of learners! We welcome students who are eager to grow, 
            learn, and contribute to our vibrant school community. Start your journey 
            with us today.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="font-playfair font-bold text-3xl text-primary text-center mb-12">
            Admission Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="card-elevated text-center relative">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    {step.step}
                  </div>
                  <h4 className="font-playfair font-semibold text-lg text-primary mb-3">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Important Dates */}
          <div className="card-elevated p-8">
            <h3 className="font-playfair font-semibold text-2xl text-primary mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-secondary mr-3" />
              Important Dates
            </h3>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                  <span className="font-medium text-foreground">{item.event}</span>
                  <span className="text-secondary font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-elevated p-8">
            <h3 className="font-playfair font-semibold text-2xl text-primary mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 text-secondary mr-3" />
              Admission Inquiry
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  To begin your admission inquiry, please contact us directly using the information below. 
                  Our admissions team will guide you through the entire process.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-accent/10 rounded-lg">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Email Admissions</p>
                    <a 
                      href="mailto:admissions@kigemeschool.rw?subject=Admission Inquiry&body=Hello, I would like to inquire about admission for my child. Please provide me with more information about the application process."
                      className="text-secondary hover:text-secondary-foreground transition-colors"
                    >
                      admissions@kigemeschool.rw
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Call Admissions</p>
                    <a 
                      href="tel:+250788123457"
                      className="text-secondary hover:text-secondary-foreground transition-colors"
                    >
                      +250 788 123 457
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Office Hours: Monday - Friday, 7:30 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="font-playfair font-bold text-3xl text-primary text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for More Info */}
        <div className="text-center card-elevated p-8 bg-accent/20">
          <h3 className="font-playfair font-bold text-2xl text-primary mb-4">
            Need More Information?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our admissions team is here to help you through every step of the process. 
            Contact us for personalized assistance and to schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+250788123457">
              <Button className="btn-primary">
                <Phone className="mr-2 h-4 w-4" />
                Call Admissions
              </Button>
            </a>
            <a href="mailto:admissions@kigemeschool.rw?subject=Admission Questions">
              <Button className="btn-outline">
                <Mail className="mr-2 h-4 w-4" />
                Email Questions
              </Button>
            </a>
            <a href="mailto:admissions@kigemeschool.rw?subject=Schedule Campus Visit&body=Hello, I would like to schedule a campus visit for my family. Please let me know available dates and times.">
              <Button className="btn-outline">
                <Clock className="mr-2 h-4 w-4" />
                Schedule Visit
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;