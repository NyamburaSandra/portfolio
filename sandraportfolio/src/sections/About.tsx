import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLightbulb, FaHeart } from 'react-icons/fa';

// Resume download temporarily disabled — removed import to avoid unused symbol

const MotionBox = motion(Box);

const About: React.FC = () => {
  const features = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "I write maintainable, scalable code that follows best practices and industry standards."
    },
    {
      icon: FaPalette,
      title: "Design Focused",
      description: "Creating beautiful, intuitive interfaces that provide excellent user experiences."
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions to real-world problems."
    },
    {
      icon: FaHeart,
      title: "Passionate",
      description: "Deeply passionate about technology and committed to continuous learning and growth."
    }
  ];

  return (
    <Box id="about" ml={{ base: 4, md: 12 }} mr={{ base: 4, md: 12 }} py={20} bg="white">
      <Container maxW="6xl">
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={16}
        >
          <Heading
            as="h2"
            size="2xl"
            mb={4}
            color="#8b5cf6"
            
          >
            About Me
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems="center">
          {/* Left Side - Image and Stats */}
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VStack gap={8}>
              {/* Profile Image Placeholder */}
              <Box
                w="full"
                maxW="md"
                mx="auto"
                bgGradient="linear(to-br, #8b5cf6, #c4b5fd)"
                rounded="2xl"
                p={8}
                mb={8}
              >
                <Box
                  w="full"
                  h="80"
                  bg="gray.200"
                  rounded="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="6xl">👨‍💻</Text>
                </Box>
              </Box>

              {/* Stats */}
              <SimpleGrid columns={2} gap={4} w="full">
                <Box textAlign="center" p={4} bg="gray.50" rounded="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="#8b5cf6">
                    2+
                  </Text>
                  <Text color="gray.600">Years Experience</Text>
                </Box>
                {/* <Box textAlign="center" p={4} bg="gray.50" rounded="lg">
                  <Text fontSize="2xl" fontWeight="bold" color="#8b5cf6">
                    20+
                  </Text>
                  <Text color="gray.600">Projects Completed</Text>
                </Box> */}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Right Side - Content */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <VStack align="start" gap={6}>
              <Heading as="h3" size="lg" mb={6}>
                I'm Sandra Nyambura, a passionate Full Stack Developer
              </Heading>
              
              <VStack align="start" gap={4} color="gray.600">
                <Text>
                  With over 2 years of experience in web development, I specialize in creating 
                  modern, responsive applications using cutting-edge technologies. My journey 
                  started with a curiosity about how websites work, and it has evolved into a 
                  deep passion for crafting digital solutions.
                </Text>

                <Text>
                  I believe that great software is not just about code, it's about understanding 
                  user needs, solving real problems, and creating experiences that matter. When 
                  I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers.
                </Text>

                <Text>
                  I'm always excited to take on new challenges and collaborate with teams that 
                  share my passion for innovation and excellence.
                </Text>
              </VStack>

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
            </VStack>
          </MotionBox>
        </SimpleGrid>

        {/* Features Grid */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          mt={20}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                textAlign="center"
                p={6}
                bg="gray.50"
                rounded="xl"
                _hover={{ shadow: "lg" }}
                cursor="pointer"
              >
                <VStack gap={4}>
                  <Box
                    display="inline-flex"
                    p={3}
                    bg="#ede9fe"
                    color="#8b5cf6"
                    rounded="lg"
                    mb={4}
                  >
                    <Icon as={feature.icon} w={8} h={8} />
                  </Box>
                  <Heading as="h4" size="md" mb={3}>
                    {feature.title}
                  </Heading>
                  <Text color="gray.600">
                    {feature.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;