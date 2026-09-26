const Footer = () => {
    return (
        <footer className="border-t border-gray-800 px-4 sm:px-6 lg:px-12 py-6 lg:py-8 mt-4 lg:mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="FitLog Logo"
                        className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold">
                        FITLOG </span>
                </div>
                <p className="text-sm text-gray-400 text-center md:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;