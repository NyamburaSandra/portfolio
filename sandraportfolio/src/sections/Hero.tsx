import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  HStack,
  VStack,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const MotionBox = motion(Box);

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.50, gray.100)"
      pt={16}
    >
      <Container maxW="6xl">
        <VStack gap={8} textAlign="center">
          {/* Animated Introduction */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text color="blue.600" fontWeight="medium" fontSize="lg" mb={4}>
              Hello, I'm
            </Text>
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              color="gray.900"
              mb={6}
              bgGradient="linear(to-r, blue.600, purple.600)"
              bgClip="text"
            >
              Sandra Nyambura
            </Heading>
            <Heading
              as="h2"
              size="xl"
              color="gray.600"
              mb={8}
              fontWeight="medium"
            >
              Full Stack Developer & UI/UX Designer
            </Heading>
          </MotionBox>

          {/* Description */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            mb={12}
            maxW="2xl"
          >
            <Text fontSize="lg" color="gray.600">
              I craft digital experiences that combine beautiful design with robust functionality. 
              Passionate about creating innovative solutions that make a difference.
            </Text>
          </MotionBox>

          {/* Action Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              gap={4} 
              justify="center" 
              mb={16}
            >
              <Button
                colorScheme="blue"
                size="lg"
                onClick={scrollToAbout}
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <HStack gap={2} align="center">
                  <FaArrowDown />
                  <Text>View My Work</Text>
                </HStack>
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                size="lg"
              >
                Get In Touch
              </Button>
            </Stack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HStack gap={6} justify="center">
              <Link
                href="#"
                aria-label="GitHub"
                color="gray.700"
                _hover={{ color: 'blue.600', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                p={3}
                bg="white"
                rounded="full"
                shadow="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                color="gray.700"
                _hover={{ color: 'blue.600', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                p={3}
                bg="white"
                rounded="full"
                shadow="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Email"
                color="gray.700"
                _hover={{ color: 'blue.600', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                p={3}
                bg="white"
                rounded="full"
                shadow="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaEnvelope size={20} />
              </Link>
            </HStack>
          </MotionBox>

          {/* Profile Image - Optional */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            mt={16}
          >
            <Box
              w="64"
              h="64"
              bgGradient="linear(to-br, blue.400, blue.600)"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              shadow="2xl"
              mx="auto"
            >
              <Box
                w="56"
                h="56"
                bg="gray.200"
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="6xl">👋</Text>
              </Box>
            </Box>
          </MotionBox>

          {/* Scroll Indicator */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            position="absolute"
            bottom={8}
            left="50%"
            transform="translateX(-50%)"
          >
            <Box className="animate-bounce">
              <FaArrowDown color="gray.400" />
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;