import Image from 'next/image';
import screenshot from '@/public/consulting-screenshot.jpg';

export default function ConsultingFirmWebsite() {
    return (
        <div>
            <h2 className="mb-4 font-mono font-bold leading-8 text-xl text-slate-500">Consulting Firm Website</h2>
            <p className="mb-4 text-slate-700">
                One agency project I had the pleasure to work on was for a regional consulting firm. I was the sole developer 
                for this project and worked with a talented graphic designer to create the full WordPress site for our client. 
                This project was a lot of fun to work on because I was able to implement animations and a complex layout using 
                CSS grid. Due to the complexity of the layout, I was also able to stretch Advanced Custom Fields to allow for 
                granular editing of the content by the client.
            </p>
            <h3 className="mb-4 text-slate-500 font-mono font-bold">Contribution highlights</h3>
            <ul className="mb-8 pl-4 text-slate-700 list-disc list-outside">
                <li>Responsible for full site redesign build.</li>
                <li>Use Green Sock animation library and intersection observers to implement animations.</li>
                <li>Used Advanced Custom Fields to allow for granular editing of content.</li>
                <li>Used CSS grid to implement complex layout with responsive alterations.</li>
            </ul>
            <Image src={screenshot} alt="Consulting site screenshot" placeholder='blur' />
        </div>
    );
}