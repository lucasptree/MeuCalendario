import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Calendar, BookOpen, Palette, GraduationCap, Plus, Check, RotateCcw, Heart, Brain, Smile, Download, Upload, FileSpreadsheet, Zap, X, Target, Sun } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import './App.css'

const MOOD_EMOJIS = [
  { emoji: '😊', label: 'Feliz', value: 'happy' },
  { emoji: '😐', label: 'Neutro', value: 'neutral' },
  { emoji: '😔', label: 'Triste', value: 'sad' },
  { emoji: '😰', label: 'Ansioso', value: 'anxious' },
  { emoji: '😴', label: 'Cansado', value: 'tired' },
  { emoji: '🤗', label: 'Motivado', value: 'motivated' },
  { emoji: '😤', label: 'Estressado', value: 'stressed' },
  { emoji: '🥳', label: 'Animado', value: 'excited' }
]

const FIXED_BUTTONS = [
  { id: 'read', label: 'Ler', icon: BookOpen, color: 'bg-blue-500' },
  { id: 'draw', label: 'Desenhar', icon: Palette, color: 'bg-purple-500' },
  { id: 'study', label: 'Estudar', icon: GraduationCap, color: 'bg-green-500' }
]

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function App() {
  const [showMoodPopup, setShowMoodPopup] = useState(false)
  const [showMorningPrompt, setShowMorningPrompt] = useState(false)
  const [dailyMood, setDailyMood] = useState(null)
  const [customButtons, setCustomButtons] = useState([])
  const [newButtonLabel, setNewButtonLabel] = useState('')
  const [completedTasks, setCompletedTasks] = useState({})
  const [weeklyData, setWeeklyData] = useState([])
  const [moodHistory, setMoodHistory] = useState([])
  const [stressLevel, setStressLevel] = useState(5)
  const [dailyReflection, setDailyReflection] = useState('')
  const [dailyGoals, setDailyGoals] = useState({})
  const [morningNotes, setMorningNotes] = useState('')

  // Verificar se precisa mostrar prompts matinais
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const savedMood = localStorage.getItem(`mood-${today}`)
    const savedMorningPrompt = localStorage.getItem(`morning-prompt-${today}`)
    
    if (!savedMorningPrompt) {
      setShowMorningPrompt(true)
    } else if (!savedMood) {
      setShowMoodPopup(true)
    } else {
      setDailyMood(JSON.parse(savedMood))
    }
    
    // Carregar dados salvos
    const savedCustomButtons = localStorage.getItem('custom-buttons')
    const savedCompletedTasks = localStorage.getItem('completed-tasks')
    const savedWeeklyData = localStorage.getItem('weekly-data')
    const savedMoodHistory = localStorage.getItem('mood-history')
    const savedStress = localStorage.getItem('stress-level')
    const savedReflection = localStorage.getItem('daily-reflection')
    const savedDailyGoals = localStorage.getItem('daily-goals')
    const savedMorningNotes = localStorage.getItem('morning-notes')
    
    if (savedCustomButtons) setCustomButtons(JSON.parse(savedCustomButtons))
    if (savedCompletedTasks) setCompletedTasks(JSON.parse(savedCompletedTasks))
    if (savedWeeklyData) setWeeklyData(JSON.parse(savedWeeklyData))
    if (savedMoodHistory) setMoodHistory(JSON.parse(savedMoodHistory))
    if (savedStress) setStressLevel(parseInt(savedStress))
    if (savedReflection) setDailyReflection(savedReflection)
    if (savedDailyGoals) setDailyGoals(JSON.parse(savedDailyGoals))
    if (savedMorningNotes) setMorningNotes(savedMorningNotes)
  }, [])

  // Salvar dados automaticamente
  useEffect(() => {
    localStorage.setItem('custom-buttons', JSON.stringify(customButtons))
  }, [customButtons])

  useEffect(() => {
    localStorage.setItem('completed-tasks', JSON.stringify(completedTasks))
  }, [completedTasks])

  useEffect(() => {
    localStorage.setItem('weekly-data', JSON.stringify(weeklyData))
  }, [weeklyData])

  useEffect(() => {
    localStorage.setItem('mood-history', JSON.stringify(moodHistory))
  }, [moodHistory])

  useEffect(() => {
    localStorage.setItem('stress-level', stressLevel.toString())
  }, [stressLevel])

  useEffect(() => {
    localStorage.setItem('daily-reflection', dailyReflection)
  }, [dailyReflection])

  useEffect(() => {
    localStorage.setItem('daily-goals', JSON.stringify(dailyGoals))
  }, [dailyGoals])

  useEffect(() => {
    localStorage.setItem('morning-notes', morningNotes)
  }, [morningNotes])

  const handleMorningPromptComplete = (goals, notes) => {
    const today = new Date().toISOString().split('T')[0]
    setDailyGoals(goals)
    setMorningNotes(notes)
    localStorage.setItem(`morning-prompt-${today}`, 'completed')
    setShowMorningPrompt(false)
    setShowMoodPopup(true)
  }

  const handleMoodSelection = (mood) => {
    const today = new Date().toISOString().split('T')[0]
    setDailyMood(mood)
    localStorage.setItem(`mood-${today}`, JSON.stringify(mood))
    
    // Adicionar ao histórico de humor
    const newMoodEntry = {
      date: today,
      mood: mood.value,
      emoji: mood.emoji,
      dayOfWeek: new Date().getDay()
    }
    
    const updatedMoodHistory = [...moodHistory.filter(m => m.date !== today), newMoodEntry]
    setMoodHistory(updatedMoodHistory)
    
    setShowMoodPopup(false)
  }

  const addCustomButton = () => {
    if (newButtonLabel.trim()) {
      const newButton = {
        id: Date.now(),
        label: newButtonLabel,
        icon: Zap,
        color: 'bg-orange-500',
        createdAt: new Date().toISOString()
      }
      
      // Manter apenas os 5 botões customizados mais recentes
      const updatedButtons = [newButton, ...customButtons].slice(0, 5)
      setCustomButtons(updatedButtons)
      setNewButtonLabel('')
    }
  }

  const toggleTask = (buttonId) => {
    const today = new Date().toISOString().split('T')[0]
    const taskKey = `${today}-${buttonId}`
    
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }))
    
    // Atualizar dados semanais
    updateWeeklyData(buttonId, !completedTasks[taskKey])
  }

  const updateWeeklyData = (buttonId, completed) => {
    const today = new Date()
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()))
    const weekKey = weekStart.toISOString().split('T')[0]
    
    const existingWeek = weeklyData.find(w => w.weekStart === weekKey)
    
    if (existingWeek) {
      const updatedWeeklyData = weeklyData.map(week => {
        if (week.weekStart === weekKey) {
          return {
            ...week,
            tasks: {
              ...week.tasks,
              [buttonId]: {
                ...week.tasks[buttonId],
                [new Date().getDay()]: completed
              }
            }
          }
        }
        return week
      })
      setWeeklyData(updatedWeeklyData)
    } else {
      const newWeek = {
        weekStart: weekKey,
        tasks: {
          [buttonId]: {
            [new Date().getDay()]: completed
          }
        }
      }
      setWeeklyData([...weeklyData, newWeek])
    }
  }

  const isTaskCompleted = (buttonId) => {
    const today = new Date().toISOString().split('T')[0]
    const taskKey = `${today}-${buttonId}`
    return completedTasks[taskKey] || false
  }

  const getTodayCompletedTasks = () => {
    const today = new Date().toISOString().split('T')[0]
    return Object.keys(completedTasks).filter(key => 
      key.startsWith(today) && completedTasks[key]
    ).length
  }

  const getMoodStats = () => {
    const stats = {}
    DAYS_OF_WEEK.forEach((day, index) => {
      stats[day] = moodHistory.filter(m => m.dayOfWeek === index).length
    })
    return Object.entries(stats).map(([day, count]) => ({ day, count }))
  }

  const getMoodDistribution = () => {
    const distribution = {}
    moodHistory.forEach(entry => {
      distribution[entry.mood] = (distribution[entry.mood] || 0) + 1
    })
    
    return Object.entries(distribution).map(([mood, count]) => {
      const moodData = MOOD_EMOJIS.find(m => m.value === mood)
      return {
        name: moodData?.label || mood,
        value: count,
        emoji: moodData?.emoji || '😐'
      }
    })
  }

  const getCurrentWeekData = () => {
    const today = new Date()
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()))
    const weekKey = weekStart.toISOString().split('T')[0]
    
    return weeklyData.find(w => w.weekStart === weekKey) || { tasks: {} }
  }

  const getWeeklyCompletionData = () => {
    const weekData = {}
    const today = new Date()
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const dayName = DAYS_OF_WEEK[date.getDay()]
      
      const dayTasks = Object.keys(completedTasks).filter(key => 
        key.startsWith(dateStr) && completedTasks[key]
      ).length
      
      weekData[dayName] = dayTasks
    }
    
    return Object.entries(weekData).map(([day, tasks]) => ({ day, tasks }))
  }

  const allButtons = [...FIXED_BUTTONS, ...customButtons]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Organizador de Rotina Dinâmica</h1>
          <p className="text-gray-600">Sistema inteligente para planejamento e acompanhamento de atividades</p>
          {dailyMood && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-2xl">{dailyMood.emoji}</span>
              <span className="text-gray-600">Hoje você está: {dailyMood.label}</span>
            </div>
          )}
          {getTodayCompletedTasks() > 0 && (
            <div className="mt-2 text-green-600 font-medium">
              ✅ {getTodayCompletedTasks()} atividade(s) completada(s) hoje
            </div>
          )}
        </header>

        {/* Pop-up Matinal */}
        <Dialog open={showMorningPrompt} onOpenChange={setShowMorningPrompt}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-center flex items-center justify-center gap-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                Bom dia! Como será seu dia hoje?
              </DialogTitle>
              <DialogDescription className="text-center">
                Vamos planejar suas atividades e definir suas prioridades
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Prioridades para hoje:
                </label>
                <div className="space-y-2">
                  {FIXED_BUTTONS.map(button => (
                    <div key={button.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={button.id}
                        onChange={(e) => setDailyGoals(prev => ({
                          ...prev,
                          [button.id]: e.target.checked
                        }))}
                      />
                      <label htmlFor={button.id} className="text-sm">{button.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Notas do dia (opcional):
                </label>
                <textarea
                  className="w-full h-20 p-2 border rounded-lg resize-none text-sm"
                  placeholder="Como você está se sentindo? Alguma prioridade especial hoje?"
                  value={morningNotes}
                  onChange={(e) => setMorningNotes(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={() => handleMorningPromptComplete(dailyGoals, morningNotes)}
                className="w-full"
              >
                Começar o dia!
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Pop-up de Humor */}
        <Dialog open={showMoodPopup} onOpenChange={setShowMoodPopup}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Como você está se sentindo hoje?</DialogTitle>
              <DialogDescription className="text-center">
                Selecione um emoji que represente seu humor atual
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-4 gap-4 py-4">
              {MOOD_EMOJIS.map((mood) => (
                <Button
                  key={mood.value}
                  variant="outline"
                  className="h-16 flex flex-col gap-1 hover:bg-blue-50"
                  onClick={() => handleMoodSelection(mood)}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <Tabs defaultValue="atividades" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="atividades">Atividades</TabsTrigger>
            <TabsTrigger value="calendario">Calendário</TabsTrigger>
            <TabsTrigger value="progresso">Progresso</TabsTrigger>
            <TabsTrigger value="humor">Análise Humor</TabsTrigger>
            <TabsTrigger value="bem-estar">Bem-estar</TabsTrigger>
          </TabsList>

          <TabsContent value="atividades" className="space-y-6">
            {/* Prioridades do Dia */}
            {Object.keys(dailyGoals).length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Prioridades de Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {FIXED_BUTTONS.map(button => {
                      const isPriority = dailyGoals[button.id]
                      const isCompleted = isTaskCompleted(button.id)
                      
                      return isPriority ? (
                        <div key={button.id} className={`p-3 rounded-lg border ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{button.label}</span>
                            {isCompleted ? (
                              <div className="text-green-600 flex items-center gap-1">
                                <Check className="h-4 w-4" />
                                Concluído
                              </div>
                            ) : (
                              <div className="text-blue-600 text-sm">
                                Prioridade
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Atividades do Dia
                </CardTitle>
                <CardDescription>
                  Clique para marcar como concluída
                </C
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)
