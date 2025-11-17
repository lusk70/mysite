'use client'

import { useState } from 'react'

export default function AccessClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    content: '',
    type: 'inquiry',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // フォーム送信処理（実装例）
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        content: '',
        type: 'inquiry',
      })
    }, 3000)
  }

  return (
    <>
      {/* お問い合わせフォーム */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-accent-orange mb-6">お問い合わせ</h2>
        <div className="bg-primary-green border-2 border-accent-orange rounded-lg p-8">
          {submitted && (
            <div className="mb-6 p-4 bg-accent-orange/20 text-accent-orange rounded-lg">
              ✓ お問い合わせいただきありがとうございます。
              確認次第、ご連絡させていただきます。
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-text-light mb-2">
                  氏名 <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-accent-orange/30 rounded-lg focus:outline-none focus:border-accent-orange bg-gray-900 text-text-light"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-light mb-2">
                  メールアドレス <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-accent-orange/30 rounded-lg focus:outline-none focus:border-accent-orange bg-gray-900 text-text-light"
                  placeholder="example@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                電話番号 (任意)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-accent-orange/30 rounded-lg focus:outline-none focus:border-accent-orange bg-gray-900 text-text-light"
                placeholder="025-XXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                ご用件 <span className="text-accent-orange">*</span>
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-accent-orange/30 rounded-lg focus:outline-none focus:border-accent-orange bg-gray-900 text-text-light"
              >
                <option value="inquiry">お問い合わせ</option>
                <option value="visit">見学予約</option>
                <option value="business">事業提携</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-light mb-2">
                お問い合わせ内容 <span className="text-accent-orange">*</span>
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border-2 border-accent-orange/30 rounded-lg focus:outline-none focus:border-accent-orange bg-gray-900 text-text-light resize-none"
                placeholder="お問い合わせ内容をご入力ください"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-orange hover:bg-accent-orange-light text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              送信する
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
