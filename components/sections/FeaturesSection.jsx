export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: '地域の伝統',
      description: '何百年も受け継がれた醸造技術を大切にしています',
      icon: '🏯',
    },
    {
      id: 2,
      title: 'こだわりの素材',
      description: '地元産の高品質な米と水を使用した最高級品',
      icon: '🌾',
    },
    {
      id: 3,
      title: '独自の製造技術',
      description: '職人技と現代技術が融合した製造方法',
      icon: '⚗️',
    },
    {
      id: 4,
      title: '受賞歴',
      description: '国内外の多くの賞を受賞した品質',
      icon: '🏆',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary-green/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-orange">
          当社の特徴
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-primary-green rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-accent-orange/30"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-accent-orange mb-2">
                {feature.title}
              </h3>
              <p className="text-text-light/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
