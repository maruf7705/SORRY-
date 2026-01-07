import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, X, Check } from 'lucide-react'

export default function ProtocolA() {
    const navigate = useNavigate()
    const [checklist, setChecklist] = useState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
    })

    const toggleCheck = (step: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [step]: !prev[step] }))
    }

    const allStepsComplete = Object.values(checklist).every(v => v)

    return (
        <div className="space-y-12 animate-fade-in max-w-2xl mx-auto">
            {/* Header */}
            <div className="space-y-8">
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-mono uppercase tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>

                <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-stone-900 text-white text-xs font-mono mb-2">
                        PROTOCOL A
                    </div>
                    <h1 className="text-4xl font-bold text-stone-900">
                        Dopamine Detox
                    </h1>
                    <p className="text-xl text-stone-500 leading-relaxed">
                        Your prefrontal cortex is offline. Follow these mechanical steps to re-engage your executive function.
                    </p>
                </div>
            </div>

            {/* Checklist */}
            <div className="space-y-px bg-stone-200 border border-stone-200">
                {/* Step 1 */}
                <label className="flex items-start gap-6 p-6 bg-white hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 border transition-colors flex items-center justify-center ${checklist.step1 ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                        {checklist.step1 && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <input
                        type="checkbox"
                        checked={checklist.step1}
                        onChange={() => toggleCheck('step1')}
                        className="hidden"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-stone-900 mb-1">Close Tabs</div>
                        <p className="text-stone-500 text-sm">Close ALL tabs except this one. Do it now.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">01</span>
                </label>

                {/* Step 2 */}
                <label className="flex items-start gap-6 p-6 bg-white hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 border transition-colors flex items-center justify-center ${checklist.step2 ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                        {checklist.step2 && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <input
                        type="checkbox"
                        checked={checklist.step2}
                        onChange={() => toggleCheck('step2')}
                        className="hidden"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-stone-900 mb-1">Stand Up</div>
                        <p className="text-stone-500 text-sm">Physically stand up. Don't sit until complete.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">02</span>
                </label>

                {/* Step 3 */}
                <label className="flex items-start gap-6 p-6 bg-white hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 border transition-colors flex items-center justify-center ${checklist.step3 ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                        {checklist.step3 && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <input
                        type="checkbox"
                        checked={checklist.step3}
                        onChange={() => toggleCheck('step3')}
                        className="hidden"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-stone-900 mb-1">Movement</div>
                        <p className="text-stone-500 text-sm">20 Jumping Jacks. Get the blood flowing.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">03</span>
                </label>

                {/* Step 4 */}
                <label className="flex items-start gap-6 p-6 bg-white hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 border transition-colors flex items-center justify-center ${checklist.step4 ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                        {checklist.step4 && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <input
                        type="checkbox"
                        checked={checklist.step4}
                        onChange={() => toggleCheck('step4')}
                        className="hidden"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-stone-900 mb-1">Box Breathing</div>
                        <p className="text-stone-500 text-sm">Inhale (4s) → Hold (4s) → Exhale (4s) → Hold (4s). 3 Rounds.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">04</span>
                </label>

                {/* Step 5 */}
                <label className="flex items-start gap-6 p-6 bg-white hover:bg-stone-50 transition-colors cursor-pointer group">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 border transition-colors flex items-center justify-center ${checklist.step5 ? 'bg-stone-900 border-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                        {checklist.step5 && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <input
                        type="checkbox"
                        checked={checklist.step5}
                        onChange={() => toggleCheck('step5')}
                        className="hidden"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-stone-900 mb-1">Hydrate</div>
                        <p className="text-stone-500 text-sm">Drink a full glass of water.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">05</span>
                </label>
            </div>

            {/* Task Selection */}
            {allStepsComplete ? (
                <div className="space-y-8 animate-fade-in pt-8 border-t border-stone-200">
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl font-bold text-stone-900">
                            System Reset Complete
                        </h2>
                        <p className="text-stone-500">
                            Select your immediate objective.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <button className="p-6 border border-stone-200 hover:border-stone-900 text-left transition-colors bg-white">
                            <div className="text-xs font-mono text-stone-400 mb-2">OPTION A</div>
                            <h3 className="font-bold text-stone-900">Deep Work Session</h3>
                            <p className="text-stone-500 text-sm mt-1">90 minutes focused work</p>
                        </button>
                        <button className="p-6 border border-stone-200 hover:border-stone-900 text-left transition-colors bg-white">
                            <div className="text-xs font-mono text-stone-400 mb-2">OPTION B</div>
                            <h3 className="font-bold text-stone-900">Quick Sprint</h3>
                            <p className="text-stone-500 text-sm mt-1">25 minutes Pomodoro</p>
                        </button>
                    </div>

                    <button
                        onClick={() => navigate('/timer')}
                        className="w-full bg-stone-900 text-white font-bold py-4 px-8 text-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3"
                    >
                        <Play className="w-5 h-5" />
                        INITIATE TIMER
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center gap-2 text-stone-400 text-sm font-mono uppercase tracking-widest pt-8 border-t border-stone-200">
                    <X className="w-4 h-4" />
                    <span>Awaiting Completion</span>
                </div>
            )}
        </div>
    )
}
