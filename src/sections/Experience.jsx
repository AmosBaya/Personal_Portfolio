
const experiences = [
    {
        period: "2026 - Present",
        role: "Independent Software Developer",
        company: "Personal Projects & Open Source Learning",
        description:
            "Designing and building practical web applications while strengthening my skills in frontend development, full-stack architecture, and modern software engineering.",
        technologies: ["React", "JavaScript","MongoDB", "Express.js","Node.js", "Tailwind CSS", "Git"],
        current: true
    },
    {
        period: "FEB - SEPT 2025 ",
        role: "MERN Stack Developer Trainee",
        company: "Power Learn Project (PLP)",
        description:
            "Developed practical software engineering skills through structured training, hands-on assignments, and building web applications using the MERN stack.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        current: false
    },
    {
        period: "2024 - Present",
        role: "Computer Science Student",
        company: "Maseno University",
        description:
            "Building a strong foundation in computing, programming, algorithms, and software development while applying classroom knowledge to personal projects.",
        technologies: ["Java", "JavaScript", "Python", "SQL", "DSA"],
        current: true
    }
];

export const Experience = () => {
    return (
        <section 
            id="experience" 
            className="py-32 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 blur-3xl -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10">
                {/**Section header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">My development journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Learning by building.
                        <span className="font-serif italic font-normal text-white"> Growing through experience.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        My journey is shaped by curiosity, hands-on learning, and a drive
                        to solve real-world problems through technology. From university
                        studies to building practical applications, every experience is
                        helping me grow into a more thoughtful and capable developer.
                    </p>
                </div>

                {/**Timeline */}
            </div>
        </section>
    )
}