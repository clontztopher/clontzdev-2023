import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

import Link from 'next/link';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="py-6 bg-slate-700 w-full text-white font-mono">
                <div className="container mx-auto flex justify-between px-6">
                    <h1><Link href="/">Chris Clontz</Link></h1>
                    <h2 className="italic text-sm text-slate-400">Software Development Portfolio</h2>
                </div>
            </div>
            <main className="pb-20">
                <div className="container px-6 mx-auto py-12">
                    {children}
                </div>
            </main>
            <Navbar/>
        </>
    );
}