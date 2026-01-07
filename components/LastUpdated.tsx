interface LastUpdatedProps {
  date: string
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="text-sm text-gray-500 mb-6">
      Atualizado em {date}
    </div>
  )
}
