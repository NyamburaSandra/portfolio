import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="#fff" stroke="#8b5cf6" strokeWidth="2" />
        <text x="50%" y="55%" textAnchor="middle" fill="#8b5cf6" fontSize="18" fontWeight="bold" fontFamily="Inter, sans-serif" dy=".3em">SN</text>
      </svg>
      <Text
        fontWeight="semibold"
        fontSize={{ base: 'md', md: 'xl' }}
        bgClip="text"
        bgGradient="linear-gradient(90deg, #6366f1 0%, #8b5cf6 60%, #ec4899 100%)"
        fontFamily="'Inter', 'Montserrat', 'Poppins', sans-serif"
        letterSpacing="0.08em"
        lineHeight={1.1}
        textShadow="0 1px 6px rgba(139,92,246,0.10)"
        display="inline"
      >
        <span style={{ fontWeight: 500, letterSpacing: '0.12em', marginRight: 4 }}>Sandra</span>
        <span style={{ fontWeight: 400, color: '#8b5cf6', marginLeft: 2 }}>Nyambura</span>
      </Text>
    </Box>
  );
};

export default Logo;
