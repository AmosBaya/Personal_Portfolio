import { ArrowUpRight } from "lucide-react";
import { FaGithub, } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";



const projects = [
    {
        title: "KenCAD Printers",
        description: "A professional digital platform showcasing CAD and GIS printing, architectural plans, technical drawings, and large-format printing services.",
        image: "/projects/projectKen.png",
        tags: ["React", "TailwindCSS"],
        link: "https://www.kencadprinters.com/",
        github: "https://github.com/AmosBaya/KenCADPrintersWebsite.git"
    },

    {
        title: "Green Essence Organics",
        description: "An organic wellness e-commerce platform designed to showcase health products and wellness resources through a clean, user-friendly shopping experience.",
        image: "/projects/projectGreen.png",
        tags: ["React", "MongoDB", "Node.js", "Express", "TailwindCSS", "Socket.io"],
        link: "https://green-esence.vercel.app/",
        github: "https://github.com/AmosBaya/greenEsence.git"
    },

    {
        title: "Church Library - LMS",
        description: "A digital library management system designed to organize church learning resources and simplify the management and discovery of library materials.",
        image: "/projects/projectKen.png",
        tags: ["React", "MongoDB", "Node.js", "Express", "TailwindCSS", "Socket.io"],
        link: "#",
        github: "https://github.com/AmosBaya/Church_Library.git"
    },

    {
        title: "Flipkart Clone",
        description: "A responsive e-commerce interface inspired by Flipkart, featuring product displays and a modern online shopping experience.",
        image: "/projects/projectFlipkart.png",
        tags: ["React", "TailwindCSS"],
        link: "https://flipkart-frontend-two.vercel.app/",
        github: "https://github.com/AmosBaya/EcommerceSite.git"
    },

    {
        title: "BodaLink",
        description: "A digital mobility platform concept aimed at connecting boda boda riders and customers through a more convenient, technology-driven experience.",
        image: "/projects/projectKen.png",
        tags: ["React", "TailwindCSS"],
        link: "https://github.com/AmosBaya/BODALINK.git",
        github: "https://github.com/AmosBaya/BODALINK.git"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/**Backgrund glow accents */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/**Section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A collection of ideas brought to life through code, creativity, and
                        purposeful problem-solving — building digital solutions that address
                        real-world needs.
                    </p>

                </div>

                {/**Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx)=>(
                        <div 
                            key={idx} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay: `${(idx+1)*100}ms`}}
                        >
                            {/**Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t
                                    from-card via-card/50 to-transparent opacity-60"
                                />
                                {/**Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a 
                                        href={project.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a 
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/**Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5
                                     text-muted-foreground group-hover:text-primary
                                     group-hover:translate-x-1
                                     group-hover:-translate-y-1 transition-all" 
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx)=>(
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}

                </div>
                {/**View all cta */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>

        </section>
    )
}