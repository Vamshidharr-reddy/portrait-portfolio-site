
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Half */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-portfolio-text-light text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                  Alex Johnson
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold portfolio-text-gradient">
                  Full-Stack Python Developer
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about building scalable web applications with Python, Django, FastAPI, and modern frontend technologies. 
                I create efficient, maintainable code that solves real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="portfolio-gradient text-white hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Half */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 portfolio-gradient rounded-2xl transform rotate-6"></div>
              <div className="relative bg-background rounded-2xl p-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Alex Johnson - Full-Stack Python Developer"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
