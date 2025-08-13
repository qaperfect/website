import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const Testimonials = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  
  // Animated counters for stats
  const stat1 = useAnimatedCounter(98);
  const stat2 = useAnimatedCounter(95);
  const stat3 = useAnimatedCounter(100);
  const stat4 = useAnimatedCounter(4.9);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Uwimana",
      role: "Parent",
      content: "GS KIGEME A has been transformational for my daughter. The teachers are dedicated, and the school's emphasis on both academics and character development is exactly what we were looking for. She's thriving here!",
      rating: 5,
      image: null
    },
    {
      id: 2,
      name: "Jean Baptiste Nzeyimana",
      role: "Alumni, Class of 2022",
      content: "The foundation I received at GS KIGEME A prepared me well for university. The STEM program and supportive environment helped me develop critical thinking skills that I use every day in my engineering studies.",
      rating: 5,
      image: null
    },
    {
      id: 3,
      name: "Marie Claire Mukamana",
      role: "Current Student, Grade 11",
      content: "I love the diverse opportunities at GS KIGEME A. From participating in science fairs to being part of the drama club, there's something for everyone. The teachers really care about each student's success.",
      rating: 5,
      image: null
    },
    {
      id: 4,
      name: "Dr. Patrick Habimana",
      role: "Parent & Community Leader",
      content: "As a parent and someone involved in education policy, I'm impressed by GS KIGEME A's commitment to excellence. They're preparing students not just academically, but as responsible citizens.",
      rating: 5,
      image: null
    },
    {
      id: 5,
      name: "Emmanuel Kayitare",
      role: "Alumni, Class of 2020",
      content: "The leadership skills and confidence I gained at GS KIGEME A have been invaluable in my career. The school's motto 'Empowering minds, building futures' truly reflects what they do for every student.",
      rating: 5,
      image: null
    },
    {
      id: 6,
      name: "Grace Uwamahoro",
      role: "Parent",
      content: "The school's approach to learning is innovative and engaging. My son looks forward to going to school every day, which speaks volumes about the positive environment the teachers create.",
      rating: 5,
      image: null
    }
  ];

  const stats = [
    { number: `${stat1.count}%`, label: "Parent Satisfaction Rate", ref: stat1.ref },
    { number: `${stat2.count}%`, label: "University Acceptance Rate", ref: stat2.ref },
    { number: `${stat3.count}%`, label: "Would Recommend to Others", ref: stat3.ref },
    { number: `${stat4.count.toFixed(1)}/5`, label: "Overall Rating", ref: stat4.ref }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the students, parents, and 
            alumni who make up the GS KIGEME A community and discover why they 
            chose us for their educational journey.
          </p>
        </div>

        {/* Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 hover-scale">
              <div 
                ref={stat.ref}
                className="font-playfair font-bold text-3xl sm:text-4xl text-primary mb-2 transition-all duration-300"
              >
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-elevated h-full hover-scale glass-card">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Quote className="h-5 w-5 text-secondary" />
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center card-elevated p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="font-playfair font-bold text-2xl text-primary mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the difference that quality education, dedicated teachers, 
            and a supportive community can make in your child's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Application Process
            </button>
            <button className="btn-outline">
              Schedule Campus Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;