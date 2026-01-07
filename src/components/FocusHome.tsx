import { useNavigate } from 'react-router-dom'
import { MousePointer2, Snowflake, BatteryWarning, BarChart3, Clock } from 'lucide-react'

export default function FocusHome() {
    const navigate = useNavigate()

    return (
        <div className="space-y-16 animate-fade-in">
            {/* Header */}
            <header className="text-center space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-stone-100 mb-4">
                    <Clock className="w-6 h-6 text-stone-900" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-stone-900">
                    Emergency Focus Reset
                </h1>
                <p className="text-xl text-stone-500 max-w-lg mx-auto leading-relaxed">
                    You have drifted. Use the remaining <strong className="text-stone-900">180 seconds</strong> to regain control before the distraction takes root.
                </p>
            </header>

            {/* Diagnosis Grid */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-2 text-sm font-mono text-stone-400 uppercase tracking-widest">
                    <span>Diagnosis</span>
                    <span className="w-12 h-px bg-stone-200"></span>
                    <span>Select State</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Protocol A */}
                    <button
                        onClick={() => navigate('/protocol-a')}
                        className="iso-card group text-left hover:border-stone-900"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-xs text-stone-400">01</span>
                            <MousePointer2 className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">Scrolling</h3>
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">
                            Caught in a loop of consumption. Need to break the dopamine cycle.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol A</span>
                            <span>→</span>
                        </div>
                    </button>

                    {/* Protocol B */}
                    <button
                        onClick={() => navigate('/protocol-b')}
                        className="iso-card group text-left hover:border-stone-900"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-xs text-stone-400">02</span>
                            <Snowflake className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">Frozen</h3>
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">
                            Overwhelmed by choices or complexity. Paralysis analysis state.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol B</span>
                            <span>→</span>
                        </div>
                    </button>

                    {/* Protocol C */}
                    <button
                        onClick={() => navigate('/protocol-c')}
                        className="iso-card group text-left hover:border-stone-900"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-xs text-stone-400">03</span>
                            <BatteryWarning className="w-6 h-6 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">Drained</h3>
                        <p className="text-stone-500 text-sm leading-relaxed mb-6">
                            Mental fatigue and brain fog. Need a biological reset.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol C</span>
                            <span>→</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Quick Access */}
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8 border-t border-stone-200">
                <button
                    onClick={() => navigate('/timer')}
                    className="px-8 py-4 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors rounded-none"
                >
                    Open Pomodoro Timer
                </button>
                <button
                    onClick={() => navigate('/progress')}
                    className="px-8 py-4 bg-white border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors rounded-none flex items-center gap-2"
                >
                    <BarChart3 className="w-4 h-4" />
                    View Progress
                </button>
            </div>
        </div>
    )
}
