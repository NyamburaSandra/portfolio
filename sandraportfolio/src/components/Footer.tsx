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
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaInstagram,
  FaDribbble,
  FaArrowUp,
  FaHeart,
  FaCode,
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
    { icon: FaEnvelope, href: 'mailto:sandra@example.com', color: '#EA4335', label: 'Email' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
    { icon: FaDribbble, href: 'https://dribbble.com', color: '#EA4C89', label: 'Dribbble' },
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
    <Box as="footer" bg="gray.900" color="white" py={16}>
      <Container maxW="6xl">
        <VStack gap={12}>
          {/* Main Footer Content */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            {/* Brand Section */}
            <VStack align="start" gap={4}>
              <Heading size="lg" color="white">
                Sandra<Text as="span" color="blue.400">.</Text>
              </Heading>
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
                    _hover={{ color: "blue.400" }}
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
                      _hover={{ color: "blue.400" }}
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
                    href="mailto:sandra@example.com"
                    style={{ textDecoration: 'none' }}
                  >
                    <Text color="gray.300" fontSize="sm" _hover={{ color: "blue.400" }}>
                      sandra@example.com
                    </Text>
                  </a>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="gray.400" fontSize="xs" textTransform="uppercase" fontWeight="semibold">
                    Phone
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    +254 123 456 789
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
                _hover={{ color: "blue.400", transform: "translateY(-2px)" }}
                css={{ transition: "all 0.2s" }}
              >
                <HStack gap={1}>
                  <Text>Back to top</Text>
                  <FaArrowUp size={12} />
                </HStack>
              </Button>
            </HStack>
          </Flex>

          {/* Tech Stack Credits */}
          <HStack gap={2} color="gray.500" fontSize="xs" textAlign="center">
            <Icon as={FaCode} />
            <Text>Built with React, TypeScript, Chakra UI & Framer Motion</Text>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;