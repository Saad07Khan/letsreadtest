import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Let's read really helped my students build clarity of sounds and gaining confidence in listening and speaking. The hands-on activities got my students curious for learning.",
      author: "Harshita Doe",
      role: "TeachForIndia Fellow",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The 'Let's Read' materials have been an invaluable asset in my classroom. Their impact has been especially profound for students facing learning challenges. The interactive and engaging nature of the activities has been a source of joy for all students, fostering a fun-filled approach to reading and comprehension.",
      author: "Muhammed Hasan",
      role: "Teach For India",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Thanks to Let's Read, learning English as a language has become engaging, joyful, and highly effective for the students. I wholeheartedly recommend the Let's Read program to any educator seeking to revolutionize literacy instruction and make a lasting impact in their classrooms.",
      author: "Harshita Doe", 
      role: "RAASTA School Transformation Program",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-20 h-20 bg-child-yellow rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-child-pink rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-child-blue rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">TESTIMONIALS</h2>
          <div className="w-20 h-1 bg-child-pink mx-auto mb-6"></div>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-child-pink rounded-full"></div>
            <div className="w-2 h-2 bg-child-yellow rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            See what people say about our company
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary text-white relative">
              <div className="absolute -top-4 left-6">
                <div className="bg-child-yellow w-12 h-12 rounded-lg flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <CardContent className="p-8 pt-12">
                <p className="text-white/90 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-child-pink rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-child-yellow text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;