import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import heroBackground from "@/assets/hero-background.jpg";
import kigemeLogo from "@/assets/kigeme-logo.jpg";

const Hero = () => {
  const heroRef = useScrollAnimation();
  const studentsCount = useAnimatedCounter(800);
  const yearsCount = useAnimatedCounter(50);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="GS KIGEME A Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4 mb-8 fade-in">
            <img
              src={kigemeLogo}
              alt="Kigeme School Logo"
              className="h-16 w-16 sm:h-20 sm:w-20"
            />
            <div>
              <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
                GS KIGEME A
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-medium mt-2">
                Empowering minds, building futures
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="slide-up">
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Where excellence meets innovation. Join a community dedicated to 
              academic achievement, character development, and preparing students 
              for success in an ever-changing world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="glass-card border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-8 py-4 transition-all duration-300 hover-scale backdrop-blur-sm">
                Schedule a Visit
              </Button>
              <Button className="btn-primary text-lg px-8 py-4 hover-scale shadow-glow">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="flex items-center space-x-3 text-white glass-card p-4 hover-scale">
                <Users className="h-8 w-8 text-secondary" />
                <div>
                  <p ref={studentsCount.ref} className="font-bold text-2xl">{studentsCount.count}+</p>
                  <p className="text-white/80">Students</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white glass-card p-4 hover-scale">
                <Award className="h-8 w-8 text-secondary" />
                <div>
                  <p ref={yearsCount.ref} className="font-bold text-2xl">{yearsCount.count}+</p>
                  <p className="text-white/80">Years Excellence</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-white glass-card p-4 hover-scale">
                <MapPin className="h-8 w-8 text-secondary" />
                <div>
                  <p className="font-bold text-2xl">Rwanda</p>
                  <p className="text-white/80">Kigeme, Nyamagabe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 text-white rotate-90" />
      </div>
    </section>
  );
};

export default Hero;