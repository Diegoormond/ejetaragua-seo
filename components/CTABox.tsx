interface CTABoxProps {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
}

export default function CTABox({
  title = 'Precisa Ejetar Água Agora?',
  description = 'Use nossa ferramenta gratuita para remover água do alto-falante do seu celular em segundos.',
  buttonText = 'Usar Ferramenta Gratuita',
  buttonUrl = 'https://www.ejetaragua.com/?utm_source=guias&utm_medium=seo&utm_campaign=cta',
}: CTABoxProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 my-8 text-center">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-blue-50 mb-6 max-w-2xl mx-auto">{description}</p>
      <a
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg"
      >
        {buttonText}
      </a>
    </div>
  )
}
