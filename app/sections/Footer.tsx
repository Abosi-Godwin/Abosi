const Footer = () => {
    return (
        <footer className="w-full py-8">
            <hr className="mb-10 opacity-30" />

            <div className="px-5 mx-auto flex flex-col md:flex-row md:justify-center md:items-center md:gap-10">
                <p className="text-center capitalize mb-6 md:mb-0 text-sm text-muted-foreground">
                    © {currentYear} Abosi Godwin
                </p>

                <div className="flex items-center justify-center gap-4">
                    {socials.map(social => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="p-2 rounded-lg hover:bg-black/5
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-primary transition-all duration-200
                hover:scale-110"
                            >
                                <Icon className="text-lg" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};
