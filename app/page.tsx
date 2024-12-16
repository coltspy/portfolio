'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, Twitter, Github, Copy, ChevronDown, ChevronUp, FileText, Globe, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import project1Image from './images/snip.jpg'

const projects = [
  {
    title: 'Splyfe Interview',
    description: 'Desktop app for coding interviews with Eye Tracking, Video & Screen Share, Detailed Logging, and AI Question Generation.',
    image: project1Image,
    liveLink: 'https://splyfe.io',
    githubLink: 'https://github.com/coltspy/splyfe',
    tags: ['OpenCV', 'Dlib', 'WebRTC', 'Firebase', 'Live Video, Chat, Screenshare', 'Anti-Cheating Features']
  },
  {
    title: 'Autonomous Vehicle Management System',
    description: 'Django backend with a React TypeScript frontend to manage autonomous vehicles efficiently. It features a comprehensive API for vehicle tracking, and operations like ride requests and maintenance scheduling. ',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://avms.dev',
    githubLink: 'https://github.com/coltspy/ACMS',
    tags: ['Django', 'Python', 'React', 'API', 'Documentation']
  },
  {
    title: 'Autonomous Drone Navigation',
    description: 'Implemented a system for autonomous drone navigation in complex environments.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://example.com/project3',
    githubLink: 'https://github.com/yourusername/drone-nav',
    tags: ['ROS', 'Computer Vision', 'C++']
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'Developed an AI system for predictive maintenance in industrial equipment.',
    image: '/placeholder.svg?height=150&width=250',
    liveLink: 'https://example.com/project4',
    githubLink: 'https://github.com/yourusername/pred-maintenance',
    tags: ['Machine Learning', 'IoT', 'Python']
  }
]

const technologies = ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'CUDA', 'Docker', 'TensorRT', 'scikit-learn', 'YOLO', 'Deepstream-SDK']

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
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('hi@coltonspyker.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111113] text-gray-900 dark:text-gray-200 transition-colors duration-200">
      <div className="max-w-[900px] mx-auto p-6">
        <div className="fixed top-6 right-6 z-50">
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
        </div>

        <motion.div 
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-8 bg-white dark:bg-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold">Colton Spyker</h1>
                <div className="flex items-center gap-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">AI & ML Developer</p>
                  <span className="text-gray-600 dark:text-gray-400">•</span>
                  <p className="text-gray-600 dark:text-gray-400">Los Angeles, CA 🌉</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="https://linkedin.com/in/coltonspyker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://twitter.com/coltonspyker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">hi@coltonspyker.com</span>
              <button
                onClick={copyEmail}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Copy email"
              >
                <Copy className="w-3 h-3" />
              </button>
              {copied && <span className="text-green-600 dark:text-green-400 text-xs">Copied!</span>}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <Link 
                href="/colton-spyker-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                View my CV
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs bg-gray-50 dark:bg-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            projects
            <span className="text-gray-600 dark:text-gray-400">📱</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="relative aspect-[5/3] mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium mb-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-sm">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md transition-colors"
                  >
                    <Globe className="w-3 h-3" />
                    Live Site
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-3 py-1.5 rounded-md transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          {projects.length > 3 && (
            <button
              onClick={toggleProjects}
              className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            education
            <span className="text-gray-600 dark:text-gray-400">🎓</span>
          </h2>
          <div className="space-y-4">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">{item.institution}</h3>
                {item.provider && <p className="text-xs text-gray-600 dark:text-gray-400">{item.provider}</p>}
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.period}</p>
                {item.description && <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{item.description}</p>}
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-1 inline-block"
                  >
                    View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}