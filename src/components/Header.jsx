import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { MdMenu, MdClose } from 'react-icons/md';
import { IoMdClipboard } from 'react-icons/io';
import SignIn from '../pages/SignIn';
import Cart from './Cart';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Body scroll lock
  useEffect(() => {
    const isAnyOpen = menuOpen || showSignIn || showCart;
  
    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // HTML too
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen, showSignIn, showCart]);
  

  const toggleMenu = () => {
    setMenuOpen(prev => {
      if (!prev) {
        setShowCart(false);
        setShowSignIn(false);
      }
      return !prev;
    });
  };

  const toggleSignIn = () => {
    setShowSignIn(prev => {
      if (!prev) {
        setMenuOpen(false);
        setShowCart(false);
      }
      return !prev;
    });
  };

  const toggleCart = () => {
    setShowCart(prev => {
      if (!prev) {
        setMenuOpen(false);
        setShowSignIn(false);
      }
      return !prev;
    });
  };

  return (
    <header className="relative max-w-[1440px] w-full mx-auto">
      {/* SignIn Overlay */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 bg-[#D2D2D759] backdrop-blur-sm transition-opacity duration-300">
          <div className="absolute top-0 md:top-[30px] left-0 w-full flex justify-center py-10">
            <SignIn onClose={toggleSignIn} />
          </div>
        </div>
      )}

      {/* Cart Overlay Blur */}
      <AnimatePresence>
        {(menuOpen || showCart) && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-[#D2D2D759] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navbar (slide from left) */}
      <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.4 }}
          className="fixed top-[40px] left-0 z-50 w-full sm:w-[50%] md:hidden h-full bg-white shadow-xl overflow-auto"
        >
          <Navbar
            containerStyles="flex flex-col border-[#121212]"
            onSignInClick={toggleSignIn}
            onCartClick={toggleCart}
            showCart={showCart}
            onLinkClick={() => setMenuOpen(false)} // closes mobile menu
          />
        </motion.div>
      )}

      </AnimatePresence>


      {/* Desktop Navbar */}
      <Navbar
        containerStyles="hidden md:flex justify-between border-y-1 border-[#121212]"
        onSignInClick={toggleSignIn}
        onCartClick={toggleCart}
        showCart={showCart}
      />

      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center border-y-1 z-50 relative bg-white">
        <div className="text-2xl cursor-pointer border-r-1 p-2" onClick={toggleMenu}>
          {menuOpen ? <MdClose /> : <MdMenu />}
        </div>

        {/* SignIn (clipboard icon) */}
        <div className="text-2xl cursor-pointer border-l-1 p-2" onClick={toggleSignIn}>
          <IoMdClipboard />
        </div>
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <Navbar
          containerStyles="flex flex-col md:hidden border-[#121212]"
          onSignInClick={toggleSignIn}
          onCartClick={toggleCart}
          showCart={showCart}
        />
      )}

      {/* Cart Panel */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            key="cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 z-50 w-full md:w-[720px] h-full bg-white shadow-xl overflow-auto"
          >
            <Cart onClose={toggleCart} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
