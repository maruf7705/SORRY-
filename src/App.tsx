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
            <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <header className="w-full max-w-2xl mb-12 flex justify-between items-center">
                    <a href="/" className="text-sm font-bold tracking-tight uppercase hover:text-stone-600 transition-colors">
                        Focus Protocol
                    </a>
                    <div className="flex gap-1">
                        <div className="size-1.5 rounded-full bg-stone-900 animate-pulse"></div>
                    </div>
                </header>

                <main className="w-full max-w-2xl">
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

                <footer className="mt-24 text-stone-400 text-xs font-mono w-full max-w-2xl flex justify-between">
                    <span>V 0.1.0</span>
                    <span>DESIGN BY PATTERNCRAFT</span>
                </footer>
            </div>
        </Router>
    )
}

export default App
