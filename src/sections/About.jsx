import {
    Rocket,
    Database,
    Workflow,
    GraduationCap
} from "lucide-react";


const highlights = [
    {
        icon: Rocket,
        title: "Product-Oriented Development",
        description:
            "Turning ideas into practical digital products, from early concepts to functional applications built around real user needs."
    },
    {
        icon: Database,
        title: "Data-Driven Thinking",
        description:
            "Combining analytical thinking and data exploration to uncover insights, understand patterns, and support smarter decisions."
    },
    {
        icon: Workflow,
        title: "End-to-End Execution",
        description:
            "Taking ownership of development tasks, solving technical challenges, and connecting individual components into cohesive solutions."
    },
    {
        icon: GraduationCap,
        title: "Continuous Growth",
        description:
            "Expanding my technical capabilities through hands-on projects, experimentation, and a commitment to mastering modern technologies."
    }
];

export const About = () => {
    return (
        <section id="about" className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/**Left Section */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Turning ideas into
                            <span className="font-serif italic font-normal text-white"> meaningful digital solutions.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a Computer Science student and developer driven by curiosity,
                                creativity, and the challenge of turning ideas into practical
                                digital solutions.
                            </p>

                            <p>
                                From building modern web applications to exploring AI, mobile
                                development, and data science, I learn best by creating things
                                that solve real-world problems.
                            </p>

                            <p>
                                I'm constantly refining my craft, embracing new challenges, and
                                looking for opportunities to grow, collaborate, and make a
                                meaningful impact through technology.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to build technology with purpose — creating
                                thoughtful, accessible, and impactful solutions that turn
                                real-world challenges into opportunities for change.
                            </p>
                        </div>
                    </div>

                    {/**Right section- highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) =>(
                            <div 
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx+1)*100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon  className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}