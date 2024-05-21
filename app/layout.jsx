import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import  { Metadata } from 'next'
import TrackingCode from './lib/ga';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Find My BMI : Calculate BMI',
  description: 'FindMyBMI is a free tool that helps you calculate your body mass index (BMI) and provides insights into your BMI value. BMI is a measure of body fat based on height and weight that can be used to assess risk of obesity-related diseases. Use our BMI calculator to learn more about your BMI and what it means for your health',
  keywords:'bmi,bmi calculator,body mass index,find bmi,calculate BMI,BMI meaning,BMI health risks,health,weight loss,height weight,health insurance,mental health,what is health,weight management,health and fitness,BMI insights,calculator bmi,bmi chart,online BMI calculator,free BMI calculator,find my bmi,calculator,japan',
  creator:'FindMyBMI'
}
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-6621105109470694"/>
      <TrackingCode />
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
 