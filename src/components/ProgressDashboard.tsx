import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, TrendingUp, Flame } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProgressData {
    date: string
    blocks: number
}

export default function ProgressDashboard() {
    const navigate = useNavigate()
    const [todayBlocks, setTodayBlocks] = useState(0)
    const [streak] = useState(1)

    useEffect(() => {
        const today = new Date().toDateString()
        const stored = localStorage.getItem('focusProtocol')
        if (stored) {
            const data: ProgressData = JSON.parse(stored)
            if (data.date === today) {
                setTodayBlocks(data.blocks || 0)
            }
        }
    }, [])

    const videoBlocks = Math.floor(todayBlocks / 2)
    const aiBlocks = todayBlocks - videoBlocks
    const dailyGoal = 8
    const totalMinutes = todayBlocks * 25

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 p-4 md:p-8">
            <div className="max-w-5xl mx-auto animate-fade-in">
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
                        📊 Progress Dashboard
                    </h1>
                    <p className="text-stone-600">
                        Track your focus blocks and build momentum
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Today's Blocks */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <Calendar className="w-8 h-8 text-lime-600" />
                            <span className="text-3xl font-bold text-stone-900">{todayBlocks}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-1">Today's Blocks</h3>
                        <p className="text-stone-600 text-sm">
                            {totalMinutes} minutes of focused work
                        </p>
                    </div>

                    {/* Current Streak */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <Flame className="w-8 h-8 text-orange-500" />
                            <span className="text-3xl font-bold text-stone-900">{streak}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-1">Day Streak</h3>
                        <p className="text-stone-600 text-sm">
                            Keep it going! 🔥
                        </p>
                    </div>

                    {/* Daily Goal */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                            <TrendingUp className="w-8 h-8 text-cyan-600" />
                            <span className="text-3xl font-bold text-stone-900">
                                {Math.round((todayBlocks / dailyGoal) * 100)}%
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-1">Daily Goal</h3>
                        <p className="text-stone-600 text-sm">
                            {todayBlocks} / {dailyGoal} blocks
                        </p>
                    </div>
                </div>

                {/* Today's Completed Blocks Visualization */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-stone-900 mb-6">
                        📹 Today's Completed Blocks
                    </h2>

                    {/* Video Editing */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg text-stone-900">Video Editing Learning</h3>
                            <span className="text-stone-600 font-mono">
                                {videoBlocks} / 4 blocks
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-10 flex-1 rounded ${i < videoBlocks ? 'bg-lime-600' : 'bg-stone-200'
                                        } transition-colors`}
                                    title={i < videoBlocks ? 'Completed' : 'Not yet completed'}
                                />
                            ))}
                        </div>
                    </div>

                    {/* AI Agent Business */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg text-stone-900">AI Agent Business Plan</h3>
                            <span className="text-stone-600 font-mono">
                                {aiBlocks} / 4 blocks
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-10 flex-1 rounded ${i < aiBlocks ? 'bg-cyan-600' : 'bg-stone-200'
                                        } transition-colors`}
                                    title={i < aiBlocks ? 'Completed' : 'Not yet completed'}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-stone-500 text-sm mt-4 italic">
                        Each block = 25 minutes of focused work
                    </p>
                </div>

                {/* Daily Goal Progress */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">
                        🎯 Daily Goal Progress
                    </h2>
                    <div className="mb-3">
                        <div className="flex justify-between text-sm text-stone-600 mb-2">
                            <span>Progress</span>
                            <span>{todayBlocks} / {dailyGoal} blocks ({Math.round((todayBlocks / dailyGoal) * 100)}%)</span>
                        </div>
                        <div className="w-full bg-stone-200 rounded-full h-6">
                            <div
                                className="bg-gradient-to-r from-lime-600 to-lime-500 h-6 rounded-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
                                style={{ width: `${Math.min((todayBlocks / dailyGoal) * 100, 100)}%` }}
                            >
                                {todayBlocks > 0 && `${Math.round((todayBlocks / dailyGoal) * 100)}%`}
                            </div>
                        </div>
                    </div>

                    {todayBlocks >= dailyGoal ? (
                        <div className="bg-lime-50 border-2 border-lime-300 rounded-xl p-4 mt-4">
                            <p className="text-lime-800 font-semibold text-center">
                                🎉 Congratulations! You've hit your daily goal! 🎉
                            </p>
                        </div>
                    ) : (
                        <p className="text-stone-600 italic text-center mt-4">
                            {dailyGoal - todayBlocks} block{dailyGoal - todayBlocks !== 1 ? 's' : ''} to go to reach your daily goal!
                        </p>
                    )}
                </div>

                {/* Motivational Message */}
                <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl shadow-xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        💪 Keep Building Momentum
                    </h2>
                    <p className="text-lg text-stone-200 mb-6">
                        {todayBlocks === 0
                            ? "Start your first block today. The hardest part is beginning!"
                            : todayBlocks < 4
                                ? "You're building momentum! Keep going, you've got this."
                                : todayBlocks < 8
                                    ? "Amazing progress! You're more than halfway to your goal."
                                    : "Outstanding work! You're crushing your goals today! 🔥"
                        }
                    </p>
                    <button
                        onClick={() => navigate('/timer')}
                        className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                    >
                        Start Next Block →
                    </button>
                </div>
            </div>
        </div>
    )
}
