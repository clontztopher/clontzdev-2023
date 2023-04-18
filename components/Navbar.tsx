import { useRouter } from "next/router";

const routes = [
    ['/', 'Home'],
    ['/CommunityCollegeWebsite', 'Community College Website'],
    ['/ConsultingFirmWebsite', 'Consulting Firm Website'],
    ['/RealEstateSchool', 'Real Estate School'],
    ['/CourseWork', 'Software Development Course Work']
];

export default function Navbar() {
    const router = useRouter();
    let idx = routes.findIndex(route => router.pathname == route[0]);
    let nextRoute = idx < routes.length - 1
        ? routes[idx + 1]
        : routes[0];
    let prevRoute = idx > 0
        ? routes[idx - 1]
        : routes[routes.length - 1];

    return (
        <nav className="py-6 fixed bottom-0 bg-slate-700 w-full text-white font-mono">
            <div className="container mx-auto flex justify-between px-6">
                <div>
                    <span className="block text-slate-400 text-sm">Previous</span>
                    <button 
                        className="underline decoration-slate-500 decoration-4 underline-offset-4 hover:text-green-300 hover:decoration-green-300" 
                        onClick={() => router.push(prevRoute[0])}>
                            {prevRoute[1]}
                    </button>
                </div>
                <div>
                    <span className="block text-slate-400 text-sm">Next</span>
                    <button 
                        className="underline decoration-slate-500 decoration-4 underline-offset-4 hover:text-green-300 hover:decoration-green-300" 
                        onClick={() => router.push(nextRoute[0])}>
                            {nextRoute[1]}
                    </button>
                </div>
            </div>
        </nav>
    );
}