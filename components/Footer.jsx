import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sake-dark text-sake-cream mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 企業情報 */}
          <div>
            <h3 className="font-bold text-lg mb-4">mysite</h3>
            <p className="text-sm">
              日本酒製造を行う街の醸造所。<br />
              伝統と革新が融合した日本酒をお届けします。
            </p>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="font-bold text-lg mb-4">ナビゲーション</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-white transition">
                  思いを語る
                </Link>
              </li>
              <li>
                <Link href="/access" className="hover:text-white transition">
                  アクセス
                </Link>
              </li>
            </ul>
          </div>

          {/* SNSリンク */}
          <div>
            <h3 className="font-bold text-lg mb-4">フォローする</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* 下部情報 */}
        <div className="border-t border-sake-brown pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 mysite. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-white transition">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
