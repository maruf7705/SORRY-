import { useNavigate } from 'react-router-dom'
import { MousePointer2, Snowflake, BatteryWarning, BarChart3, Clock } from 'lucide-react'

export default function FocusHome() {
    const navigate = useNavigate()

    return (
        <div className="space-y-8 animate-fade-in w-full max-w-6xl mx-auto px-4">
            {/* Header */}
            <header className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-stone-100 mb-2">
                    <Clock className="w-5 h-5 text-stone-900" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-stone-900">
                    Emergency Focus Reset
                </h1>
                <p className="text-lg text-stone-500 max-w-lg mx-auto leading-relaxed">
                    You have drifted. Use the remaining <strong className="text-stone-900">180 seconds</strong> to regain control.
                </p>
            </header>

            {/* Diagnosis Grid */}
            <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Protocol A */}
                    <button
                        onClick={() => navigate('/protocol-a')}
                        className="iso-card group text-left hover:border-stone-900 py-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="font-mono text-xs text-stone-400">01</span>
                            <MousePointer2 className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-1">Scrolling</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-4 h-8">
                            Caught in a loop of consumption. Need to break the dopamine cycle.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-xs group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol A</span>
                            <span>→</span>
                        </div>
                    </button>

                    {/* Protocol B */}
                    <button
                        onClick={() => navigate('/protocol-b')}
                        className="iso-card group text-left hover:border-stone-900 py-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="font-mono text-xs text-stone-400">02</span>
                            <Snowflake className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-1">Frozen</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-4 h-8">
                            Overwhelmed by choices or complexity. Paralysis analysis state.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-xs group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol B</span>
                            <span>→</span>
                        </div>
                    </button>

                    {/* Protocol C */}
                    <button
                        onClick={() => navigate('/protocol-c')}
                        className="iso-card group text-left hover:border-stone-900 py-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="font-mono text-xs text-stone-400">03</span>
                            <BatteryWarning className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 mb-1">Drained</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-4 h-8">
                            Mental fatigue and brain fog. Need a biological reset.
                        </p>
                        <div className="flex items-center gap-2 text-stone-900 font-medium text-xs group-hover:translate-x-1 transition-transform">
                            <span>Execute Protocol C</span>
                            <span>→</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Quick Access */}
            <div className="flex gap-4 justify-center pt-4 border-t border-stone-200">
                <button
                    onClick={() => navigate('/timer')}
                    className="px-6 py-3 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
                >
                    <Clock className="w-4 h-4" />
                    Open Timer
                </button>
                <button
                    onClick={() => navigate('/progress')}
                    className="px-6 py-3 bg-white border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors flex items-center gap-2"
                >
                    <BarChart3 className="w-4 h-4" />
                    View Progress
                </button>
            </div>
        </div>
    )
}
