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
            <div className="container mx-auto flex justify-between px-6 max-w-2xl">
                <div>
                    <span className="block text-slate-400 text-sm invisible sm:visible">{prevRoute[1]}</span>
                    <button 
                        className="underline decoration-slate-500 decoration-4 underline-offset-4 hover:text-green-300 hover:decoration-green-300" 
                        onClick={() => router.push(prevRoute[0])}>
                            Previous
                    </button>
                </div>
                <div className="text-right">
                    <span className="block text-slate-400 text-sm invisible sm:visible">{nextRoute[1]}</span>
                    <button 
                        className="underline decoration-slate-500 decoration-4 underline-offset-4 hover:text-green-300 hover:decoration-green-300" 
                        onClick={() => router.push(nextRoute[0])}>
                            Next
                    </button>
                </div>
            </div>
        </nav>
    );
}