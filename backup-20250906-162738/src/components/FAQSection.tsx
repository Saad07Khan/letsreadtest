import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Let's Read teach reading skills?",
      answer: "Let's Read uses kinesthetic learning methods with hands-on activities, games, and interactive materials to make reading engaging and effective for children of all learning styles."
    },
    {
      question: "How Can I track my child's progress with Let's Read?",
      answer: "Our program includes detailed progress tracking tools and assessment methods that help parents and teachers monitor reading development and identify areas for improvement."
    },
    {
      question: "Is Let's Read suitable for children of all ages?",
      answer: "Yes! Let's Read offers different levels from Level 0 (beginners) to Level 3 (mastery), making it suitable for children from early learners to advanced readers."
    },
    {
      question: "How Can I get started with Let's Read at home?",
      answer: "You can start by selecting the appropriate level kit for your child and following our comprehensive educator's guide that provides step-by-step instructions for implementation."
    },
    {
      question: "Are there any teacher training resources available?",
      answer: "Yes, we provide extensive teacher training materials, workshops, and ongoing support to ensure educators can effectively implement our reading program."
    },
    {
      question: "Is Let's Read suitable for non-English setting?",
      answer: "Let's Read is designed to help children transition from their mother tongue to English reading, making it particularly effective in multilingual environments."
    },
    {
      question: "Can I take a franchise and start my own Let's Read center?",
      answer: "Yes! We offer franchise opportunities for entrepreneurs who want to start their own Let's Read center and help children in their community develop reading skills."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute left-0 bottom-0 w-80 h-80 opacity-20">
        <div className="w-full h-full bg-gradient-secondary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-child-pink mx-auto mb-6"></div>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-child-pink rounded-full"></div>
            <div className="w-2 h-2 bg-child-yellow rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Get Answers to Some Common Queries.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-0 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;