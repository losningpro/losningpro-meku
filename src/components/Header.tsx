import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Call Button */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">LøsningPRO</span>
            </Link>
            <a 
              href="tel:+4543123456" 
              className="hidden sm:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Ring nu</span>
            </a>
          </div>

          {/* Center: Search and Navigation */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Søg efter produkter og tjenester..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <nav className="flex items-center justify-center space-x-8">
                <Link 
                  to="/kob" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/kob') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Køb
                </Link>
                <Link 
                  to="/tjenester" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/tjenester') || location.pathname.startsWith('/tjenester/') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Tjenester
                </Link>
                <Link 
                  to="/hvordan-fungerer" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/hvordan-fungerer') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Hvordan fungerer
                </Link>
                <Link 
                  to="/om-os" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/om-os') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Om os
                </Link>
                <Link 
                  to="/arbejdsgalleri" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/arbejdsgalleri') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Arbejdsgalleri
                </Link>
                <Link 
                  to="/kontakt" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/kontakt') ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>

          {/* Right: Cart and Login */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link 
              to="/log-pa" 
              className="hidden sm:block text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Log på
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Søg efter produkter og tjenester..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <nav className="space-y-2">
              <Link 
                to="/kob" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/kob') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Køb
              </Link>
              <Link 
                to="/tjenester" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/tjenester') || location.pathname.startsWith('/tjenester/') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tjenester
              </Link>
              <Link 
                to="/hvordan-fungerer" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/hvordan-fungerer') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hvordan fungerer
              </Link>
              <Link 
                to="/om-os" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/om-os') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Om os
              </Link>
              <Link 
                to="/arbejdsgalleri" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/arbejdsgalleri') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Arbejdsgalleri
              </Link>
              <Link 
                to="/kontakt" 
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive('/kontakt') ? 'text-primary bg-primary/10' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                to="/log-pa" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log på
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a 
                href="tel:+4543123456" 
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">Ring nu: +45 43 12 34 56</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;