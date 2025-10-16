'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { projects, getProjectsByCategory } from '@/lib/projects'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }
    return getProjectsByCategory(activeFilter)
  }, [activeFilter])

  return (
    <div>
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-text-muted text-lg">
            No projects found for the selected category.
          </p>
        </motion.div>
      )}
    </div>
  )
}