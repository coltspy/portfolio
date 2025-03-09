'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, Twitter, Github, Copy, ChevronDown, ChevronUp, FileText, Globe, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'splyfe-interview',
    title: 'Splyfe Interview',
    description: 'Desktop app for coding interviews with Eye Tracking, Video & Screen Share, Detailed Logging, and AI Question Generation.',
    shortDescription: 'All-in-one interview platform with anti-cheating measures.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://splyfe.io',
    githubLink: 'https://github.com/coltspy/splyfe',
    tags: ['OpenCV', 'Dlib', 'WebRTC', 'Firebase', 'Live Video, Chat, Screenshare', 'Anti-Cheating Features']
  },
  {
    id: 'autonomous-vehicle-system',
    title: 'Autonomous Vehicle Management System',
    description: 'Django backend with a React TypeScript frontend to manage autonomous vehicles efficiently. It features a comprehensive API for vehicle tracking, and operations like ride requests and maintenance scheduling.',
    shortDescription: 'Full-stack system for managing autonomous vehicle fleets.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://avms.dev',
    githubLink: 'https://github.com/coltspy/ACMS',
    tags: ['Django', 'Python', 'React', 'API', 'Documentation']
  },
  {
    id: 'drone-navigation',
    title: 'Autonomous Drone Navigation',
    description: 'Implemented a system for autonomous drone navigation in complex environments using advanced computer vision algorithms and real-time path planning.',
    shortDescription: 'Computer vision-based navigation system for autonomous drones.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://example.com/project3',
    githubLink: 'https://github.com/yourusername/drone-nav',
    tags: ['ROS', 'Computer Vision', 'C++']
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance AI',
    description: 'Developed an AI system for predictive maintenance in industrial equipment that reduces downtime by 43% and maintenance costs by 38%.',
    shortDescription: 'AI-powered prediction system for industrial equipment failures.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://example.com/project4',
    githubLink: 'https://github.com/yourusername/pred-maintenance',
    tags: ['Machine Learning', 'IoT', 'Python']
  }
]

const technologies = [
  'TypeScript', 'React', 'Next.js', 'Python', 'TensorFlow', 
  'PyTorch', 'Computer Vision', 'NLP', 'Docker', 'AWS', 
  'Blockchain', 'Smart Contracts', 'Solidity', 'Trading Algorithms'
]

const education = [
  {
    institution: 'High School',
    period: '2021 - Present',
    description: 'Currently attending high school'
  },
  {
    institution: 'Machine Learning Specialization',
    provider: 'Coursera',
    period: '2023',
    certificate: 'https://example.com/certificate1'
  },
  {
    institution: 'Deep Learning Nanodegree',
    provider: 'Udacity',
    period: '2022',
    certificate: 'https://example.com/certificate2'
  }
]

export default function Component() {
  const [copied, setCopied] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Start with light mode - removed dark class
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@coltonspyker.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111113] text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-[900px] mx-auto p-6">
        <motion.div 
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-lg"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </motion.div>

        <motion.div 
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8 bg-white dark:bg-transparent shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              />
              <div>
                <motion.h1 
                  className="text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Colton Spyker
                </motion.h1>
                <motion.div 
                  className="flex items-center gap-2 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
                  <span className="text-gray-600 dark:text-gray-400">•</span>
                  <p className="text-gray-600 dark:text-gray-400">Los Angeles, CA 🌉</p>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-600 dark:text-gray-400 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Crypto • Trading • Autonomous Driving
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link 
                href="https://linkedin.com/in/coltonspyker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://twitter.com/coltonspyker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://github.com/coltspy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="space-y-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="flex items-center gap-2 text-sm"
              variants={item}
            >
              <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">hi@coltonspyker.com</span>
              <button
                onClick={copyEmail}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Copy email"
              >
                <Copy className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-600 dark:text-green-400 text-xs"
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 text-sm"
              variants={item}
            >
              <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Link 
                href="/colton-spyker-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                View my CV
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex flex-wrap gap-2 mt-4"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.4, staggerChildren: 0.05 }}
          >
            {technologies.map((tech) => (
              <motion.span 
                key={tech} 
                variants={item}
                className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <motion.h2 
            className="text-xl font-semibold mb-5 flex items-center gap-2 border-b pb-2 border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
            <span className="text-gray-600 dark:text-gray-400">📱</span>
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-transparent hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-[430px]"
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative aspect-[5/3] mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex gap-2">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-md transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      Live
                    </Link>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-2.5 py-1.5 rounded-md transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </Link>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-1.5 text-xs bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-3 py-1.5 rounded-md transition-colors"
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {projects.length > 3 && (
            <motion.button
              onClick={toggleProjects}
              className="mt-5 flex items-center gap-2 mx-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>View All Projects</span>
                </>
              )}
            </motion.button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2 
            className="text-xl font-semibold mb-5 flex items-center gap-2 border-b pb-2 border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
            <span className="text-gray-600 dark:text-gray-400">🎓</span>
          </motion.h2>
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {education.map((item) => (
              <motion.div
                key={item.institution}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-transparent hover:shadow-md transition-all duration-300"

                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-medium text-gray-900 dark:text-white text-base">{item.institution}</h3>
                {item.provider && <p className="text-sm text-gray-600 dark:text-gray-400">{item.provider}</p>}
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.period}</p>
                {item.description && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>}
                {item.certificate && (
                  <motion.a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-2 inline-flex items-center gap-1"
                    whileHover={{ x: 3 }}
                  >
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <path d="M7 7l9 9" />
                      <path d="M16 7h-9v9" />
                    </svg>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}