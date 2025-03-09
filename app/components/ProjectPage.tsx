'use client'

import Link from 'next/link'
import { ArrowLeft, Github, Globe, Calendar, Tag, Code, Zap, PieChart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

// This would be imported from a central data file
import { projects } from '@/app/data/projects'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const projectId = params.id
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111113] text-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-[900px] mx-auto p-6">
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-2 mb-6"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-transparent p-6 mb-8"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-2 border-b border-gray-200 dark:border-gray-700 pb-2"
          >
            {project.title}
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <PieChart size={16} className="text-gray-500" />
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <Tag size={14} />
                  <span className="text-sm">Technologies:</span>
                </div>
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l border-gray-200 dark:border-gray-700 pl-4"
            >
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code size={16} className="text-gray-500" />
                Quick Info
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Globe size={16} className="mt-0.5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium">Live Project</div>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {project.liveLink.replace(/https?:\/\//, '')}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Github size={16} className="mt-0.5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium">Repository</div>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {project.githubLink.replace(/https?:\/\/github\.com\//, '')}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar size={16} className="mt-0.5 text-gray-500" />
                  <div>
                    <div className="text-sm font-medium">Year</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">2023</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-transparent p-6"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap size={16} className="text-gray-500" />
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features ? (
                project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Feature one example</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Feature two example</span>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-transparent p-6"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code size={16} className="text-gray-500" />
              Technical Highlights
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              {project.techDetails ? (
                <p>{project.techDetails}</p>
              ) : (
                <p>Technical details for this project would be listed here, including architecture, framework choices, and implementation approaches.</p>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-transparent p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PieChart size={16} className="text-gray-500" />
            Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges ? (
              project.challenges.map((challenge, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{challenge.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{challenge.description}</p>
                </div>
              ))
            ) : (
              <>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Challenge Example</h3>
                  <p className="text-gray-700 dark:text-gray-300">Description of a challenge that was faced during development and how it was overcome.</p>
                </div>
              </>
            )}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            <Globe size={18} />
            Visit Live Site
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-md transition-colors"
          >
            <Github size={18} />
            View Source Code
          </Link>
        </motion.div>
      </div>
    </div>
  )
}