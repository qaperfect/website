import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Trophy, BookOpen, Users } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Kigeme Students Win National Science Fair",
      excerpt: "Our Grade 11 students secured first place in the national science competition with their innovative water purification project.",
      date: "March 15, 2025",
      category: "Achievement",
      icon: Trophy,
      image: null
    },
    {
      id: 2,
      title: "New STEM Laboratory Officially Opens",
      excerpt: "State-of-the-art laboratory equipment arrived to enhance our science and technology programs for all students.",
      date: "March 10, 2025",
      category: "Facilities",
      icon: BookOpen,
      image: null
    },
    {
      id: 3,
      title: "Community Service Week Success",
      excerpt: "Students and staff came together to support local families, demonstrating our commitment to community engagement.",
      date: "March 5, 2025",
      category: "Community",
      icon: Users,
      image: null
    }
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      date: "April 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Main Hall"
    },
    {
      title: "Annual Sports Day",
      date: "April 25, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Complex"
    },
    {
      title: "Science Exhibition",
      date: "May 3, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "STEM Laboratory"
    },
    {
      title: "Cultural Festival",
      date: "May 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "School Auditorium"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings at GS KIGEME A. From student 
            achievements to upcoming events, discover what makes our community special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair font-bold text-2xl text-primary mb-8">
              Latest News
            </h3>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <Card key={news.id} className="card-elevated group hover:shadow-[var(--shadow-strong)]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                        <news.icon className="h-6 w-6 text-accent-foreground group-hover:text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                            {news.category}
                          </span>
                          <span className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {news.date}
                          </span>
                        </div>
                        <h4 className="font-playfair font-semibold text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {news.excerpt}
                        </p>
                        <Button variant="ghost" className="text-secondary hover:text-secondary-foreground hover:bg-secondary p-0">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="btn-outline">
                View All News
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="font-playfair font-bold text-2xl text-primary mb-8">
              Upcoming Events
            </h3>
            <div className="card-elevated p-6">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-primary mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-secondary" />
                        {event.date}
                      </div>
                      <div className="flex items-center ml-6">
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start ml-6">
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button className="btn-primary w-full">
                  View Full Calendar
                </Button>
              </div>
            </div>

            {/* Stay Connected */}
            <div className="card-elevated p-6 mt-8 bg-accent/20">
              <h4 className="font-playfair font-semibold text-lg text-primary mb-3">
                Stay Connected
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Follow us on social media and contact us directly for the latest updates and announcements.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:info@kigemeschool.rw?subject=Newsletter Subscription&body=Hello, I would like to stay updated with GS KIGEME A news and events."
                  className="block w-full"
                >
                  <Button className="btn-secondary w-full text-sm">
                    Email for Updates
                  </Button>
                </a>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Or follow us on social media for daily updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;