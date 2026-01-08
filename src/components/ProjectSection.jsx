import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"


const projects = [
    {
        id: 1,
        title: "E-commerce Admin Web App",
        description: "Interactive analytics dashboard with data visualization and filtering capabilities",
        image: "/projects/ecommerceadmin.PNG",
        tags: ["Asp .Net","React", "TailwindCSS"],
        demoUrl: "https://gadgetmart-frontend.vercel.app",
        githubUrl: "https://github.com/adisaomoabegunde/GadgetMarttt",
    },

    {
        id: 2,
        title: "Mood Journal Web App",
        description: "A beautiful Mood journal Web App using Vanilla Php and BootstrapCSS.",
        image: "/projects/moodjournalphp.PNG",
        tags: ["Vanilla PHP", "BootstrapCSS"],
        demoUrl: "https://github.com/adisaomoabegunde/emosphere",
        githubUrl: "https://github.com/adisaomoabegunde/emosphere",
    },

    {
        id: 3,
        title: "Netflix Clone Web App",
        description: "A beautiful netflix like Web App using Asp .Net for the authentication and React js.",
        image: "/projects/netflixclonereact.PNG",
        tags: ["Asp .Net","React", "TailwindCSS"],
        demoUrl: "https://netchill-615s.vercel.app",
        githubUrl: "https://github.com/adisaomoabegunde/Netchill",
    },

    {
        id: 4,
        title: "School Website",
        description: "A beautiful School Website page using HTML and CSS.",
        image: "/projects/SchoolWebsite.PNG",
        tags: ["CSS", "HTML"],
        demoUrl: "https://schoolwebsite2-six.vercel.app",
        githubUrl: "https://github.com/adisaomoabegunde/schoolwebsite2",
    },

    {
        id: 5,
        title: "Social Media App",
        description: "An interactive social media web app  using Laravel.",
        image: "/projects/socialmedialaravel.PNG",
        tags: ["Laravel"],
        demoUrl: "https://github.com/adisaomoabegunde/talkers",
        githubUrl: "https://github.com/adisaomoabegunde/talkers",
    },

    {
        id: 6,
        title: "E-commerce Web app",
        description: "Full-featured e-commerce platform with user aunthentication and payment processing using Asp .net and React js",
        image: "/projects/ecommerceuser.PNG",
        tags: ["Asp .Net", "React js"],
        demoUrl: "https://gadgetmart-frontend.vercel.app/user",
        githubUrl: "https://github.com/adisaomoabegunde/GadgetMarttt",
    }
]

const myGitUrl = "https://github.com/adisaomoabegunde";
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>


            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                 

                        <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <Link to={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 z-100">
                                        <ExternalLink size={20}/>
                                    </Link>
                                    <Link to={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 z-100">
                                        <Github size={20} />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to={myGitUrl} target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2 z-100" >
                    Check My Github <ArrowRight size={16} />
                </Link>
            </div>  
        </div>

    </section>
}