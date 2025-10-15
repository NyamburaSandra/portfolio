import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql
} from 'react-icons/si';

const MotionBox = motion(Box);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", level: 95, icon: FaJs, color: "#F7DF1E" },
        { name: "HTML5", level: 95, icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: FaCss3Alt, color: "#1572B6" },
        { name: "Next.js", level: 80, icon: SiNextdotjs, color: "#000000" }
      ]
    },
    {
      title: "Backend Development",
      color: "green",
      skills: [
        { name: "Node.js", level: 85, icon: FaNode, color: "#339933" },
        { name: "Python", level: 80, icon: FaPython, color: "#3776AB" },
        { name: "Express.js", level: 85, icon: SiExpress, color: "#000000" },
        { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", level: 70, icon: SiPostgresql, color: "#336791" }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "purple",
      skills: [
        { name: "Git/GitHub", level: 90, icon: FaGitAlt, color: "#F05032" },
        { name: "Docker", level: 70, icon: FaDocker, color: "#2496ED" },
        { name: "AWS", level: 65, icon: FaAws, color: "#232F3E" },
        { name: "Figma", level: 85, icon: FaFigma, color: "#F24E1E" },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" }
      ]
    }
  ];

  type Skill = {
    name: string;
    level: number;
    icon: React.ElementType;
    color: string;
  };

  const SkillBar = ({ skill, index }: { skill: Skill, index: number }) => (
    <MotionBox
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      mb={6}
    >
      <HStack justify="space-between" mb={2}>
        <HStack gap={3}>
          <Icon as={skill.icon} color={skill.color} boxSize={5} />
          <Text fontWeight="medium" color="gray.700">
            {skill.name}
          </Text>
        </HStack>
        <Badge colorScheme="blue" variant="subtle">
          {skill.level}%
        </Badge>
      </HStack>
      {/* Custom Progress Bar */}
      <Box
        w="full"
        h="8px"
        bg="gray.100"
        rounded="full"
        overflow="hidden"
      >
        <Box
          h="full"
          bg="#8b5cf6"
          rounded="full"
          w={`${skill.level}%`}
          css={{ transition: "width 0.8s ease-in-out" }}
        />
      </Box>
    </MotionBox>
  );

  return (
    <Box id="skills" py={20} bg="gray.50" ml={{ base: 4, md: 12 }} mr={{ base: 4, md: 12 }}>
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
            bgGradient="linear(to-r, #8b5cf6, purple.500)"
            bgClip="text"
          >
            Skills & Expertise
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Here are the technologies and tools I work with to bring ideas to life
          </Text>
        </MotionBox>

        {/* Skills Grid */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8} mb={16}>
          {skillCategories.map((category, categoryIndex) => (
            <MotionBox
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              bg="white"
              rounded="xl"
              p={8}
              shadow="lg"
              _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
              cursor="pointer"
              border="1px"
              borderColor="gray.100"
            >
              <VStack align="start" gap={6}>
                <HStack>
                  <Box
                    w={4}
                    h={4}
                    bg={`${category.color}.500`}
                    rounded="full"
                  />
                  <Heading as="h3" size="lg" color="gray.900">
                    {category.title}
                  </Heading>
                </HStack>
                
                <VStack align="stretch" w="full">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                    />
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Additional Skills Tags */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
        >
          <Heading as="h3" size="lg" mb={8} color="gray.900">
            Other Technologies I Work With
          </Heading>
          <Flex wrap="wrap" justify="center" gap={3}>
            {[
              'Redux', 'GraphQL', 'Firebase', 'Jest', 'Cypress', 'Webpack', 
              'Vite', 'SASS', 'Material-UI', 'Ant Design', 'Prisma', 'Vercel',
              'Stripe', 'Socket.io', 'REST APIs', 'GraphQL', 'Microservices'
            ].map((tech, index) => (
              <MotionBox
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  px={4}
                  py={2}
                  bg="#ede9fe"
                  color="#8b5cf6"
                  rounded="full"
                  fontWeight="medium"
                  _hover={{ bg: "#ede9fe", transform: "scale(1.05)" }}
                  cursor="pointer"
                  transition="all 0.2s"
                >
                  {tech}
                </Badge>
              </MotionBox>
            ))}
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Skills;