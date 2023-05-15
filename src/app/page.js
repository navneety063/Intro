'use client';
import Introduction from './components/introduction'

export default function Home() {
  const downloadInPdf = () => {
    window.print()
  }

  return (
    <main>
      <Introduction downloadInPdf={downloadInPdf} />
    </main>
  )
}
