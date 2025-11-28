export default function Footer() {
    return (
        <div>

            <footer className="bg-gray-900 text-gray-300 ">
                <div className="max-w-6xl  mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-white">🎬 CineCrush</h2>
                        <p className="text-sm text-gray-400">Your favorite movies, all in one place.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white text-sm">About</a>
                        <a href="#" className="hover:text-white text-sm">Contact</a>
                        <a href="#" className="hover:text-white text-sm">Privacy</a>
                        <a href="#" className="hover:text-white text-sm">Terms</a>
                    </div>

                </div>

                <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} CineCrush. All rights reserved.
                </div>
            </footer>

        </div>
    )
}