import Image from 'next/image';
import androidScreenshot from '@/public/android-screenshot.jpg';
import javafxScreenshot from '@/public/inventory-manager-screenshot.jpg';

export default function CourseWork() {
    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 font-mono font-bold leading-8 text-xl text-slate-500">Software Development Course Work</h2>
            <p className="mb-4 text-slate-700">
                After working on websites and apps for a number of years I decided to go back to school for a degree in Software Development, which I 
                completed in April of 2023. Through the curriculum I learned more about computers and networking as well as project management, UI/UX, 
                and a number of other skills to round out my knowledge of software development as a discipline. I took the Java branch of the software 
                development path and created four projects using both Java FX and Android as the platforms. These projects are public on my 
                &nbsp;<a className="underline text-green-500" href="https://github.com/clontztopher" target="_blank">GitHub</a> profile.
            </p>
            <h3 className="mb-8 text-slate-500 font-mono font-bold">Android</h3>
            <Image src={androidScreenshot} alt="Android screenshots" className="mb-8"/>
            <h3 className="mb-4 text-slate-500 font-mono font-bold">Course Planning Tool</h3>
            <ul className="mb-8 pl-4 text-slate-700 list-disc list-outside">
                <li>An app for organizing courses, instructors, terms, tests and notes.</li>
                <li><a className="underline" href="/CoursePlannerWireframe.pdf" target="_blank">Wireframe diagram</a></li>
                <li><a className="underline" href="https://github.com/clontztopher/course-planner" target="_blank">Github Page</a></li>
            </ul>
            <h3 className="mb-4 text-slate-500 font-mono font-bold">Skill Manager</h3>
            <ul className="mb-8 pl-4 text-slate-700 list-disc list-outside">
                <li>An app for independent mentors who manage mentees and assignments.</li>
                <li><a className="underline" href="/SkillManagerWireframe.pdf" target="_blank">Wireframe diagram</a></li>
                <li><a className="underline" href="https://github.com/clontztopher/skill-manager" target="_blank">Github Page</a></li>
            </ul>
            <h3 className="mb-8 text-slate-500 font-mono font-bold">Java FX</h3>
            <Image src={javafxScreenshot} alt="Java FX screenshots" className="mb-8"/>
            <ul className="mb-8 pl-4 text-slate-700 list-disc list-outside">
                <li>A basic inventory manager and a scheduling application.</li>
                <li><a className="underline" href="https://github.com/clontztopher/wgu-inventory-manager" target="_blank">Inventory Manager Github Page</a></li>
                <li><a className="underline" href="https://github.com/clontztopher/customer-appointment-manager" target="_blank">Appointment Manager Github Page</a></li>
            </ul>
        </div>
    );
}