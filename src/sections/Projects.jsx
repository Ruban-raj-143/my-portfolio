import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) =>
    project.filters.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Projects that turn ideas into working systems.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A selection of AI, data, enterprise software and security projects built through hands-on development.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <ProjectFilter
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        {/* Projects Display Matrix */}
        <AnimatePresence mode="wait">
          {activeFilter === 'all' ? (
            <motion.div
              key="all-projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Row 1: Capstone Project (PickGuard AI - Full Width) */}
              <div className="w-full">
                <FeaturedProject
                  project={projectsData[0]}
                  onSelect={setSelectedProject}
                  isFullWidth={true}
                />
              </div>

              {/* Row 2: Secondary Featured Projects (Nila Arumbu & EnterpriseSync AI - 2 Columns) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <FeaturedProject
                  project={projectsData[1]}
                  onSelect={setSelectedProject}
                />
                <FeaturedProject
                  project={projectsData[2]}
                  onSelect={setSelectedProject}
                />
              </div>

              {/* Row 3: Compact Grid Projects (04 JML, 05 Trending, 06 CIS, 07 E-Commerce) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {projectsData.slice(3, 7).map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`filtered-${activeFilter}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
