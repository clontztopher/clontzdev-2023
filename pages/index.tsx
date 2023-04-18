import Image from 'next/image';
import profile from '@/public/profile.jpg';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <h2 className="mb-4 font-mono font-bold leading-8 text-xl text-green-500">Hello and thanks for visiting my portfolio site.</h2>
        <p className="mb-4 text-slate-700">
          Although I have worked extensively on 
          many websites and applications, I have cherry-picked a few projects on which I was particularly 
          proud to work. These show proficiency in frontend development, full-stack WordPress development, 
          and mobile applicaton development. The site is set up as a slide show of sorts so feel free to 
          click along through the projects below.
        </p>
        <p className="mb-4 text-slate-700">
          In addition to the projects outlined on this site, I have also worked on sites for; higher education and Ivy League schools, 
          commercial real estate investors, a hair salon, municipalities and counties, a Mensa chapter, IT companies, and more...
        </p>
        <p className="text-slate-700 mb-12">
          To protect the privacy of the clients and employers I&apos;ve worked with in the past I&apos;m 
          not able to share much source code but you can find the source for this site, and for school 
          projects, on <a className="underline text-green-500" href="https://github.com/clontztopher" target="_blank">GitHub</a>.
        </p>
        <Image src={profile} alt="Profile pic" className="max-w-[200px] mx-auto" />
      </div>
    </div>
  );
}
