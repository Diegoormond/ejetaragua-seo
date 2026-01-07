'use client'

import { useState, useRef, useEffect } from 'react'

export default function WaterEjectTool() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [useCount, setUseCount] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const FREQUENCY = 165 // Hz - ideal frequency for water ejection
  const DURATION = 30000 // 30 seconds

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      stopSound()
    }
  }, [])

  const startSound = () => {
    try {
      // Create audio context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()

      // Create oscillator
      oscillatorRef.current = audioContextRef.current.createOscillator()
      oscillatorRef.current.type = 'sine'
      oscillatorRef.current.frequency.value = FREQUENCY

      // Create gain node for volume control
      gainNodeRef.current = audioContextRef.current.createGain()
      gainNodeRef.current.gain.value = 1

      // Connect nodes
      oscillatorRef.current.connect(gainNodeRef.current)
      gainNodeRef.current.connect(audioContextRef.current.destination)

      // Start oscillator
      oscillatorRef.current.start()
      setIsPlaying(true)
      setUseCount(prev => prev + 1)

      // Progress bar
      const startTime = Date.now()
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime
        const percentage = Math.min((elapsed / DURATION) * 100, 100)
        setProgress(percentage)

        if (elapsed >= DURATION) {
          stopSound()
        }
      }, 100)

    } catch (error) {
      console.error('Error starting sound:', error)
      alert('Erro ao iniciar o som. Verifique as permissões do navegador.')
    }
  }

  const stopSound = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop()
      } catch (e) {
        // Already stopped
      }
      oscillatorRef.current = null
    }

    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    setIsPlaying(false)
    setProgress(0)
  }

  const toggleSound = () => {
    if (isPlaying) {
      stopSound()
    } else {
      startSound()
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        {/* Visual Water Drop Animation */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <div className={`text-6xl md:text-8xl transition-all duration-500 ${isPlaying ? 'animate-bounce' : ''}`}>
              💧
            </div>
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32 border-4 border-primary rounded-full animate-ping opacity-30" />
              </div>
            )}
          </div>
        </div>

        {/* Frequency Display */}
        <div className="text-center mb-6">
          <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-sm text-gray-600">Frequência: </span>
            <span className="text-xl font-bold text-primary">{FREQUENCY} Hz</span>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={toggleSound}
          disabled={isPlaying && progress > 0}
          className={`
            w-full py-6 px-8 rounded-xl font-bold text-xl
            transition-all duration-300 transform
            ${isPlaying
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white hover:scale-105'
            }
            shadow-lg hover:shadow-xl
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-4 focus:ring-primary/50
          `}
        >
          {isPlaying ? '⏹ Parar Som' : '▶ Ejetar Água Agora'}
        </button>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progresso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Tocando por {Math.round((DURATION - (progress * DURATION / 100)) / 1000)}s
            </p>
          </div>
        )}

        {/* Use Counter */}
        {useCount > 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Usos nesta sessão: <span className="font-bold text-primary">{useCount}</span>
            </p>
            {useCount >= 3 && (
              <p className="text-xs text-gray-500 mt-1">
                ✓ Aguarde alguns minutos antes de repetir novamente
              </p>
            )}
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-3">💡 Dicas Importantes:</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Volume no <strong>máximo</strong> para melhor efeito</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Alto-falante <strong>voltado para baixo</strong></span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Repita <strong>3-5 vezes</strong> com pausas de 10s</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Funciona em <strong>iPhone e Android</strong></span>
            </li>
          </ul>
        </div>

        {/* Browser Compatibility Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Compatível com Chrome, Safari, Firefox e Edge
          </p>
        </div>
      </div>

      {/* Success Tips After Use */}
      {useCount > 0 && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center">
            <span className="mr-2">✓</span>
            Próximos Passos
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li>• Verifique se saiu água do alto-falante</li>
            <li>• Se ainda ouvir som abafado, repita mais 2-3 vezes</li>
            <li>• Deixe o celular em posição vertical por 1-2 horas</li>
            <li>• Não carregue por 24 horas (ou até secar completamente)</li>
            <li>• Teste o som com música/vídeo depois</li>
          </ul>
          <p className="mt-4 text-xs text-green-700">
            Se o problema persistir, veja nosso <a href="/guias/celular-molhado" className="underline font-semibold">guia completo</a>.
          </p>
        </div>
      )}
    </div>
  )
}
