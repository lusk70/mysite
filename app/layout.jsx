import { VibeKanbanWebCompanion } from 'vibe-kanban-web-companion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'mysite - 日本酒醸造企業',
  description: '日本酒製造を行う街の醸造所の企業サイト',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <VibeKanbanWebCompanion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
