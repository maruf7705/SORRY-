import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FocusHome from './components/FocusHome'
import ProtocolA from './components/ProtocolA'
import ProtocolB from './components/ProtocolB'
import ProtocolC from './components/ProtocolC'
import PomodoroTimer from './components/PomodoroTimer'
import ProgressDashboard from './components/ProgressDashboard'

function App() {
    return (
        <Router>
            <div className="h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden relative">
                {/* Minimal Header */}
                <header className="absolute top-8 w-full max-w-4xl flex justify-between items-center px-4">
                    <a href="/" className="text-sm font-bold tracking-tight uppercase hover:text-stone-600 transition-colors">
                        Focus Protocol
                    </a>
                    <div className="flex gap-1">
                        <div className="size-1.5 rounded-full bg-stone-900 animate-pulse"></div>
                    </div>
                </header>

                <main className="w-full max-w-5xl flex-1 flex flex-col justify-center">
                    <Routes>
                        <Route path="/" element={<FocusHome />} />
                        <Route path="/protocol-a" element={<ProtocolA />} />
                        <Route path="/protocol-b" element={<ProtocolB />} />
                        <Route path="/protocol-c" element={<ProtocolC />} />
                        <Route path="/timer" element={<PomodoroTimer />} />
                        <Route path="/progress" element={<ProgressDashboard />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>

                <footer className="absolute bottom-6 text-stone-400 text-[10px] font-mono w-full max-w-4xl flex justify-between px-4">
                    <span>V 0.1.0</span>
                    <span>DESIGN BY PATTERNCRAFT</span>
                </footer>
            </div>
        </Router>
    )
}

export default App
