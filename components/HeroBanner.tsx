'use client';
import React, { useState, useEffect } from 'react';
import HeroParticles from './HeroParticles';

const codeLines = [
    'const developer = {',
    '  name: &quot;Dimitri Mabom&quot;,',
    '  role: &quot;Frontend Developer&quot;,',
    '  skills: [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;]',
    '};'
];

const HeroBanner = () => {
    const [displayText, setDisplayText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [currentLine, setCurrentLine] = useState(0);


    useEffect(() => {
        if (currentLine < codeLines.length) {
            const line = codeLines[currentLine];
            let charIndex = 0;

            const timer = setInterval(() => {
                if (charIndex <= line.length) {
                    setDisplayText(prev => {
                        const lines = prev.split("\n");
                        lines[currentLine] = line.slice(0, charIndex);
                        return lines.join("\n");
                    });
                    charIndex++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        setCurrentLine(prev => prev + 1);
                        setDisplayText(prev => prev + "\n");
                    }, 200);
                }
            }, 50);

            return () => clearInterval(timer);
        }
    }, [currentLine]);

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    return (
        <>
            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .terminal-glow {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.1);
        }

        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

            <div className="relative min-h-96 flex items-center justify-center bg-[#0d1117] overflow-hidden">

                {/* Grid background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Dots pattern */}
                <HeroParticles />

                {/* Main content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-10">


                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Code side */}
                        <div className="slide-up" style={{ animationDelay: '0.2s' }}>
                    {/* Terminal header */}
                    <div className="mb-8 flex items-center gap-2 slide-up" style={{ animationDelay: '0s' }}>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="ml-4 text-gray-500 text-sm font-mono">
                            ~/portfolio/about.tsx
                        </div>
                    </div>
                            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-8 terminal-glow font-mono text-sm">
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
                                    <span className="text-cyan-400">●</span>
                                    <span className="text-gray-400">developer.tsx</span>
                                </div>

                                <pre className="text-gray-300 leading-relaxed">
                                    <code>
                                        {displayText.split('\n').map((line, i) => (
                                            <div key={i} className="flex">
                                                <span className="text-gray-600 mr-4 select-none w-6 text-right">{i + 1}</span>
                                                <span>
                                                    {line.includes('const') && <span className="text-purple-400">const </span>}
                                                    {line.includes('developer') && <span className="text-blue-400">developer</span>}
                                                    {line.includes('name:') && (
                                                        <>
                                                            <span className="text-cyan-400">  name</span>
                                                            <span className="text-gray-300">: </span>
                                                            <span className="text-green-400">&quot;{line.match(/"([^"]*)"/)?.[1] || ''}&quot;</span>
                                                        </>
                                                    )}
                                                    {line.includes('role:') && (
                                                        <>
                                                            <span className="text-cyan-400">  role</span>
                                                            <span className="text-gray-300">: </span>
                                                            <span className="text-green-400">&quot;{line.match(/"([^"]*)"/)?.[1] || ''}&quot;</span>
                                                        </>
                                                    )}
                                                    {line.includes('skills:') && (
                                                        <>
                                                            <span className="text-cyan-400">  skills</span>
                                                            <span className="text-gray-300">: {line.includes('[') && '['}</span>
                                                            {line.match(/\[(.*)\]/)?.[1] && (
                                                                <span className="text-green-400">{line.match(/\[(.*)\]/)?.[1]}</span>
                                                            )}
                                                            {line.includes(']') && <span className="text-gray-300">]</span>}
                                                        </>
                                                    )}
                                                    {line === '};' && <span className="text-gray-300">{'};'}</span>}
                                                    {line === 'const developer = {' && <span className="text-gray-300">{' = {'}</span>}
                                                    {(i === currentLine && cursorVisible) && (
                                                        <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </code>
                                </pre>
                            </div>

                            {/* Status bar */}
                            <div className="mt-4 flex items-center gap-4 text-xs text-gray-600 font-mono">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span>Connected</span>
                                </div>
                                <span>•</span>
                                <span>TypeScript</span>
                                <span>•</span>
                                <span>UTF-8</span>
                            </div>
                        </div>

                        {/* Info side */}
                        <div className="space-y-8">
                            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
                                <div className="text-cyan-400 text-sm font-mono mb-2">
                                    &lt;h1&gt;
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                    Dimitri{" "}
                                    <span className="text-cyan-400">Mabom</span>
                                </h1>
                                <div className="text-cyan-400 text-sm font-mono">
                                    &lt;/h1&gt;
                                </div>
                            </div>

                            <div className="slide-up" style={{ animationDelay: '0.6s' }}>
                                <p className="text-xl text-gray-400 font-light leading-relaxed">
                                    <span className="text-cyan-400 font-mono">{'//'}</span> Frontend Developer passionné par la création d&apos;interfaces modernes et performantes
                                </p>
                            </div>

                            {/* Tech stack */}
                            <div className="slide-up" style={{ animationDelay: '0.8s' }}>
                                <div className="text-gray-500 text-xs font-mono mb-3 uppercase tracking-wider">
                                    {'<Stack />'}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js'].map((tech) => (
                                        <div
                                            key={tech}
                                            className="px-4 py-2 bg-[#161b22] border border-gray-800 rounded text-sm text-gray-300 font-mono hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex gap-4 slide-up" style={{ animationDelay: '1s' }}>
                                <button className="group relative px-5 py-2 bg-cyan-400 text-[#0d1117] font-mono text-sm font-semibold rounded overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Projects
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </span>
                                    <div className="absolute inset-0 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>

                                <button className="px-6 py-3 border border-gray-700 text-gray-300 font-mono text-sm rounded hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom info */}
                    <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-xs text-gray-600 font-mono slide-up" style={{ animationDelay: '1.2s' }}>
                        <div className="flex gap-6">
                            <span>const location = &quot;Amsterdam, NL&quot;;</span>
                            <span>•</span>
                            <span>status: &quot;Available for work&quot;</span>
                        </div>
                        <div>
                            console.log(&quot;Let&apos;s build something amazing&quot;);
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;