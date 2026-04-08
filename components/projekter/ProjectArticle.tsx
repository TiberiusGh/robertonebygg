'use client'

import { useState } from 'react'
import ImageCarousel from './ImageCarousel'
import Lightbox from './Lightbox'
import { type Project, getProjectThumbnails, getProjectFullRes } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Images } from 'lucide-react'

type ProjectArticleProps = {
  project: Project
  index: number
}

export default function ProjectArticle({ project, index }: ProjectArticleProps) {
  const [expanded, setExpanded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const thumbnails = getProjectThumbnails(project)
  const fullRes = getProjectFullRes(project)

  function openLightbox(idx: number) {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 mb-6">
      <div className="grid grid-cols-1 xl:grid-cols-2">

        {/* ── Image panel ── */}
        <div className={`relative ${index % 2 === 1 ? 'xl:order-2' : ''}`}>
          <ImageCarousel images={thumbnails} alt={project.title} onImageClick={openLightbox} />
          {/* Image count badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full px-3 py-1.5 pointer-events-none">
            <Images className="w-3.5 h-3.5" />
            {thumbnails.length} bilder
          </div>
        </div>

        {/* ── Text panel ── */}
        <div className={`flex flex-col p-7 xl:p-10 ${index % 2 === 1 ? 'xl:order-1' : ''}`}>
          {/* Project number */}
          <span className="text-xs font-bold tracking-widest text-brand-medium/60 uppercase mb-3">
            Projekt {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="text-2xl font-bold text-brand-accent mb-6 leading-snug">
            {project.title}
          </h3>

          {/* Collapsible text */}
          <div className="relative">
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? 'max-h-[1200px]' : 'max-h-44'
              }`}
            >
              <div className="flex flex-col gap-4">
                {project.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-brand-accent">{p.heading}: </span>
                    {p.body}
                  </p>
                ))}
              </div>
            </div>

            {/* Fade-out when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          <Button
            onClick={() => setExpanded(!expanded)}
            variant="ghost"
            className="mt-4 w-fit text-brand-accent hover:text-brand-medium hover:bg-brand-accent/5 font-medium cursor-pointer gap-1.5 px-0 -ml-1"
          >
            {expanded ? (
              <><ChevronUp className="w-4 h-4" /> Visa mindre</>
            ) : (
              <><ChevronDown className="w-4 h-4" /> Läs hela projektbeskrivningen</>
            )}
          </Button>

          {/* View all photos CTA */}
          <button
            onClick={() => openLightbox(0)}
            className="mt-auto pt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-brand-accent transition-colors cursor-pointer group w-fit"
          >
            <Images className="w-4 h-4 group-hover:text-brand-medium transition-colors" />
            Visa alla {thumbnails.length} foton i fullskärm
          </button>
        </div>
      </div>

      <Lightbox
        images={fullRes}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        alt={project.title}
      />
    </article>
  )
}
