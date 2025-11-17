import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import NavigationCards from '@/components/sections/NavigationCards'
import ProductsSection from '@/components/sections/ProductsSection'

export const metadata = {
  title: 'mysite - 日本酒醸造企業',
  description: '伝統と革新が融合した日本酒をお届けします。',
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <NavigationCards />
      <ProductsSection />
    </div>
  )
}
