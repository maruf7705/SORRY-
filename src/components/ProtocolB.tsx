import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, PenLine, CheckCircle2 } from 'lucide-react'

export default function ProtocolB() {
    const navigate = useNavigate()
    const [goalSentence, setGoalSentence] = useState('')
    const [selectedTask, setSelectedTask] = useState('')

    const videoEditingTasks = [
        'Watch exactly 10 minutes of one tutorial',
        'Edit exactly 30 seconds of footage',
        'Organize 5 video project files',
        'Practice one transition effect 3 times',
        'Color grade exactly 2 clips',
        'Export one 15-second test video',
    ]

    const aiBusinessTasks = [
        'Write 3 bullet points about target customer',
        'Research 2 competitor tools (10 min max)',
        'Draft 1 email template for potential clients',
        'List 5 potential use cases for the agent',
        'Sketch one simple workflow diagram',
        'Write 200 words on one business plan section',
    ]

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
                        PROTOCOL B
                    </div>
                    <h1 className="text-4xl font-bold text-stone-900">
                        Overcome Freeze
                    </h1>
                    <p className="text-xl text-stone-500 leading-relaxed">
                        You are in a high-friction state. We need to lower the activation energy.
                    </p>
                </div>
            </div>

            {/* Step 1: Goal Sentence */}
            <div className="iso-card">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-mono text-xs font-bold text-stone-900">01</div>
                    <h2 className="text-xl font-bold text-stone-900">
                        Define Micro-Goal
                    </h2>
                </div>

                <div className="bg-stone-50 p-6 border border-stone-200">
                    <label className="block text-lg font-mono leading-relaxed text-stone-800">
                        <span className="text-stone-400">"My only goal for the next 25 minutes is </span>
                        <input
                            type="text"
                            value={goalSentence}
                            onChange={(e) => setGoalSentence(e.target.value)}
                            placeholder="type here..."
                            className="bg-transparent border-b-2 border-stone-300 px-2 py-1 focus:outline-none focus:border-stone-900 w-full md:w-auto font-bold text-stone-900 placeholder:text-stone-300 transition-colors"
                        />
                        <span className="text-stone-400">"</span>
                    </label>
                </div>
            </div>

            {/* Micro-Task Options */}
            <div className="iso-card">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-mono text-xs font-bold text-stone-900">02</div>
                    <h2 className="text-xl font-bold text-stone-900">
                        Or Choose a Preset
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Video Editing */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-xs font-mono uppercase tracking-widest text-stone-500">Video Editing</h3>
                        <div className="space-y-2">
                            {videoEditingTasks.map((task, idx) => (
                                <label
                                    key={idx}
                                    className={`flex items-start gap-3 p-3 text-sm cursor-pointer transition-colors group ${selectedTask === task ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'}`}
                                >
                                    <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${selectedTask === task ? 'border-stone-900 bg-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                                        {selectedTask === task && <CheckCircle2 className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="task"
                                        checked={selectedTask === task}
                                        onChange={() => setSelectedTask(task)}
                                        className="hidden"
                                    />
                                    <span>{task}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* AI Business */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-xs font-mono uppercase tracking-widest text-stone-500">AI Business</h3>
                        <div className="space-y-2">
                            {aiBusinessTasks.map((task, idx) => (
                                <label
                                    key={idx}
                                    className={`flex items-start gap-3 p-3 text-sm cursor-pointer transition-colors group ${selectedTask === task ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'}`}
                                >
                                    <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors ${selectedTask === task ? 'border-stone-900 bg-stone-900' : 'border-stone-300 group-hover:border-stone-400'}`}>
                                        {selectedTask === task && <CheckCircle2 className="w-3 h-3 text-white" />}
                                    </div>
                                    <input
                                        type="radio"
                                        name="task"
                                        checked={selectedTask === task}
                                        onChange={() => setSelectedTask(task)}
                                        className="hidden"
                                    />
                                    <span>{task}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Button */}
            {(goalSentence || selectedTask) && (
                <div className="animate-fade-in pt-8 border-t border-stone-200">
                    <button
                        onClick={() => navigate('/timer', { state: { task: goalSentence || selectedTask, duration: 5 } })}
                        className="w-full bg-stone-900 text-white font-bold py-4 px-8 text-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 shadow-lg"
                    >
                        <Play className="w-5 h-5" />
                        START 5-MINUTE SPRINT
                    </button>
                    <p className="text-center text-stone-400 text-sm mt-4 font-mono">
                        Just 5 minutes. You can stop after that.
                    </p>
                </div>
            )}
        </div>
    )
}
