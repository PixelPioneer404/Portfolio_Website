import React from 'react';
import { Video, Palette, Code, Cpu, Pencil, Box, Plane } from 'lucide-react';
import { InterestCard } from './ui/InterestCard';

const items = [
  // Interests
  {
    title: 'Video Editing',
    icon: Video,
    description: 'Creating engaging visual content',
    type: 'interest' as const,
    longDescription: 'I have a deep passion for video editing, specializing in creating engaging content that tells compelling stories. I work with various editing software like Adobe Premiere Pro and DaVinci Resolve to craft seamless transitions, color grade footage, and add dynamic effects that enhance the viewer\'s experience.',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Crafting beautiful user experiences',
    type: 'interest' as const,
    longDescription: 'My interest in UI/UX design stems from a desire to create intuitive and aesthetically pleasing digital experiences. I focus on user-centered design principles, wireframing, prototyping, and understanding user behavior to create interfaces that are both beautiful and functional.',
  },
  {
    title: 'Development',
    icon: Code,
    description: 'Building powerful applications',
    type: 'interest' as const,
    longDescription: 'Software development is where I combine creativity with technical skills. I enjoy working with various programming languages and frameworks to build robust applications. My focus areas include web development, mobile apps, and exploring new technologies to create innovative solutions.',
  },
  {
    title: 'Robotics',
    icon: Cpu,
    description: 'Exploring automation and AI',
    type: 'interest' as const,
    longDescription: 'Robotics fascinates me as it combines hardware and software to create intelligent systems. I\'m particularly interested in autonomous systems, machine learning applications in robotics, and how robots can be used to solve real-world problems.',
  },
  // Hobbies
  {
    title: 'Drawing',
    icon: Pencil,
    description: 'Expressing creativity through art',
    type: 'hobby' as const,
    longDescription: 'Drawing has been a lifelong hobby that allows me to express my creativity freely. I enjoy both digital and traditional mediums, creating everything from quick sketches to detailed illustrations. It\'s a way for me to visualize ideas and relax.',
  },
  {
    title: 'Cube Solving',
    icon: Box,
    description: 'Mastering the Rubik\'s cube',
    type: 'hobby' as const,
    longDescription: 'Speedcubing is more than just solving a puzzle - it\'s about pattern recognition, muscle memory, and constant improvement. I\'ve learned various solving methods and algorithms, always working to improve my solve times and tackle more complex cube variations.',
  },
  {
    title: 'Travelling',
    icon: Plane,
    description: 'Exploring new places and cultures',
    type: 'hobby' as const,
    longDescription: 'Traveling opens my mind to new perspectives and experiences. I love immersing myself in different cultures, trying local cuisines, and capturing memories through photography. Each journey teaches me something new about the world and myself.',
  },
];

const InterestsAndHobbies = () => {
  return (
    <section id="interests" className="py-20 section-gradient-2">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 section-text">Interests & Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <InterestCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsAndHobbies;