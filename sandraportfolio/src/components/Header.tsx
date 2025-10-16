import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import resumePdf from '../assets/SandraNyambura Resume.pdf';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      bg={isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      boxShadow={isScrolled ? 'lg' : 'none'}
      transition="all 0.3s"
    >
      <Flex
        minH="60px"
        py={2}
        px={4}
        align="center"
        maxW="6xl"
        mx="auto"
      >
        {/* Mobile menu button */}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            variant="ghost"
            color="gray.600"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </IconButton>
        </Flex>
        
        {/* Logo */}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
        </Flex>

        {/* Desktop Navigation */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          gap={6}
          display={{ base: 'none', md: 'flex' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              color="gray.700"
              _hover={{ color: '#8b5cf6' }}
              transition="colors 0.2s"
              fontWeight="medium"
            >
              {item.name}
            </Link>
          ))}
          <a href={resumePdf} download style={{ textDecoration: 'none' }}>
            <Button
              bg="#8b5cf6"
              color="white"
              px={6}
              py={2}
              rounded="lg"
              _hover={{ bg: '#8b5cf6' }}
              transition="colors 0.2s"
              fontWeight="medium"
            >
              Download Resume
            </Button>
          </a>
        </Stack>
      </Flex>

      {/* Mobile Navigation */}
      {isOpen && (
        <Box display={{ md: 'none' }}>
          <Stack
            bg="white"
            p={4}
            gap={4}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                color="gray.700"
                _hover={{ color: '#8b5cf6' }}
                transition="colors 0.2s"
                fontWeight="medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href={resumePdf} download style={{ textDecoration: 'none' }}>
              <Button
                bg="#8b5cf6"
                color="white"
                px={6}
                py={2}
                rounded="lg"
                _hover={{ bg: '#8b5cf6' }}
                transition="colors 0.2s"
                fontWeight="medium"
                mt={4}
              >
                Download Resume
              </Button>
            </a>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;