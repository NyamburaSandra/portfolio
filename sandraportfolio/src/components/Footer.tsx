import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Button,
  Flex,
} from '@chakra-ui/react';
import Logo from './Logo';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaCoffee
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', color: '#333', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: '#0077B5', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', color: '#1DA1F2', label: 'Twitter' },
    { icon: FaEnvelope, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sandranyambura62@gmail.com', color: '#EA4335', label: 'Email' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
    
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Brand Identity',
    'Consulting',
    'Maintenance & Support'
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
  <Box as="footer" bg="gray.900" color="white" py={12} ml={0} mr={0} pl={{ base: 4, md: 12 }}>
      <Container maxW="6xl">
        <VStack gap={12}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 10, md: 14, lg: 20 }} w="full">
            {/* Brand Section */}
            <VStack align="start" gap={{ base: 8, md: 10, lg: 12 }}>
              <Logo />
              <Text color="gray.300" fontSize="sm" lineHeight="tall">
                A passionate full-stack developer and designer creating 
                meaningful digital experiences that make a difference.
              </Text>
              <HStack gap={4}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      p={3}
                      bg="gray.800"
                      rounded="lg"
                      color={social.color}
                      _hover={{
                        color: social.color,
                        bg: "gray.700",
                        transform: "translateY(-2px)"
                      }}
                      css={{ transition: "all 0.3s" }}
                      cursor="pointer"
                    >
                      <Icon as={social.icon} w={5} h={5} />
                    </Box>
                  </a>
                ))}
              </HStack>
            </VStack>

            {/* Services */}
            <VStack align="start" gap={4}>
              <Heading size="md" color="white">
                Services
              </Heading>
              <VStack align="start" gap={2}>
                {services.map((service, index) => (
                  <Text
                    key={index}
                    color="gray.300"
                    fontSize="sm"
                    _hover={{ color: "#8b5cf6" }}
                    css={{ transition: "color 0.2s" }}
                    cursor="pointer"
                  >
                    {service}
                  </Text>
                ))}
              </VStack>
            </VStack>

            {/* Quick Links */}
            <VStack align="start" gap={4}>
              <Heading size="md" color="white">
                Quick Links
              </Heading>
              <VStack align="start" gap={2}>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text
                      color="gray.300"
                      fontSize="sm"
                      _hover={{ color: "#8b5cf6" }}
                      css={{ transition: "color 0.2s" }}
                    >
                      {link.label}
                    </Text>
                  </a>
                ))}
              </VStack>
            </VStack>

            {/* Contact Info */}
            <VStack align="start" gap={4}>
              <Heading size="md" color="white">
                Get in Touch
              </Heading>
              <VStack align="start" gap={3}>
                <VStack align="start" gap={1}>
                  <Text color="gray.400" fontSize="xs" textTransform="uppercase" fontWeight="semibold">
                    Email
                  </Text>
                  <a
                    href="#"
                    onClick={(ev) => {
                      ev.preventDefault();
                      const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=sandranyambura62@gmail.com';
                      const opened = window.open(gmailLink, '_blank');
                      if (!opened) {
                        // fallback to mailto
                        window.location.href = 'mailto:sandranyambura62@gmail.com';
                      }
                    }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text color="gray.300" fontSize="sm" _hover={{ color: "#8b5cf6" }}>
                      sandranyambura62@gmail.com
                    </Text>
                  </a>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="gray.400" fontSize="xs" textTransform="uppercase" fontWeight="semibold">
                    Phone
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    +254 715 576 095
                  </Text>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="gray.400" fontSize="xs" textTransform="uppercase" fontWeight="semibold">
                    Location
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    Nairobi, Kenya
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* Divider */}
          <Box w="full" h="1px" bg="gray.700" />

          {/* Bottom Footer */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            w="full"
            gap={4}
          >
            <HStack gap={2} color="gray.400" fontSize="sm">
              <Text>Made with</Text>
              <Icon as={FaHeart} color="red.400" />
              <Text>&</Text>
              <Icon as={FaCoffee} color="yellow.400" />
              <Text>by Sandra Nyambura</Text>
            </HStack>

            <HStack gap={4} color="gray.400" fontSize="sm">
              <Text>&copy; 2024 Sandra Nyambura. All rights reserved.</Text>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                color="gray.400"
                _hover={{ color: "#8b5cf6", transform: "translateY(-2px)" }}
                css={{ transition: "all 0.2s" }}
              >
                <HStack gap={1}>
                  <Text>Back to top</Text>
                  <FaArrowUp size={12} />
                </HStack>
              </Button>
            </HStack>
          </Flex>

        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;