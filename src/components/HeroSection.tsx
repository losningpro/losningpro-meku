import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Elektriker & VVS i Glostrup
              <span className="block text-2xl lg:text-3xl font-normal mt-2 text-white/90">
                Hurtig service
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professionel hjælp til alle dine el- og VVS-opgaver. Vi kommer hurtigt ud og løser problemet effektivt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/tjenester" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Se alle tjenester
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/kontakt" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Få et tilbud
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">24/7 akutservice</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Certificerede teknikere</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Garanti på arbejdet</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professionel elektriker arbejder med el-installation"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-gray-600">Tilfredse kunder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;