import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Shield, Users2, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Building character through honesty, respect, and ethical behavior in all aspects of school life."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in academics, sports, and personal development."
    },
    {
      icon: Heart,
      title: "Respect",
      description: "Fostering a culture of mutual respect, understanding, and appreciation for diversity."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing creativity, critical thinking, and modern approaches to learning and problem-solving."
    }
  ];

  const achievements = [
    "Top 5% National Academic Performance",
    "Outstanding STEM Program Recognition",
    "Excellence in Sports and Arts",
    "Community Service Leadership Award",
    "Digital Learning Innovation Certificate",
    "Environmental Sustainability Champion"
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            About GS KIGEME A
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 50 years, GS KIGEME A has been a beacon of educational excellence 
            in Rwanda, nurturing young minds and building tomorrow's leaders through 
            innovative teaching, strong values, and community engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4 flex items-center">
                <BookOpen className="h-6 w-6 text-secondary mr-3" />
                Our Mission
              </h3>
              <p className="text-foreground leading-relaxed">
                To provide quality education that empowers students with knowledge, 
                skills, and values necessary for personal growth, academic excellence, 
                and meaningful contribution to society. We create an inclusive learning 
                environment that celebrates diversity and promotes critical thinking.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4 flex items-center">
                <Users2 className="h-6 w-6 text-secondary mr-3" />
                Our Vision
              </h3>
              <p className="text-foreground leading-relaxed">
                To be the leading educational institution in Rwanda, recognized for 
                academic excellence, innovative teaching methods, and graduates who 
                are confident, compassionate, and capable of making positive changes 
                in their communities and beyond.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="card-elevated p-8">
            <h3 className="font-playfair font-semibold text-2xl text-primary mb-6">
              Notable Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-playfair font-bold text-3xl text-primary text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated group hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                    <value.icon className="h-8 w-8 text-accent-foreground group-hover:text-secondary-foreground" />
                  </div>
                  <h4 className="font-playfair font-semibold text-xl text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;