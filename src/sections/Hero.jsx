import {Button} from "@/components/Button"
import { ArrowRight } from "lucide-react"
import { Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidded">
            <div className="absolute inset-0">
                <img 
                    src="/port-hero.avif" 
                    alt="Hero section image"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/** to-b --> from top to bottom to-t totop etc */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>

            {/**Green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(35)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random()* 100}%`,
                            top:`${Math.random()* 100}%`,
                            animation:`slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay:`${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/**CONTENT */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/**Left Column --text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Software Engineer · React Specialist 
                            </span>
                        </div>

                        {/**Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Amos Baya --a software developer passionate about turning complex ideas into intuitive, high-performance digital experiences. 
                                From sleek interfaces to thoughtfully engineered applications, I build solutions that blend creativity, functionality, and purpose.
                            </p>
                        </div>

                        {/**CTAS */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                            <AnimatedBorderButton /> 
                        </div>

                        {/**Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                { icon: Github, href:"#" },
                                { icon: Linkedin, href:"#" },
                                { icon: Twitter, href:"#" },
                            ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon />}
                                </a>
                            ))}
                        </div>

                    </div>
                    {/**Right columnt - Profile image */}
                </div>
            </div>
        </section>
    )
}