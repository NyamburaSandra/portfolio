import React, { useEffect, useState } from 'react';
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
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function useTypewriter(text: string, speed: number = 80) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed.length ? displayed : text;
}

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const typedName = useTypewriter('Sandra Nyambura', 80);

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.50, gray.100)"
      pt={{ base: 24, md: 32 }}
    >
      <Container maxW="6xl">
        <VStack gap={8} textAlign="center">
          {/* Animated Introduction */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h1"
              size="3xl"
              color="#8b5cf6"
              mb={8}
              fontWeight="medium"
            >
              Hello, I'm
            </Heading>
            <MotionHeading
              as="h1"
              size="3xl"
              fontWeight="medium"
              color="#8b5cf6"
              mb={6}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {typedName}
            </MotionHeading><br />
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
              gap={6} 
              justify="center" 
              mb={16}
            >
              <Button
                bg="#8b5cf6"
                color="white"
                px={6}
                py={2}
                rounded="lg"
                fontWeight="medium"
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
                px={6}
                py={2}
                rounded="lg"
                fontWeight="medium"
                borderColor="#8b5cf6"
                color="#8b5cf6"
                _hover={{ bg: '#f5f3ff', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
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
                href="https://github.com/NyamburaSandra"
                aria-label="GitHub"
                color="gray.700"
                _hover={{ color: '#8b5cf6', transform: 'translateY(-2px)' }}
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
                href="https://www.linkedin.com/in/sandra-nyambura-5656a0213"
                aria-label="LinkedIn"
                color="gray.700"
                _hover={{ color: '#8b5cf6', transform: 'translateY(-2px)' }}
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
            </HStack>
          </MotionBox>

          {/* Profile Image - Optional */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            mt={16}
          >
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;