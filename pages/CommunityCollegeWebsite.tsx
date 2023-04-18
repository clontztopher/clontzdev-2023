import Image from 'next/image';
import screenshot from '@/public/ccc-screenshot.jpg';

export default function CommunityCollegeWebsite() {
    return (
        <div>
            <h2 className="mb-4 font-mono font-bold leading-8 text-xl text-slate-500">Community College Website</h2>
            <p className="mb-4 text-slate-700">
                While working at a Webby Award-winning agency, I was lead frontend developer on a website 
                redesign for a community college. Working with an incredible cross functional 
                team of developers, designers and QA specialists, we were able to create a user friendly and 
                great-looking site that met all of the accessbility requirements for a public institution.
            </p>
            <h3 className="mb-4 text-slate-500 font-mono font-bold">Contribution highlights</h3>
            <ul className="mb-8 pl-4 text-slate-700 list-disc list-outside">
                <li>Led frontend development of site redesign.</li>
                <li>Implemented Lottid-based scroll animations using Lottie Files and intersection observers.</li>
                <li>Implemented extensive design configuration changes based on screen size using flexbox and CSS grid functionalities.</li>
                <li>Implemented &quot;mega nav&quot; navigation menu with sub menus and graphics.</li>
            </ul>
            <Image src={screenshot} alt="Mega nav screenshot" placeholder='blur' />
        </div>
    );
}