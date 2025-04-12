import { motion } from 'framer-motion';
import { ChevronDown, MonitorSmartphone, BarChart, Users, ShoppingCart } from 'lucide-react';

function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-22 mt-8 px-20 sm:mt-10 md:mt-0 md:py-18">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg">
              Digital Marketing & Development
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
              Boost Your Business with 360° Digital Solutions
            </h1>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-2 cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <MonitorSmartphone className="text-blue-600" />
                <span className="text-lg">Custom Website & App Development for Any Business</span>
                <ChevronDown className="text-blue-600 group-hover:rotate-180 transition-transform" />
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <BarChart className="text-blue-600" />
                <span className="text-lg">SEO, PPC, and Social Media Ads to Maximize Visibility</span>
                <ChevronDown className="text-blue-600 group-hover:rotate-180 transition-transform" />
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <Users className="text-blue-600" />
                <span className="text-lg">Lead Generation & Brand Awareness Strategies</span>
                <ChevronDown className="text-blue-600 group-hover:rotate-180 transition-transform" />
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 cursor-pointer group"
                whileHover={{ x: 10 }}
              >
                <ShoppingCart className="text-blue-600" />
                <span className="text-lg">ROI-Driven E-commerce & Marketplace Management</span>
                <ChevronDown className="text-blue-600 group-hover:rotate-180 transition-transform" />
              </motion.div>
            </div>
            
            <div className="space-x-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-400 transition-colors">
                Get Quotation
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
              alt="Digital Marketing"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;