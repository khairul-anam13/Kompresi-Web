'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Evaluasi() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              <span className="text-secondary">Evaluasi</span> Pembelajaran
            </h1>
            <p className="text-muted-foreground">Ukur pemahaman Anda tentang energi terbarukan</p>
          </div>
          <Link href="/materi">
            <Button variant="outline" size="sm">← Kembali</Button>
          </Link>
        </div>

        {/* Info Section */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex gap-4 items-start">
            <div className="text-4xl">📋</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-3">Saatnya Mengevaluasi Diri</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Anda telah menyelesaikan pembelajaran materi energi terbarukan. Sekarang saatnya untuk mengevaluasi pemahaman Anda dengan menjawab serangkaian pertanyaan yang telah disiapkan.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Evaluasi berisi 20 pertanyaan pilihan ganda</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Durasi pengerjaan: 30 menit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Nilai minimum kelulusan: 70%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Pastikan Anda Sudah:</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
              <span className="text-muted-foreground">Menyelesaikan semua materi pembelajaran</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
              <span className="text-muted-foreground">Mencoba semua simulasi di Virtual Lab</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
              <span className="text-muted-foreground">Membaca semua referensi yang disarankan</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded accent-primary" />
              <span className="text-muted-foreground">Siap mengerjakan evaluasi dengan serius</span>
            </label>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="bg-card border-2 border-secondary rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">Evaluasi Online</h3>
          <p className="text-muted-foreground mb-6">
            Klik tombol di bawah untuk membuka form evaluasi di Google Forms. Form akan dibuka di tab baru.
          </p>
          <a
            href="https://forms.gle/example-form-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Buka Form Evaluasi →
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            (Link ini adalah contoh. Ganti dengan link Google Form yang sebenarnya)
          </p>
        </div>

        {/* Results Info */}
        <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-3">Setelah Mengerjakan Evaluasi</h3>
          <p className="text-muted-foreground text-sm">
            Hasil evaluasi Anda akan disimpan otomatis di Google Forms. Nilai dan feedback akan dikirim ke email Anda dalam waktu 5 hari kerja.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/materi" className="flex-1">
            <Button variant="outline" className="w-full">
              ← Kembali ke Materi
            </Button>
          </Link>
          <Link href="/menu" className="flex-1">
            <Button variant="outline" className="w-full">
              Kembali ke Menu Utama
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
