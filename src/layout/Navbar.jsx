import { Button } from "@/components/Button"
import { X } from "lucide-react"
import { Menu } from "lucide-react"
import { useState } from "react"

const navLinks = [
    {href: "#about", label:"About"},
    {href: "#projects", label:"Projects"},
    {href: "#experience", label:"Experience"},
    {href: "#Testimonials", label:"Testimonials"},
]

export const Navbar = () => {

    const [isMobileMenueOpen, setIsMobileMenueOpen] = useState(false);

    return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5 z-50">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            {/**tracking-tight-> later spacing to be tight */}
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                AB<span className="text-primary">.</span>
            </a>

            {/* Desktop*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index)=>(
                        <a 
                            href={link.href} 
                            key={index} 
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/**CTA BUTTON */}
            <div className="hidden md:block">
                <Button size="sm">Contact Me</Button>
            </div>
            
            {/**Mobile menu button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenueOpen((prev) => !prev)}>
                {isMobileMenueOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </nav>

        {/**MObile menue */}
        {isMobileMenueOpen && (<div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index)=>(
                    <a 
                        href={link.href} 
                        key={index} 
                        className="text-lg py-2 text-muted-foreground hover:text-foreground "
                    >
                        {link.label}
                    </a>
                ))}

                {/**CTA BUTTON */}
                <Button>Contact Me</Button>
            
            </div>
        </div>)}
    </header>
)
}