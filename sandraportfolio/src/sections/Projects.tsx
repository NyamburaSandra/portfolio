import React, { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Image,
  Badge,
  Flex,
  Grid
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaEye } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design';
  featured?: boolean;
}

const MotionBox = motion(Box);

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application built with React Native and Firebase. Real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "mobile"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web design principles and smooth animations. Built with React and Framer Motion.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Framer Motion", "Chakra UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "web"
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "design",
      featured: true
    },
    {
      id: 5,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "web"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile fitness tracking app with workout routines, progress tracking, and social features. Built with React Native.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Redux", "SQLite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "mobile"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      bg="white"
      rounded="xl"
      overflow="hidden"
      shadow="lg"
      _hover={{ shadow: "xl", transform: "translateY(-8px)" }}
      css={{ transition: "all 0.3s" }}
      border="1px"
      borderColor="gray.100"
      position="relative"
      role="group"
    >
      {/* Project Image */}
      <Box position="relative" overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          w="full"
          h={48}
          objectFit="cover"
          css={{ transition: "transform 0.3s" }}
          _groupHover={{ transform: "scale(1.05)" }}
        />
        
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.700"
          opacity={0}
          _groupHover={{ opacity: 1 }}
          css={{ transition: "opacity 0.3s" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <HStack gap={4}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transition: 'colors 0.2s',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaExternalLinkAlt size={20} color="#374151" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '50%',
                transition: 'colors 0.2s',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaGithub size={20} color="#374151" />
            </a>
            <Box
              p={3}
              bg="white"
              rounded="full"
              _hover={{ bg: "gray.100" }}
              css={{ transition: "colors 0.2s" }}
              cursor="pointer"
            >
              <FaEye size={20} color="#374151" />
            </Box>
          </HStack>
        </Box>

        {/* Featured Badge */}
        {project.featured && (
          <Badge
            position="absolute"
            top={4}
            right={4}
            bg="yellow.400"
            color="yellow.900"
            px={3}
            py={1}
            fontSize="sm"
            fontWeight="medium"
          >
            <HStack gap={1}>
              <FaStar size={12} />
              <Text>Featured</Text>
            </HStack>
          </Badge>
        )}
      </Box>

      {/* Project Content */}
      <VStack align="start" p={6} gap={4}>
        <Heading as="h3" size="md" color="gray.900" css={{ 
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {project.title}
        </Heading>
        
        <Text color="gray.600" fontSize="sm" css={{ 
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {project.description}
        </Text>

        {/* Technologies */}
        <Flex wrap="wrap" gap={2}>
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              px={3}
              py={1}
              bg="#ede9fe"
              color="#8b5cf6"
              fontSize="xs"
              fontWeight="medium"
              rounded="full"
            >
              {tech}
            </Badge>
          ))}
        </Flex>

        {/* Project Links */}
        <HStack gap={4} w="full">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1 }}
          >
            <Button
              size="sm"
              colorScheme="blue"
              variant="solid"
              w="full"
            >
              <HStack gap={2}>
                <FaExternalLinkAlt size={14} />
                <Text>Live Demo</Text>
              </HStack>
            </Button>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1 }}
          >
            <Button
              size="sm"
              variant="outline"
              colorScheme="gray"
              w="full"
            >
              <HStack gap={2}>
                <FaGithub size={14} />
                <Text>Code</Text>
              </HStack>
            </Button>
          </a>
        </HStack>
      </VStack>
    </MotionBox>
  );

  return (
    <Box id="projects" py={20} bg="white" ml={{ base: 4, md: 12 }} mr={{ base: 4, md: 12 }}>
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
                Featured <Text as="span" color="#8b5cf6">Projects</Text>
              </Heading>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Here are some of my recent projects that showcase my skills in web development,
                mobile apps, and design. Each project represents my passion for creating
                meaningful digital experiences.
              </Text>
            </MotionBox>
          </VStack>

          {/* Category Filter */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HStack gap={4} flexWrap="wrap" justify="center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'solid' : 'outline'}
                  colorScheme={selectedCategory === category.id ? 'blue' : 'gray'}
                  onClick={() => setSelectedCategory(category.id as 'all' | 'web' | 'mobile' | 'design')}
                  size="md"
                  rounded="full"
                  px={6}
                >
                  {category.label}
                </Button>
              ))}
            </HStack>
          </MotionBox>

          {/* Projects Grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={8}
            w="full"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Grid>

          {/* View More Button */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              colorScheme="blue"
              rounded="full"
              px={8}
              _hover={{ bg: "#ede9fe" }}
            >
              View More Projects
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;