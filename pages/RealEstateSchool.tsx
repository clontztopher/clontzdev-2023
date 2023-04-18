import Image from 'next/image';
import siteScreenshot from '@/public/csre-screenshot.jpg';

export default function RealEstateSchool() {
    return (
        <div>
            <h2 className="mb-4 font-mono font-bold leading-8 text-xl text-slate-500">Real Estate School</h2>
            <h3 className="mb-4 font-mono font-bold leading-8 text-slate-500">Website</h3>
            <p className="mb-8 text-slate-700">
                One of my favorite and most valuable experiences was being able to work on the website of a large 
                real estate school. I was able to help with navigation features as well as build custom mini-applications 
                for the site. I also worked with an internal team and an external consultant to set up eCommerce tracking 
                for a complex checkout process.
            </p>
            <Image src={siteScreenshot} alt="Real estate education home screen" className="mb-8" placeholder='blur' />
            <h3 className="mb-4 font-mono font-bold leading-8 text-slate-500">Mobile Application</h3>
            <p className="mb-4 text-slate-700">
                Another invaluable experience was being given the task of bringing a mobile flashcard application in-house. I first built 
                the iOS application in Swift and then, due to that applications success, built the Android application using React Native.
            </p>
        </div>
    );
}