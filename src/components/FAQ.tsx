import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const ref = useScrollAnimation();

  const faqs = [
    {
      question: "What curriculum does GS KIGEME A follow?",
      answer: "We follow the Rwanda Education Board Curriculum, which provides a world-class education that develops students' critical thinking, problem-solving skills, and global perspective. Our curriculum is designed to prepare students for international opportunities while respecting local culture and values."
    },
    {
      question: "What is the admission process?",
      answer: "Our admission process includes submitting an application form, academic transcripts, a personal statement, and attending an interview. We also conduct assessment tests for certain grade levels. The process typically takes 2-3 weeks from application submission to final decision."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer a wide range of activities including sports (football, basketball, athletics), arts (music, drama, visual arts), STEM clubs, debate club, environmental club, and community service programs. Students are encouraged to participate in at least two activities."
    },
    {
      question: "What are the school hours?",
      answer: "School hours are from 7:30 AM to 3:30 PM, Monday through Friday. We also offer after-school programs and activities until 5:00 PM. Boarding students have structured study time in the evenings with supervision from our residential staff."
    },
    {
      question: "Do you offer boarding facilities?",
      answer: "Yes, we have modern boarding facilities for both boys and girls with separate dormitories. Our boarding program includes meals, supervision, study time, and recreational activities. Boarding students receive additional academic support and life skills development."
    },
    {
      question: "What support is available for students with special needs?",
      answer: "We have a dedicated special needs support team including trained counselors and learning support specialists. We provide individualized education plans, additional tutoring, and assistive technologies as needed to ensure every student can succeed."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about GS KIGEME A
            </p>
          </div>

          <div className="glass-card p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;