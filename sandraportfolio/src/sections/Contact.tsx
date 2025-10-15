import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Input,
  Textarea,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaClock,
  FaGlobe
} from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Nairobi, Kenya',
      color: 'red.500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+254 123 456 789',
      color: 'green.500'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sandra@example.com',
      color: 'blue.500'
    },
    {
      icon: FaClock,
      label: 'Working Hours',
      value: 'Mon - Fri, 9:00 AM - 6:00 PM',
      color: 'purple.500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', color: '#333', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: '#0077B5', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', color: '#1DA1F2', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F', label: 'Instagram' },
    { icon: FaDribbble, href: 'https://dribbble.com', color: '#EA4C89', label: 'Dribbble' },
    { icon: FaBehance, href: 'https://behance.net', color: '#1769FF', label: 'Behance' },
  ];

  return (
    <Box id="contact" py={20} bg="gray.50">
      <Container maxW="6xl">
        <VStack gap={16}>
          {/* Section Header */}
          <VStack gap={4} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Get in <Text as="span" color="blue.500">Touch</Text>
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </Text>
            </MotionBox>
          </VStack>

          {/* Contact Information Cards */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            w="full"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  bg="white"
                  p={6}
                  rounded="xl"
                  shadow="md"
                  textAlign="center"
                  border="1px"
                  borderColor="gray.100"
                  _hover={{ 
                    transform: "translateY(-4px)", 
                    shadow: "lg",
                    borderColor: info.color
                  }}
                  css={{ transition: "all 0.3s" }}
                >
                  <VStack gap={4}>
                    <Box
                      p={4}
                      bg={`${info.color.split('.')[0]}.50`}
                      rounded="full"
                      display="inline-flex"
                    >
                      <Icon as={info.icon} w={6} h={6} color={info.color} />
                    </Box>
                    <VStack gap={1}>
                      <Text fontWeight="semibold" color="gray.900">
                        {info.label}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {info.value}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Contact Form and Info */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} w="full">
            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <VStack gap={6} align="start">
                <VStack gap={2} align="start">
                  <Heading size="lg" color="gray.900">
                    Send me a message
                  </Heading>
                  <Text color="gray.600">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </Text>
                </VStack>

                <Box
                  as="form"
                  onSubmit={handleSubmit}
                  w="full"
                  bg="white"
                  p={8}
                  rounded="xl"
                  shadow="lg"
                  border="1px"
                  borderColor="gray.100"
                >
                  <VStack gap={6}>
                    {/* Name and Email Row */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                      <Box>
                        <Text color="gray.700" fontWeight="medium" mb={2}>
                          Full Name *
                        </Text>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          size="lg"
                          bg="gray.50"
                          border="1px"
                          borderColor="gray.200"
                          _focus={{ 
                            borderColor: "blue.500", 
                            bg: "white",
                            shadow: "md"
                          }}
                          rounded="lg"
                          required
                        />
                      </Box>
                      <Box>
                        <Text color="gray.700" fontWeight="medium" mb={2}>
                          Email Address *
                        </Text>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          size="lg"
                          bg="gray.50"
                          border="1px"
                          borderColor="gray.200"
                          _focus={{ 
                            borderColor: "blue.500", 
                            bg: "white",
                            shadow: "md"
                          }}
                          rounded="lg"
                          required
                        />
                      </Box>
                    </SimpleGrid>

                    {/* Subject */}
                    <Box w="full">
                      <Text color="gray.700" fontWeight="medium" mb={2}>
                        Subject *
                      </Text>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        size="lg"
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{ 
                          borderColor: "blue.500", 
                          bg: "white",
                          shadow: "md"
                        }}
                        rounded="lg"
                        required
                      />
                    </Box>

                    {/* Message */}
                    <Box w="full">
                      <Text color="gray.700" fontWeight="medium" mb={2}>
                        Message *
                      </Text>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={6}
                        resize="vertical"
                        bg="gray.50"
                        border="1px"
                        borderColor="gray.200"
                        _focus={{ 
                          borderColor: "blue.500", 
                          bg: "white",
                          shadow: "md"
                        }}
                        rounded="lg"
                        required
                      />
                    </Box>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      w="full"
                      _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                      css={{ transition: "all 0.2s" }}
                      rounded="lg"
                    >
                      <HStack gap={2}>
                        <FaPaperPlane />
                        <Text>Send Message</Text>
                      </HStack>
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <VStack gap={8} align="start">
                <VStack gap={2} align="start">
                  <Heading size="lg" color="gray.900">
                    Let's connect
                  </Heading>
                  <Text color="gray.600">
                    Find me on social media or schedule a call to discuss your project.
                  </Text>
                </VStack>

                {/* Social Media Links */}
                <Box>
                  <Text fontWeight="semibold" color="gray.900" mb={4}>
                    Follow me on social media
                  </Text>
                  <Flex wrap="wrap" gap={4}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          p={4}
                          bg="white"
                          color={social.color}
                          rounded="lg"
                          shadow="md"
                          _hover={{
                            color: social.color,
                            transform: "translateY(-2px) scale(1.05)",
                            shadow: "lg"
                          }}
                          css={{ transition: "all 0.3s" }}
                          border="1px"
                          borderColor="gray.100"
                          cursor="pointer"
                        >
                          <Icon as={social.icon} w={6} h={6} />
                        </Box>
                      </a>
                    ))}
                  </Flex>
                </Box>

                {/* Quick Contact */}
                <Box
                  bg="white"
                  p={6}
                  rounded="xl"
                  shadow="md"
                  border="1px"
                  borderColor="gray.100"
                  w="full"
                >
                  <VStack gap={4} align="start">
                    <Heading size="md" color="gray.900">
                      Quick Contact
                    </Heading>
                    <VStack gap={3} align="start" w="full">
                      <HStack>
                        <Icon as={FaEnvelope} color="blue.500" />
                        <a
                          href="mailto:sandra@example.com"
                          style={{ textDecoration: 'none' }}
                        >
                          <Text color="blue.600" _hover={{ textDecoration: "underline" }}>
                            sandra@example.com
                          </Text>
                        </a>
                      </HStack>
                      <HStack>
                        <Icon as={FaPhone} color="green.500" />
                        <Text color="gray.700">+254 123 456 789</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaMapMarkerAlt} color="red.500" />
                        <Text color="gray.700">Nairobi, Kenya</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaGlobe} color="purple.500" />
                        <Text color="gray.700">Available for freelance work</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>

                {/* Response Time */}
                <Box
                  bg="blue.50"
                  p={4}
                  rounded="lg"
                  border="1px"
                  borderColor="blue.200"
                  w="full"
                >
                  <HStack gap={3}>
                    <Icon as={FaClock} color="blue.500" />
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold" color="blue.900" fontSize="sm">
                        Quick Response Time
                      </Text>
                      <Text color="blue.700" fontSize="sm">
                        I typically respond within 24 hours
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;