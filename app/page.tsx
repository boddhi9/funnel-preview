import Image from 'next/image'
import Funnel from './components/funnel'
import logo from './assets/logo.png'
import JsonUpload from '@/app/components/json-upload'

export default function Home() {
  return (
    <div
      className="
        min-h-screen w-full flex flex-col items-center justify-center
        bg-gradient-to-b from-white to-blue-100 p-8 pb-20 sm:p-20
      "
    >
      <main className="flex flex-col gap-6 items-center text-center w-full max-w-screen-xl">
        <div className="relative flex flex-col items-center mb-6 animate-fadeIn">
          <Image
            src={logo}
            alt="Perspective Logo"
            priority={false}
            width={120}
            height={120}
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <p className="mt-2 text-lg font-semibold text-gray-600 tracking-wider">
            by <span className="text-blue-500">Perspective</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <JsonUpload />
          <Funnel />
        </div>
      </main>
    </div>
  )
}
