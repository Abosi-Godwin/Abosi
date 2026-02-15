const MobileNav = () => {
    return (
        <div className="flex items-center justify-center px-3 md:hidden">
            <a
                href="/Abosi-Godwin-Resume.pdf"
                download
                className="w-full text-center rounded-xl bg-purple-600
        text-white font-semibold py-2.5 px-4
        hover:bg-purple-700 active:scale-95
        transition-all duration-200"
            >
                Download Resume
            </a>
        </div>
    );
};

export default MobileNav;
