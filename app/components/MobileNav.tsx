const MobileNav = () => {
    return (
        <div className="flex items-center justify-center px-3 md:hidden">
            <a
                href="https://docs.google.com/document/d/1zIakQ76g-LzK9blrcejY9ns3UM66LOd4/edit?usp=drivesdk&ouid=110667997420528569727&rtpof=true&sd=true"
                target="_blank"
                className="w-full text-center rounded-xl bg-secondary
        text-white font-semibold py-1.5 px-2
        hover:bg-purple-700 active:scale-95
        transition-all duration-200"
            >
                View Resume
            </a>
        </div>
    );
};

export default MobileNav;
