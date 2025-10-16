'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import Badge from '@/components/ui/Badge'

const categories = [
  { id: 'all', name: 'All Projects', count: 8 },
  { id: 'data-engineering', name: 'Data Engineering', count: 3 },
  { id: 'machine-learning', name: 'Machine Learning', count: 2 },
  { id: 'ai-automation', name: 'AI & Automation', count: 2 },
  { id: 'devops', name: 'DevOps', count: 1 }
]

interface ProjectFiltersProps {
  onFilterChange?: (category: string) => void
  activeFilter?: string
}

export default function ProjectFilters({
  onFilterChange,
  activeFilter = 'all'
}: ProjectFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeFilter)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange?.(category)
  }

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Filter className="w-5 h-5 text-text-muted" />
        <span className="text-sm font-medium text-text-muted">Filter by category:</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-accent-blue text-white shadow-lg'
                : 'bg-white text-text-dark border border-gray-200 hover:border-accent-blue hover:text-accent-blue'
            }`}
          >
            <span>{category.name}</span>
            <Badge
              variant={selectedCategory === category.id ? 'secondary' : 'primary'}
              size="sm"
              className="ml-2"
            >
              {category.count}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  )
}