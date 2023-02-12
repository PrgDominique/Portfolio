import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  )
}
