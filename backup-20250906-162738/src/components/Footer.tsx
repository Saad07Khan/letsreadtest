import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const booksList = [
    "Let's Read Educator's Handbook",
    "Nursery School Reader & workbook",
    "Jr. Kg School Reader & workbook", 
    "Sr. Kg School Reader & workbook",
    "Grade 1 School Reader & workbook"
  ];

  const programsList = [
    "Level 0 Beginners Kit",
    "Level 1 Fluency Kit",
    "Level 2 Proficiency Kit", 
    "Level 3 Mastery Kit"
  ];

  const companyLinks = [
    "About Us",
    "Products",
    "Programs",
    "Resources",
    "Contact Us",
    "Blogs"
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-child-pink/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-child-yellow rounded-full p-2 mr-3">
                <div className="text-primary font-bold text-lg">LR</div>
              </div>
              <div className="text-xl font-bold">LET'S READ</div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Let's Read: Empowering young minds through literacy.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Let's Read Books */}
          <div>
            <h3 className="text-xl font-bold mb-6">Let's Read Books</h3>
            <ul className="space-y-3">
              {booksList.map((book, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    • {book}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programsList.map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                    • {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-3 text-child-yellow" />
                <div>
                  <div className="text-sm text-white/80">Phone: +917056857080</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 mt-1 mr-3 text-child-yellow" />
                <div>
                  <div className="text-sm text-white/80">sales@letsreadindia.in</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-3 text-child-yellow" />
                <div>
                  <div className="text-sm text-white/80">
                    Kondhwa Budrukh, Pune, Maharashtra, India-411048
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-white/60">
                Monday To Friday : 8:30AM - 02:PM Saturday, Sunday: Close
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © 2024 Let's Read. All rights reserved. Built with ❤️ for children's education.
            </div>
            <div className="flex space-x-6">
              {companyLinks.slice(0, 4).map((link, index) => (
                <a key={index} href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;