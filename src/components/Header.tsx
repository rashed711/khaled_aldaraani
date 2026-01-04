import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'عن المكتب', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'المقالات', href: '/articles' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'nav-blur border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group cursor-pointer z-[60]">
            <div className="relative rounded-xl border border-saudi-gold/30 bg-saudi-gold/5 backdrop-blur-sm overflow-hidden group-hover:border-saudi-gold transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
              <img
                src="https://c.top4top.io/p_3656be96m1.png"
                alt="Logo"
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg md:text-xl leading-none tracking-tight text-white">خالد الدرعاني</span>
              <span className="text-[9px] md:text-[10px] text-saudi-gold tracking-[0.2em] md:tracking-[0.1em] uppercase font-bold mt-1 opacity-90">محامون ومستشارون قانونيون</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-bold transition-all duration-300 relative group ${isActive(link.href) ? 'text-saudi-gold' : 'text-gray-300 hover:text-saudi-gold'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 right-0 h-[2px] bg-saudi-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

            <button
              onClick={toggleDarkMode}
              className="text-gray-400 hover:text-saudi-gold transition-colors p-2 rounded-full hover:bg-white/5"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              )}
            </button>

            <Link
              to="/contact"
              className="relative bg-saudi-gold hover:bg-gold-light text-saudi-navy px-8 py-3 rounded-full text-sm font-black transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-saudi-gold/20 overflow-hidden group animate-[pulse_3s_infinite] hover:animate-none"
            >
              <span className="animate-shimmer"></span>
              <span className="relative z-10">اطلب استشارة مجانية</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-saudi-gold p-2 z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer Overlay */}
        {/* Mobile Drawer Overlay Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Drawer Sidebar (Right to Left) */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-saudi-navy border-l border-white/10 shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <span className="text-saudi-gold font-black text-lg">القائمة الرئيسية</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold flex items-center justify-between group ${isActive(link.href) ? 'text-saudi-gold' : 'text-gray-300'}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="group-hover:translate-x-[-10px] transition-transform duration-300">{link.name}</span>
                  {isActive(link.href) && <div className="w-1.5 h-1.5 rounded-full bg-saudi-gold"></div>}
                </Link>
              ))}

              <div className="w-full h-px bg-white/10 my-2"></div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-saudi-gold text-saudi-navy px-6 py-4 rounded-xl text-center font-black shadow-lg hover:bg-white transition-colors"
              >
                اطلب استشارة مجانية
              </Link>
            </div>

            <div className="mt-auto p-6 bg-black/20 text-center">
              <p className="text-xs text-gray-500">© 2024 خالد الدرعاني</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
