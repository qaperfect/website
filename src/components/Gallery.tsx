import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "campus", name: "Campus Life" },
    { id: "academics", name: "Academics" },
    { id: "sports", name: "Sports" },
    { id: "events", name: "Events" }
  ];

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "campus",
      title: "Students in the Library",
      description: "Students studying together in our modern library facility"
    },
    {
      id: 2,
      type: "image",
      category: "academics",
      title: "Science Laboratory",
      description: "Students conducting experiments in our well-equipped lab"
    },
    {
      id: 3,
      type: "video",
      category: "events",
      title: "Annual Cultural Festival",
      description: "Highlights from our vibrant cultural celebration"
    },
    {
      id: 4,
      type: "image",
      category: "sports",
      title: "Football Team Practice",
      description: "Our football team during training session"
    },
    {
      id: 5,
      type: "image",
      category: "campus",
      title: "Art Class in Session",
      description: "Students expressing creativity in our art studio"
    },
    {
      id: 6,
      type: "image",
      category: "academics",
      title: "Mathematics Competition",
      description: "Students participating in inter-school math competition"
    },
    {
      id: 7,
      type: "video",
      category: "events",
      title: "Graduation Ceremony 2023",
      description: "Celebrating our graduates' achievements"
    },
    {
      id: 8,
      type: "image",
      category: "sports",
      title: "Basketball Championship",
      description: "Our team winning the regional basketball championship"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through GS KIGEME A. Explore our campus, 
            witness student achievements, and get a glimpse of the vibrant 
            community that makes our school special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id ? "btn-primary" : "btn-outline"}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="card-elevated group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square bg-muted">
                {/* Placeholder for image/video */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="text-center">
                      <Play className="h-12 w-12 text-primary mx-auto mb-2" />
                      <span className="text-sm text-primary font-medium">Video</span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-2"></div>
                      <span className="text-sm text-primary font-medium">Photo</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View {item.type === "video" ? "Video" : "Image"}
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-1 text-sm">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="btn-outline">
            Load More Photos
          </Button>
        </div>

        {/* Video Highlights Section */}
        <div className="mt-20">
          <h3 className="font-playfair font-bold text-3xl text-primary text-center mb-12">
            Video Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.filter(item => item.type === "video").map((video) => (
              <Card key={video.id} className="card-elevated group">
                <div className="relative aspect-video bg-muted">
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="group-hover:scale-110 transition-transform"
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-playfair font-semibold text-lg text-primary mb-2">
                    {video.title}
                  </h4>
                  <p className="text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="bg-background rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
                      {filteredItems[selectedImage]?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {filteredItems[selectedImage]?.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 -left-12 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 -right-12 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;