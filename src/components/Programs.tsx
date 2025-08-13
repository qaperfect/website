import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, Palette, Trophy, Download, BookOpen, Music } from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";

const Programs = () => {
  const programs = [
    {
      icon: Microscope,
      title: "STEM Excellence",
      description: "State-of-the-art science laboratories, mathematics enrichment, technology integration, and engineering workshops that prepare students for the digital age.",
      features: ["Modern Science Labs", "Robotics Club", "Math Olympiad", "Computer Programming"],
      image: scienceLab
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Comprehensive arts program including visual arts, drama, music, and creative writing to develop well-rounded, expressive students.",
      features: ["Visual Arts Studio", "Drama Theater", "Music Ensemble", "Creative Writing"],
      image: null
    },
    {
      icon: Trophy,
      title: "Sports & Wellness",
      description: "Diverse athletic programs and wellness initiatives that promote physical fitness, teamwork, and healthy lifestyle habits.",
      features: ["Football & Basketball", "Athletics Track", "volley ball", "Health Education"],
      image: null
    }
  ];

  const highlights = [
    "Rwanda Education Board Curriculum",
    "Bilingual Education (English & French)",
    "Small Class Sizes (20 students max)",
    "Individualized Learning Plans",
    "University Preparation Program",
    "Life Skills Development"
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum combines academic rigor with creative expression 
            and physical development, ensuring every student discovers their potential 
            and develops skills for lifelong success.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="card-elevated group">
              {program.image && (
                <div className="image-hover h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <program.icon className="h-6 w-6 text-accent-foreground group-hover:text-secondary-foreground" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Curriculum Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair font-bold text-3xl text-primary mb-6">
              Curriculum Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
              <Button className="btn-outline">
                Schedule Campus Tour
              </Button>
            </div>
          </div>

          <div className="card-elevated p-8 bg-accent/20">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Music className="h-8 w-8 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-xl text-primary">
                  Extracurricular Excellence
                </h4>
                <p className="text-muted-foreground">Beyond the classroom</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Our students participate in over 20 clubs and activities, from debate 
              society and environmental club to coding competitions and community 
              service projects.
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Student Government & Leadership</li>
              <li>• Science Fair & Innovation Competitions</li>
              <li>• Cultural Exchange Programs</li>
              <li>• Community Outreach Initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;