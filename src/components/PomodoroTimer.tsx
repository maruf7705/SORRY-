import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, Play, Pause, Square, Plus } from 'lucide-react'

export default function PomodoroTimer() {
    const navigate = useNavigate()
    const location = useLocation()
    const taskFromState = location.state?.task || ''
    const defaultDuration = location.state?.duration || 25

    const [minutes, setMinutes] = useState(defaultDuration)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const [task, setTask] = useState(taskFromState)
    const [blocksToday, setBlocksToday] = useState(0)

    const totalSeconds = defaultDuration * 60
    const currentSeconds = minutes * 60 + seconds
    const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100

    useEffect(() => {
        // Load blocks from localStorage
        const today = new Date().toDateString()
        const stored = localStorage.getItem('focusProtocol')
        if (stored) {
            const data = JSON.parse(stored)
            if (data.date === today) {
                setBlocksToday(data.blocks || 0)
            } else {
                // New day, reset
                localStorage.setItem('focusProtocol', JSON.stringify({ date: today, blocks: 0 }))
            }
        }
    }, [])

    useEffect(() => {
        let interval: number | undefined

        if (isRunning && !isComplete) {
            interval = window.setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        // Timer complete
                        setIsComplete(true)
                        setIsRunning(false)
                        // Save completed block
                        const today = new Date().toDateString()
                        const newBlocks = blocksToday + 1
                        setBlocksToday(newBlocks)
                        localStorage.setItem('focusProtocol', JSON.stringify({ date: today, blocks: newBlocks }))
                        // Play sound or notification
                        if ('Notification' in window && Notification.permission === 'granted') {
                            new Notification('🎉 Pomodoro Complete!', {
                                body: 'Great work! Time for a break.',
                            })
                        }
                    } else {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
                } else {
                    setSeconds(seconds - 1)
                }
            }, 1000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isRunning, minutes, seconds, isComplete, blocksToday])

    const handlePlayPause = () => {
        if (!isRunning && 'Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission()
        }
        setIsRunning(!isRunning)
    }

    const handleStop = () => {
        setIsRunning(false)
        setMinutes(defaultDuration)
        setSeconds(0)
        setIsComplete(false)
    }

    const handleAddFive = () => {
        setMinutes(minutes + 5)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 p-4 md:p-8">
            <div className="max-w-4xl mx-auto animate-fade-in">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>

                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                        ⏱️ Pomodoro Timer
                    </h1>
                    <p className="text-stone-600">
                        Today's completed blocks: <span className="font-bold text-lime-600">{blocksToday}</span>
                    </p>
                </div>

                {/* Task Input */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <label className="block mb-2 text-sm font-medium text-stone-700">
                        Current Task:
                    </label>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="What are you working on?"
                        className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-lg"
                        disabled={isRunning}
                    />
                </div>

                {/* Timer Display */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
                    {/* Progress Circle */}
                    <div className="relative w-64 h-64 mx-auto mb-8">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="128"
                                cy="128"
                                r="120"
                                stroke="#E7E5E4"
                                strokeWidth="12"
                                fill="none"
                            />
                            <circle
                                cx="128"
                                cy="128"
                                r="120"
                                stroke={isComplete ? '#65A30D' : '#1C1917'}
                                strokeWidth="12"
                                fill="none"
                                strokeDasharray={2 * Math.PI * 120}
                                strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                            />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-stone-900 font-mono">
                                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                                </div>
                                <div className="text-sm text-stone-500 mt-2">
                                    {isComplete ? '✅ Complete!' : isRunning ? 'Focus time' : 'Ready to start'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handlePlayPause}
                            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg flex items-center gap-2 ${isComplete
                                    ? 'bg-stone-300 text-stone-600 cursor-not-allowed'
                                    : 'bg-stone-900 text-white hover:bg-stone-800'
                                }`}
                            disabled={isComplete}
                        >
                            {isRunning ? (
                                <>
                                    <Pause className="w-5 h-5" />
                                    Pause
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5" />
                                    {minutes === defaultDuration && seconds === 0 ? 'Start' : 'Resume'}
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleStop}
                            className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all shadow-lg flex items-center gap-2"
                        >
                            <Square className="w-5 h-5" />
                            Stop
                        </button>

                        <button
                            onClick={handleAddFive}
                            className="px-6 py-4 bg-amber-600 text-white rounded-xl font-semibold text-lg hover:bg-amber-700 transition-all shadow-lg flex items-center gap-2"
                            disabled={isComplete}
                        >
                            <Plus className="w-5 h-5" />
                            +5 Min
                        </button>
                    </div>
                </div>

                {/* Post-Timer Checklist */}
                {isComplete && (
                    <div className="bg-lime-50 border-2 border-lime-300 rounded-2xl p-8 animate-fade-in">
                        <h2 className="text-2xl font-bold text-lime-900 mb-4">
                            🎉 Excellent Work! When Timer Ends:
                        </h2>
                        <ul className="space-y-3 text-lime-800 text-lg mb-6">
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">✅</span> Stand up immediately
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">✅</span> Walk at least 10 steps away from desk
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">✅</span> Drink water
                            </li>
                        </ul>

                        <div className="grid md:grid-cols-2 gap-4">
                            <button
                                onClick={handleStop}
                                className="px-6 py-3 bg-lime-600 text-white rounded-lg font-semibold hover:bg-lime-700 transition-colors"
                            >
                                Start Next Block
                            </button>
                            <button
                                onClick={() => navigate('/progress')}
                                className="px-6 py-3 bg-white border-2 border-lime-600 text-lime-700 rounded-lg font-semibold hover:bg-lime-50 transition-colors"
                            >
                                View Progress
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
