'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowLeft, Award, Users, Mail, Phone, GraduationCap, Target, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

export default function Profil() {
  const plugin = useRef(
    AutoScroll({ 
      speed: 1, 
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })
  )

  const teamMembers = [
    {
      name: 'Dr. Danar Susilo Wijayanto S.T., M.Eng.',
      nim: 'Dosen Pembimbing',
      role: 'Dosen Pembimbing',
      nip: 'NIP. 197001011999031001',
      image: '/team/dosen-Pembimbing.png',
      special: true
    },
    {
      name: 'Fai\'s Nor Risky',
      nim: 'K2523038',
      role: 'Ketua Tim',
      image: '/team/ketua-tim.png',
      special: true
    },
    {
      name: 'Dimas Danu Utama',
      nim: 'K2523032',
      role: 'Anggota',
      image: '/team/dimas-danu.png'
    },
    {
      name: 'Ervin Dwi Prasetyo',
      nim: 'K2523036',
      role: 'Anggota',
      image: '/team/ervin-dwi.png'
    },
    {
      name: 'Hafiz Arayan Majid',
      nim: 'K2523046',
      role: 'Anggota',
      image: '/team/hafiz-arayan.png'
    },
    {
      name: 'Johan Prasetyo Ribowo',
      nim: 'K2523056',
      role: 'Anggota',
      image: '/team/johan-prasetyo.png'
    },
    {
      name: 'Khoirunisa Izzatul Fatimah',
      nim: 'K2523057',
      role: 'Anggota',
      image: '/team/khoirunisa-izzatul.png'
    },
    {
      name: 'Mahendra',
      nim: 'K2523059',
      role: 'Anggota',
      image: '/team/mahendra.png'
    },
    {
      name: 'Muhammad Abdul Ghofar',
      nim: 'K2523064',
      role: 'Anggota',
      image: '/team/muhammad-abdul.png'
    },
    {
      name: 'Wahyu Septiyanto',
      nim: 'K2523084',
      role: 'Anggota',
      image: '/team/wahyu-septiyanto.png'
    }
  ]

  const dosenPembimbing = teamMembers.filter(member => member.role === 'Dosen Pembimbing')
  const ketuaTim = teamMembers.filter(member => member.role === 'Ketua Tim')
  const anggotaTim = teamMembers.filter(member => member.role === 'Anggota')

  return (
    <div className="min-h-screen relative font-sans">
      {/* Background Image with Opacity */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      />
      
      {/* Solid Color Overlay */}
      <div className="fixed inset-0 z-0 bg-sky-50" />

      {/* Decorative Elements - Renewable Energy Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20" />
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-green-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Navigation */}
        <nav className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <Link href="/menu" className="group">
            <Button className="bg-white border-4 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-bold text-lg px-6 py-6 rounded-full shadow-lg transition-all">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali
            </Button>
          </Link>
          <div className="hidden md:flex items-center gap-3 text-sm font-bold text-green-700 bg-white px-5 py-3 rounded-full border-4 border-green-500 shadow-lg">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            Hibah Pembelajaran UNS 1510
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <h1 className="text-6xl md:text-7xl font-extrabold text-green-600 tracking-tight mb-4 drop-shadow-lg">
            👥 Tentang <span className="text-yellow-500">Kami</span>
          </h1>
          <p className="text-2xl text-slate-700 leading-relaxed font-bold bg-white/80 px-6 py-4 rounded-3xl border-4 border-blue-300 shadow-lg">
            Mengenal lebih dekat tim inovator di balik <span className="text-green-600">Energi Hijau</span> 🌱
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {/* Program Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-blue-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Award className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-500 rounded-2xl text-white border-4 border-blue-600 shadow-lg">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">🎓 Hibah Pembelajaran</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4 font-semibold">
              Program pendanaan kompetitif dari Universitas Sebelas Maret yang memfasilitasi mahasiswa untuk meningkatkan kompetensi dan melakukan pengabdian masyarakat melalui proyek inovatif.
            </p>
            <div className="flex items-center gap-3 text-base font-bold text-blue-700 bg-blue-50 px-4 py-3 rounded-2xl border-2 border-blue-200">
              <Users className="w-5 h-5" />
              9 Mahasiswa PT. Mesin FKIP UNS
            </div>
          </div>

          {/* Mission Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-500 rounded-2xl text-white border-4 border-green-600 shadow-lg">
                <Target className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800">🎯 Misi Kami</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed font-semibold">
              Mengembangkan media pembelajaran interaktif yang memudahkan pemahaman konsep energi terbarukan, khususnya teknologi kompresi, bagi mahasiswa dan masyarakat umum.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-16">
          {/* Key People */}
          <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            {/* Dosen Pembimbing */}
            {dosenPembimbing.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl border-4 border-blue-400 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:scale-[1.02] transition-transform duration-300">
                <div className="w-32 sm:w-40 aspect-3/4 shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-2xl rotate-3 border-4 border-blue-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 py-2">
                  <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-3 border-2 border-blue-600 shadow-md">
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-slate-600 font-mono text-base mb-4 font-semibold">{member.nip}</p>
                  <div className="h-2 w-16 bg-blue-400 rounded-full mx-auto sm:mx-0" />
                </div>
              </div>
            ))}

            {/* Ketua Tim */}
            {ketuaTim.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl border-4 border-red-400 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:scale-[1.02] transition-transform duration-300">
                <div className="w-32 sm:w-40 aspect-3/4 shrink-0 relative">
                  <div className="absolute inset-0 bg-red-200 rounded-2xl -rotate-3 border-4 border-red-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 py-2">
                  <div className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-3 border-2 border-red-600 shadow-md">
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-slate-600 font-mono text-base mb-4 font-semibold">{member.nim}</p>
                  <div className="h-2 w-16 bg-red-400 rounded-full mx-auto sm:mx-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Team Members Carousel */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl font-bold text-green-600">👨‍👩‍👧‍👦 Anggota Tim</h2>
              <div className="h-1 bg-green-300 flex-1 rounded-full" />
            </div>

            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                loop: true,
                watchDrag: false,
              }}
            >
              <CarouselContent>
                {anggotaTim.map((member, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4 pl-4">
                    <div className="group bg-white rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-purple-300 text-center h-full">
                      <div className="w-full aspect-3/4 mx-auto mb-4 relative overflow-hidden rounded-2xl border-4 border-white shadow-md">
                        <div className="absolute inset-0 bg-purple-100 group-hover:scale-105 transition-transform duration-300" />
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 min-h-14 group-hover:text-purple-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-lg text-slate-600 font-mono font-semibold">{member.nim}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Footer / Contact */}
        <div className="mt-20 border-t-4 border-green-300 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border-4 border-green-700 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-3">📧 Hubungi Kami</h3>
                <p className="text-green-100 mb-6 max-w-md text-lg font-semibold">
                  Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi tim kami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:hibahkompresiuns@gmail.com" className="flex items-center gap-3 px-5 py-3 bg-white text-green-700 rounded-2xl hover:bg-green-50 transition-colors font-bold border-2 border-green-700 shadow-md">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <span>hibahkompresiuns@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white text-green-700 rounded-2xl font-bold border-2 border-green-700 shadow-md">
                    <Phone className="w-6 h-6 text-green-500" />
                    <span>0811-1111-1111</span>
                  </div>
                </div>
              </div>

              <Link href="/menu">
                <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold px-10 py-7 text-xl rounded-full border-4 border-yellow-500 shadow-xl">
                  🏠 Kembali ke Menu
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-slate-600 text-base font-semibold bg-white/60 py-4 rounded-2xl">
            &copy; {new Date().getFullYear()} Energi Hijau Team 🌱 Universitas Sebelas Maret
          </div>
        </div>
      </div>
    </div>
  )
}