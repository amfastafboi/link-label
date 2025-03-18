import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-gray-300">
              We are a digital marketing agency specializing in creating innovative solutions 
              for businesses worldwide.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-300">+91 7003569921</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">info@LinkLabel.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">123 Street, Kolkata, India</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} LinkLabel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer;