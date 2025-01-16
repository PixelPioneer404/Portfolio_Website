import React from 'react';
import { Gamepad2, Globe, ShoppingCart, Youtube, Music } from 'lucide-react';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'Interactive game built with React and modern animations',
    icon: Gamepad2,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/tictactoe',
    demoUrl: 'https://tictactoe.pixelpioneer.tech',
    longDescription: 'A modern implementation of the classic Tic-Tac-Toe game featuring smooth animations, responsive design, and an unbeatable AI opponent. The project showcases clean code architecture and state management practices.',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing my work and skills',
    icon: Globe,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    demoUrl: 'https://pixelpioneer404.netlify.app',
    longDescription: 'A modern, responsive portfolio website built with React and TypeScript. Features include smooth animations, dark mode support, and a contact form integrated with EmailJS.',
  },
  {
    title: 'E-commerce Website',
    description: 'Full-featured online shopping platform',
    icon: ShoppingCart,
    status: 'Under development',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    longDescription: 'A comprehensive e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration. Currently implementing advanced features and optimizing performance.',
  },
  {
    title: 'YouTube Video Downloader',
    description: 'Tool for downloading YouTube videos',
    icon: Youtube,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=500',
    technologies: ['Python', 'PyQt5', 'pytube'],
    githubUrl: 'https://github.com/yourusername/yt-downloader',
    demoUrl: 'https://ytdownloader-demo.netlify.app',
    longDescription: 'A desktop application that allows users to download YouTube videos in various formats and quality levels. Features a clean GUI and progress tracking.',
  },
  {
    title: 'Music Player',
    description: 'Modern music player with playlist management',
    icon: Music,
    status: 'Under Development',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=500',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Expo'],
    githubUrl: 'https://github.com/yourusername/music-player',
    longDescription: 'A cross-platform music player app built with React Native. Features include playlist management, equalizer settings, and offline mode. Currently implementing cloud sync and social features.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-200 dark:bg-gray-800 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;