"use client";

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Github, Linkedin, ExternalLink, Globe, Download, Copy, FileText, CheckCircle, Play, GitBranch, Star, Info } from 'lucide-react';
import { DeveloperData, Skill, Project } from '@/lib/data';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFirebase,
  SiGraphql,
  SiSwift,
  SiDocker,
  SiAmazon,
  SiPostgresql
} from "react-icons/si";

interface DeveloperCardProps {
  data: DeveloperData;
}

const skillIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "Firebase": SiFirebase,
  "GraphQL": SiGraphql,
  "Swift": SiSwift,
  "Docker": SiDocker,
  "AWS": SiAmazon,
  "PostgreSQL": SiPostgresql,
};

const skillColors: Record<string, string> = {
  "React": "text-[#61DAFB]",
  "TypeScript": "text-[#3178C6]",
  "Next.js": "text-[#000000]",
  "Tailwind CSS": "text-[#06B6D4]",
  "Node.js": "text-[#339933]",
  "Python": "text-[#3776AB]",
  "Firebase": "text-[#FFCA28]",
  "GraphQL": "text-[#E10098]",
  "Swift": "text-[#FA7343]",
  "Docker": "text-[#2496ED]",
  "AWS": "text-[#FF9900]",
  "PostgreSQL": "text-[#336791]",
};

const levelColors = {
  Beginner: "bg-orange-500/30 text-orange-100 border-orange-400/50",
  Intermediate: "bg-blue-500/30 text-blue-100 border-blue-400/50",
  Advanced: "bg-green-500/30 text-green-100 border-green-400/50"
};

// Enhanced Glass Card component with better text contrast
function GlassCard({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div 
      className={`bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl 
        shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${className}`}
      style={{
        WebkitBackdropFilter: 'blur(20px)',
        backdropFilter: 'blur(20px)',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Skills Glass Card - More translucent
function SkillsGlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl 
        shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        hover:bg-white/15 transition-all duration-300 ease-out ${className}`}
      style={{
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {children}
    </div>
  );
}

// Projects Glass Card - More opaque
function ProjectsGlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={`bg-white/20 backdrop-blur-2xl border border-white/25 rounded-2xl 
        shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]
        hover:bg-white/25 transition-all duration-300 ease-out ${className}`}
      style={{
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
      }}
    >
      {children}
    </div>
  );
}

// Enhanced Glass Tag with better visibility and spacing
function GlassTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span 
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium 
        bg-white/25 backdrop-blur-md border border-white/30 text-white shadow-sm
        hover:bg-white/30 transition-all duration-200 hover:scale-105 ${className}`}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
      }}
    >
      {children}
    </span>
  );
}

// Enhanced Glass Tooltip with level definitions
function GlassTooltip({ children, content, level }: { children: React.ReactNode; content: string; level?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  const levelDefinitions = {
    Beginner: "Basic understanding and ability to use the technology",
    Intermediate: "Good working knowledge and ability to build projects",
    Advanced: "Expert level with deep understanding and ability to teach others"
  };

  const tooltipContent = level && levelDefinitions[level as keyof typeof levelDefinitions] 
    ? `${content}\n\nLevel: ${level}\n${levelDefinitions[level as keyof typeof levelDefinitions]}`
    : content;

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {isVisible && (
        <div 
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 
            bg-gray-900/95 backdrop-blur-xl border border-white/20 text-white text-sm rounded-xl 
            shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 max-w-xs break-words animate-in fade-in zoom-in-95 duration-200"
          style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="whitespace-pre-line leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}>
            {tooltipContent}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-gray-900/95"></div>
        </div>
      )}
    </div>
  );
}

// Enhanced Glass Modal
function GlassModal({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div 
        className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl 
          shadow-[0_20px_80px_rgba(0,0,0,0.3)] p-6 max-w-md w-full animate-in zoom-in-95 duration-300"
        style={{
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}>
            Verification Details
          </h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
          >
            ✕
          </button>
        </div>
        
        {project.verificationDetails && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm font-medium text-white/95" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                {project.verificationDetails.proof}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch size={16} className="text-blue-400" />
              <span className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                {project.verificationDetails.commits} commits
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Info size={16} className="text-white/60" />
              <span className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                Last updated {project.verificationDetails.lastUpdated}
              </span>
            </div>
          </div>
        )}
        
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-blue-500/30 backdrop-blur-md border border-blue-400/50 
            text-blue-100 rounded-lg hover:bg-blue-500/40 transition-all duration-200 font-medium"
          style={{
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Detailed Project Modal
function ProjectDetailModal({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div 
        className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl 
          shadow-[0_20px_80px_rgba(0,0,0,0.3)] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        style={{
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
              {project.title}
            </h2>
            {project.verified && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium 
                bg-green-500/30 text-green-100 border border-green-400/50 backdrop-blur-md"
                style={{
                  WebkitBackdropFilter: 'blur(8px)',
                  backdropFilter: 'blur(8px)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                <CheckCircle size={14} />
                Verified Project
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg ml-4"
          >
            ✕
          </button>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white/90 mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => {
              const IconComponent = skillIcons[tech];
              const iconColor = skillColors[tech] || "text-white";
              
              return (
                <GlassTooltip key={tech} content={tech}>
                  <div
                    className="p-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-lg
                      hover:bg-white/20 transition-all duration-200 hover:scale-105 cursor-help"
                    style={{
                      WebkitBackdropFilter: 'blur(8px)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {IconComponent ? (
                      <IconComponent size={20} className={`${iconColor}`} />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center rounded bg-gray-300">
                        <span className="text-xs font-bold text-gray-600">{tech.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </GlassTooltip>
              );
            })}
          </div>
        </div>

        {/* Project Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white/90 mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            Project Overview
          </h3>
          <p className="text-white/80 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            {project.summary}
          </p>
        </div>

        {/* Verification Details */}
        {project.verificationDetails && (
          <div className="mb-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
            <h3 className="text-lg font-semibold text-white/90 mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              Verification Details
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  {project.verificationDetails.proof}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch size={16} className="text-blue-400" />
                <span className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  {project.verificationDetails.commits} commits
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Info size={16} className="text-white/60" />
                <span className="text-sm text-white/80" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  Last updated {project.verificationDetails.lastUpdated}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-gray-800/60 backdrop-blur-md border border-gray-600/50 text-white 
                hover:bg-gray-700/60 transition-all duration-200 font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Github size={16} />
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-green-500/30 backdrop-blur-md border border-green-400/50 text-green-100 
                hover:bg-green-500/40 transition-all duration-200 font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.walkthroughUrl && (
            <a
              href={project.walkthroughUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-blue-500/30 backdrop-blur-md border border-blue-400/50 text-blue-100 
                hover:bg-blue-500/40 transition-all duration-200 font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Play size={16} />
              Code Walkthrough
            </a>
          )}
          {project.commitHistoryUrl && (
            <a
              href={project.commitHistoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-purple-500/30 backdrop-blur-md border border-purple-400/50 text-purple-100 
                hover:bg-purple-500/40 transition-all duration-200 font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <GitBranch size={16} />
              Commit History
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function DeveloperCard({ data }: DeveloperCardProps) {
  const [verificationModal, setVerificationModal] = useState<{ project: Project; isOpen: boolean }>({ project: data.projects[0], isOpen: false });
  const [projectDetailModal, setProjectDetailModal] = useState<{ project: Project; isOpen: boolean }>({ project: data.projects[0], isOpen: false });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Single Unified Glass Card */}
        <GlassCard className="p-8 space-y-12">
          
          {/* Profile Header Block */}
          <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="text-center">
              <div className="flex flex-col items-center space-y-6">
                {/* Profile Image */}
                <Avatar className="w-24 h-24 rounded-full shadow-2xl ring-4 ring-white/20">
                  <AvatarImage src={data.avatar} alt={data.name} className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-purple-400 to-cyan-400 text-white">
                    {data.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {/* Name, Title, Location */}
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                    {data.name}
                  </h1>
                  <h2 className="text-xl text-white/90 font-semibold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                    {data.title}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-white/80">
                    <MapPin size={16} />
                    <span className="text-sm font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                      {data.location}
                    </span>
                  </div>
                </div>
                
                {/* Tagline */}
                <p className="italic text-sm text-white/70 max-w-2xl leading-relaxed text-center" 
                   style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  {data.tagline}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                      hover:bg-white/25 transition-all duration-200 hover:scale-105"
                    style={{
                      WebkitBackdropFilter: 'blur(12px)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <Github size={20} className="text-white/90" />
                  </a>
                  <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                      hover:bg-white/25 transition-all duration-200 hover:scale-105"
                    style={{
                      WebkitBackdropFilter: 'blur(12px)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <Linkedin size={20} className="text-blue-400" />
                  </a>
                  {data.links.website && (
                    <a
                      href={data.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                        hover:bg-white/25 transition-all duration-200 hover:scale-105"
                      style={{
                        WebkitBackdropFilter: 'blur(12px)',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      <Globe size={20} className="text-green-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            <SkillsGlassCard className="p-6 space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                  Skills
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {data.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </SkillsGlassCard>
          </div>

          {/* Projects Section */}
          <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.6s' }}>
            <ProjectsGlassCard className="space-y-6 px-6">
              <div className="text-center space-y-2 px-6 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
                  Projects
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
              </div>
              
              <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory">
                <div className="flex space-x-6 px-6 pb-6">
                  {data.projects.map((project, index) => (
                    <div
                      key={project.title}
                      className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] min-w-[300px] snap-start"
                      style={{ animationDelay: `${0.8 + index * 0.15}s` }}
                    >
                      <ProjectCard 
                        project={project} 
                        onVerificationClick={() => setVerificationModal({ project, isOpen: true })}
                        onDetailClick={() => setProjectDetailModal({ project, isOpen: true })}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ProjectsGlassCard>
          </div>

          {/* Footer Actions */}
          <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                  shadow hover:bg-white/25 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer
                  text-white/95 font-medium"
                style={{
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                <div className="flex items-center gap-2">
                  <Download size={16} />
                  Download PDF
                </div>
              </button>
              <button 
                onClick={handleCopyLink}
                className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                  shadow hover:bg-white/25 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer 
                  flex items-center gap-2 text-white/95 font-medium"
                style={{
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                <Copy size={16} />
                Copy Link
              </button>
              <button 
                className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl 
                  shadow hover:bg-white/25 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer
                  text-white/95 font-medium"
                style={{
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  View Full Resume
                </div>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Verification Modal */}
      <GlassModal 
        project={verificationModal.project}
        isOpen={verificationModal.isOpen}
        onClose={() => setVerificationModal({ project: data.projects[0], isOpen: false })}
      />

      {/* Detailed Project Modal */}
      <ProjectDetailModal 
        project={projectDetailModal.project}
        isOpen={projectDetailModal.isOpen}
        onClose={() => setProjectDetailModal({ project: data.projects[0], isOpen: false })}
      />
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skillIcons[skill.name];
  const iconColor = skillColors[skill.name] || "text-white";
  
  return (
    <GlassTooltip content={skill.description} level={skill.level}>
      <div 
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full 
          bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium 
          text-white hover:bg-white/25 hover:scale-105 transition-all duration-200"
        style={{
          WebkitBackdropFilter: 'blur(12px)',
          backdropFilter: 'blur(12px)',
          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
        }}
      >
        {IconComponent ? (
          <IconComponent size={16} className={`${iconColor}`} />
        ) : (
          <div className="flex h-4 w-4 items-center justify-center rounded bg-gray-300">
            <span className="text-xs font-bold text-gray-600">{skill.name.charAt(0)}</span>
          </div>
        )}
        <span>{skill.name}</span>
        {skill.featured && (
          <Star size={12} className="text-yellow-400 fill-current" />
        )}
      </div>
    </GlassTooltip>
  );
}

function ProjectCard({ project, onVerificationClick, onDetailClick }: { project: Project; onVerificationClick: () => void; onDetailClick: () => void }) {
  return (
    <GlassCard className="p-6 flex flex-col min-h-[280px] hover:scale-[1.02] cursor-pointer" onClick={onDetailClick}>
      <div className="flex flex-col h-full space-y-4">
        {/* Project Title and Verification Badge */}
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-bold text-white text-lg flex-1 leading-tight"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}>
            {project.title}
          </h4>
          {project.verified && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onVerificationClick();
              }}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium 
                bg-green-500/30 text-green-100 border border-green-400/50 backdrop-blur-md
                hover:bg-green-500/40 transition-all duration-200 cursor-pointer flex-shrink-0"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <CheckCircle size={12} />
              Verified
            </button>
          )}
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const IconComponent = skillIcons[tech];
            const iconColor = skillColors[tech] || "text-white";
            
            return (
              <GlassTooltip key={tech} content={tech}>
                <div
                  className="p-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-lg
                    hover:bg-white/20 transition-all duration-200 hover:scale-105 cursor-help"
                  style={{
                    WebkitBackdropFilter: 'blur(8px)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {IconComponent ? (
                    <IconComponent size={16} className={`${iconColor}`} />
                  ) : (
                    <div className="w-4 h-4 flex items-center justify-center rounded bg-gray-300">
                      <span className="text-xs font-bold text-gray-600">{tech.charAt(0)}</span>
                    </div>
                  )}
                </div>
              </GlassTooltip>
            );
          })}
        </div>

        {/* Project Summary */}
        <div className="flex-1">
          <p className="text-white/80 text-sm leading-relaxed"
             style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            {project.summary}
          </p>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-gray-800/60 backdrop-blur-md border border-gray-600/50 text-white 
                hover:bg-gray-700/60 transition-all duration-200 text-xs font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Github size={12} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-green-500/30 backdrop-blur-md border border-green-400/50 text-green-100 
                hover:bg-green-500/40 transition-all duration-200 text-xs font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.walkthroughUrl && (
            <a
              href={project.walkthroughUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-blue-500/30 backdrop-blur-md border border-blue-400/50 text-blue-100 
                hover:bg-blue-500/40 transition-all duration-200 text-xs font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <Play size={12} />
              Walkthrough
            </a>
          )}
          {project.commitHistoryUrl && (
            <a
              href={project.commitHistoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg 
                bg-purple-500/30 backdrop-blur-md border border-purple-400/50 text-purple-100 
                hover:bg-purple-500/40 transition-all duration-200 text-xs font-medium hover:scale-105"
              style={{
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              <GitBranch size={12} />
              Commits
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}