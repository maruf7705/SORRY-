import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, Check, CheckCircle2 } from 'lucide-react'

export default function ProtocolC() {
    const navigate = useNavigate()
    const [checklist, setChecklist] = useState({
        step1: false,
        step2: false,
        step3: false,
    })
    const [selectedTask, setSelectedTask] = useState('')

    const toggleCheck = (step: keyof typeof checklist) => {
        setChecklist(prev => ({ ...prev, [step]: !prev[step] }))
    }

    const videoRecoveryTasks = [
        'Just organize project files',
        'Just watch reference videos',
        'Just review existing footage',
    ]

    const aiRecoveryTasks = [
        'Just read your existing notes',
        'Just browse competitor websites',
        'Just review your previous work',
    ]

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
                        PROTOCOL C
                    </div>
                    <h1 className="text-4xl font-bold text-stone-900">
                        Biological Reset
                    </h1>
                    <p className="text-xl text-stone-500 leading-relaxed">
                        You are depleted. We need to reset your physiology before engaging the mind.
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
                        <div className="font-bold text-stone-900 mb-1">Get Natural Light</div>
                        <p className="text-stone-500 text-sm">Go to a window or outside. 2 minutes minimum.</p>
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
                        <div className="font-bold text-stone-900 mb-1">Physical Shake</div>
                        <p className="text-stone-500 text-sm">Deep breaths. Arm circles. Shake your body to release tension.</p>
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
                        <div className="font-bold text-stone-900 mb-1">Cold Water</div>
                        <p className="text-stone-500 text-sm">Splash cold water on your face. Reset the vagus nerve.</p>
                    </div>
                    <span className="font-mono text-xs text-stone-300">03</span>
                </label>
            </div>

            {/* Recovery Task Selection */}
            {allStepsComplete && (
                <div className="space-y-8 animate-fade-in pt-8 border-t border-stone-200">
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl font-bold text-stone-900">
                            Physiology Reset
                        </h2>
                        <p className="text-stone-500">
                            Select a low-friction entry point to resume work.
                        </p>
                    </div>

                    <div className="iso-card">
                        <h3 className="font-bold text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">Recovery Actions</h3>
                        <div className="space-y-2">
                            {/* Video Recovery */}
                            {videoRecoveryTasks.map((task, idx) => (
                                <label
                                    key={`vid-${idx}`}
                                    className={`flex items-start gap-3 p-3 text-sm cursor-pointer transition-colors group ${selectedTask === task ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'}`}
                                >
                                    <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${selectedTask === task ? 'border-stone-900 bg-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                                        {selectedTask === task && <CheckCircle2 className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="recovery-task"
                                        checked={selectedTask === task}
                                        onChange={() => setSelectedTask(task)}
                                        className="hidden"
                                    />
                                    <span>{task}</span>
                                </label>
                            ))}
                            {/* AI Recovery */}
                            {aiRecoveryTasks.map((task, idx) => (
                                <label
                                    key={`ai-${idx}`}
                                    className={`flex items-start gap-3 p-3 text-sm cursor-pointer transition-colors group ${selectedTask === task ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'}`}
                                >
                                    <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${selectedTask === task ? 'border-stone-900 bg-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                                        {selectedTask === task && <CheckCircle2 className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="recovery-task"
                                        checked={selectedTask === task}
                                        onChange={() => setSelectedTask(task)}
                                        className="hidden"
                                    />
                                    <span>{task}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {selectedTask && (
                        <div className="animate-fade-in">
                            <button
                                onClick={() => navigate('/timer', { state: { task: selectedTask, duration: 25 } })}
                                className="w-full bg-stone-900 text-white font-bold py-4 px-8 text-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 shadow-lg"
                            >
                                <Play className="w-5 h-5" />
                                START RECOVERY SESSION
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
