// app/virtual-lab/panel-surya/page.tsx
'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, RotateCcw, Play, Square, Info } from 'lucide-react'

interface Component {
  id: string
  name: string
  description: string
  image: string
  position?: { x: number; y: number }
  rotated?: boolean
}

interface SimulationData {
  power: number
  efficiency: number
  voltage: number
  current: number
  status: string
  chartData: number[]
}

export default function PanelSuryaSimulation() {
  const [stage, setStage] = useState<'assembly' | 'simulation'>('assembly')
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null)
  const [assembledComponents, setAssembledComponents] = useState<Component[]>([])
  const [simulationRunning, setSimulationRunning] = useState(false)
  const [simulationData, setSimulationData] = useState<SimulationData>({
    power: 0,
    efficiency: 0,
    voltage: 0,
    current: 0,
    status: 'Menunggu simulasi...',
    chartData: []
  })
  
  const assemblyAreaRef = useRef<HTMLDivElement>(null)

  const components: Component[] = [
    { id: 'frame', name: 'Frame Aluminium', description: 'Kerangka utama panel surya', image: '🖼️' },
    { id: 'cells', name: 'Sel Surya Monocrystalline', description: '72 sel photovoltaic', image: '🔆' },
    { id: 'glass', name: 'Glass Cover Tempered', description: 'Pelindung kaca anti-refleksi', image: '🔍' },
    { id: 'junction', name: 'Junction Box', description: 'Dioda bypass dan terminal', image: '📦' },
    { id: 'cables', name: 'Kabel MC4', description: 'Kabel tahan cuaca 4mm²', image: '🔌' }
  ]

  const [variables, setVariables] = useState([
    { name: 'Intensitas Cahaya Matahari', min: 0, max: 100, value: 70, unit: '%' },
    { name: 'Suhu Lingkungan', min: 10, max: 50, value: 25, unit: '°C' },
    { name: 'Sudut Kemiringan Panel', min: 0, max: 90, value: 30, unit: '°' },
    { name: 'Kondisi Permukaan', min: 0, max: 100, value: 95, unit: '% kebersihan' }
  ])

  const handleDragStart = (e: React.DragEvent, componentId: string) => {
    setDraggedComponent(componentId)
    e.dataTransfer.setData('text/plain', componentId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!draggedComponent) return

    const component = components.find(comp => comp.id === draggedComponent)
    if (component && !assembledComponents.find(comp => comp.id === draggedComponent)) {
      const rect = assemblyAreaRef.current?.getBoundingClientRect()
      if (rect) {
        const newComponent = {
          ...component,
          position: {
            x: e.clientX - rect.left - 40,
            y: e.clientY - rect.top - 40
          }
        }
        setAssembledComponents(prev => [...prev, newComponent])
      }
    }
    setDraggedComponent(null)
  }

  const handleRotateComponent = (componentId: string) => {
    setAssembledComponents(prev =>
      prev.map(comp =>
        comp.id === componentId ? { ...comp, rotated: !comp.rotated } : comp
      )
    )
  }

  const handleVariableChange = (index: number, value: number) => {
    const newVariables = [...variables]
    newVariables[index].value = value
    setVariables(newVariables)
  }

  const runSimulation = () => {
    if (assembledComponents.length !== components.length) {
      alert('Harap lengkapi perakitan semua komponen terlebih dahulu!')
      return
    }

    setSimulationRunning(true)
    
    // Simulasi perhitungan panel surya
    const lightIntensity = variables[0].value
    const temperature = variables[1].value
    const angle = variables[2].value
    const cleanliness = variables[3].value

    const optimalAngleFactor = 1 - Math.abs(angle - 30) / 90 * 0.3
    const temperatureFactor = 1 - (temperature - 25) * 0.004
    const cleanlinessFactor = cleanliness / 100

    const basePower = 550 // Watt peak
    const power = Math.round(basePower * (lightIntensity / 100) * optimalAngleFactor * temperatureFactor * cleanlinessFactor)
    const voltage = Math.round(36 * (lightIntensity / 100) * temperatureFactor)
    const current = Math.round((power / voltage) * 100) / 100
    const efficiency = Math.round((power / basePower) * 100 * 0.85)

    // Generate chart data
    const chartData = Array.from({ length: 12 }, (_, i) => 
      Math.max(0, power * (0.6 + Math.random() * 0.8))
    )

    setSimulationData({
      power,
      efficiency,
      voltage,
      current,
      status: power > 50 ? '✓ Operasional Optimal' : '⚠️ Output Rendah',
      chartData
    })
  }

  const resetAssembly = () => {
    setAssembledComponents([])
  }

  const isAssemblyComplete = assembledComponents.length === components.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/virtual-lab">
              <Button variant="outline" size="sm" className="mb-4">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Kembali ke Virtual Lab
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Simulasi Panel Surya</h1>
            <p className="text-gray-600 mt-2">Perakitan dan simulasi sistem photovoltaic</p>
          </div>
        </div>

        {/* Stage Indicator */}
        <div className="bg-white border border-orange-200 rounded-xl p-4 mb-8 shadow-sm">
          <div className="flex gap-4">
            <button
              onClick={() => setStage('assembly')}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                stage === 'assembly'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ⚙️ Tahap Perakitan
            </button>
            <button
              onClick={() => isAssemblyComplete && setStage('simulation')}
              disabled={!isAssemblyComplete}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                stage === 'simulation'
                  ? 'bg-green-500 text-white shadow-md'
                  : isAssemblyComplete
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              ▶️ Tahap Simulasi
            </button>
          </div>
        </div>

        {/* Assembly Stage */}
        {stage === 'assembly' && (
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Component List */}
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Komponen Panel Surya</h2>
                <Button variant="outline" size="sm" onClick={resetAssembly}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
              <div className="space-y-3">
                {components.map((component) => (
                  <div
                    key={component.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, component.id)}
                    className={`p-4 border-2 border-dashed rounded-lg transition-all cursor-grab active:cursor-grabbing ${
                      assembledComponents.find(c => c.id === component.id)
                        ? 'bg-green-50 border-green-300'
                        : 'bg-orange-50 border-orange-300 hover:bg-orange-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{component.image}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{component.name}</p>
                        <p className="text-xs text-gray-600">{component.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Tip:</strong> Drag komponen ke area perakitan. Klik komponen yang sudah terpasang untuk memutar.
                </p>
              </div>
            </div>

            {/* Assembly Area */}
            <div className="lg:col-span-2 bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Area Perakitan Panel Surya</h2>
              
              <div
                ref={assemblyAreaRef}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="relative h-96 border-3 border-dashed border-orange-300 rounded-xl bg-orange-50 mb-6 overflow-hidden"
              >
                {/* Base Image */}
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                  ☀️
                </div>

                {/* Assembled Components */}
                {assembledComponents.map((component) => (
                  <div
                    key={component.id}
                    onClick={() => handleRotateComponent(component.id)}
                    className={`absolute w-20 h-20 flex items-center justify-center text-3xl bg-white border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      component.rotated ? 'rotate-45' : ''
                    }`}
                    style={{
                      left: component.position?.x || 0,
                      top: component.position?.y || 0,
                      borderColor: component.rotated ? '#10B981' : '#F97316'
                    }}
                  >
                    {component.image}
                  </div>
                ))}

                {/* Drop Zone Hint */}
                {assembledComponents.length === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-gray-500 text-lg mb-4">Drag komponen panel surya ke sini</p>
                    <div className="text-4xl animate-bounce">⬇️</div>
                  </div>
                )}
              </div>

              {/* Progress */}
              <div className="bg-orange-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-orange-800">Progress Perakitan</span>
                  <span className="text-sm font-bold text-orange-600">
                    {assembledComponents.length} / {components.length}
                  </span>
                </div>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(assembledComponents.length / components.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              {isAssemblyComplete && (
                <Button
                  onClick={() => setStage('simulation')}
                  className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 text-lg"
                >
                  ✅ Perakitan Selesai - Lanjut ke Simulasi
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Simulation Stage */}
        {stage === 'simulation' && (
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Controls */}
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Kontrol Simulasi Panel Surya</h2>
              
              <div className="space-y-6">
                {variables.map((variable, index) => (
                  <div key={index} className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-semibold text-orange-700">
                        {variable.name}
                      </label>
                      <span className="text-lg font-bold text-orange-600">
                        {variable.value} {variable.unit}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={variable.min}
                      max={variable.max}
                      value={variable.value}
                      onChange={(e) => handleVariableChange(index, parseInt(e.target.value))}
                      className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex justify-between text-xs text-orange-600 mt-1">
                      <span>{variable.min} {variable.unit}</span>
                      <span>{variable.max} {variable.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={runSimulation}
                  disabled={simulationRunning}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {simulationRunning ? 'Menjalankan...' : 'Jalankan Simulasi'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSimulationRunning(false)}
                  className="py-3 border-orange-300"
                >
                  <Square className="w-4 h-4 mr-2" />
                  Stop
                </Button>
              </div>

              {/* Panel Surya Tips */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  <p className="text-sm font-semibold text-blue-800">Tips Optimasi Panel Surya:</p>
                </div>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Sudut optimal: 30° untuk daerah tropis</li>
                  <li>• Bersihkan panel secara berkala untuk efisiensi maksimal</li>
                  <li>• Hindari shading dari pohon atau bangunan</li>
                  <li>• Suhu ideal: 25°C (efisiensi turun 0.4% per °C di atas 25°C)</li>
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Hasil Simulasi Panel Surya</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-xl border border-orange-200">
                  <p className="text-sm text-orange-700 mb-1">Output Daya</p>
                  <p className="text-3xl font-bold text-orange-600">{simulationData.power} W</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl border border-green-200">
                  <p className="text-sm text-green-700 mb-1">Efisiensi</p>
                  <p className="text-3xl font-bold text-green-600">{simulationData.efficiency}%</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-700 mb-1">Tegangan</p>
                  <p className="text-2xl font-bold text-blue-600">{simulationData.voltage} V</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-xl border border-purple-200">
                  <p className="text-sm text-purple-700 mb-1">Arus</p>
                  <p className="text-2xl font-bold text-purple-600">{simulationData.current} A</p>
                </div>
                <div className="col-span-2 bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 mb-1">Status Sistem</p>
                  <p className={`text-lg font-semibold ${
                    simulationData.status.includes('✓') ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {simulationData.status}
                  </p>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Grafik Output Harian (Watt)</p>
                <div className="flex items-end justify-between h-32 bg-orange-50 rounded-xl p-4 border border-orange-200">
                  {simulationData.chartData.length > 0 ? (
                    simulationData.chartData.map((value, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 mx-1">
                        <div
                          className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t transition-all duration-500"
                          style={{ 
                            height: `${Math.max(10, (value / Math.max(...simulationData.chartData)) * 90)}%`,
                            minHeight: '10px'
                          }}
                        />
                        <span className="text-xs text-orange-600 mt-1">{index + 1}</span>
                      </div>
                    ))
                  ) : (
                    <div className="w-full text-center text-orange-500">
                      Jalankan simulasi untuk melihat data grafik
                    </div>
                  )}
                </div>
                <div className="flex justify-between text-xs text-orange-600 mt-2">
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}