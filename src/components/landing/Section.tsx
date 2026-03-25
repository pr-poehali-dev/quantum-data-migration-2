import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import type { SectionProps } from "@/types"

const PHONE = "+79143304950"
const PHONE_DISPLAY = "+7 914 330 4950"

function CallDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 border border-neutral-800 text-white max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Бесплатная диагностика</DialogTitle>
        </DialogHeader>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Позвоните нам — запишем на удобное время. Диагностика кузова бесплатно.
        </p>
        <a href={`tel:${PHONE}`} className="block w-full">
          <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base gap-2 py-6">
            <Icon name="Phone" size={20} />
            {PHONE_DISPLAY}
          </Button>
        </a>
        <p className="text-neutral-500 text-xs text-center">Ежедневно, 10:00–19:00</p>
      </DialogContent>
    </Dialog>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-2">
      {Array.from({ length: rating }).map((_, i) => (
        <Icon key={i} name="Star" size={14} className="text-orange-400 fill-orange-400" />
      ))}
    </div>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, variant, services, works, reviews }: SectionProps) {
  const [callOpen, setCallOpen] = useState(false)

  if (variant === 'hero') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/1441b36a-27a7-4bac-bc63-3f30ddb4cab3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex flex-col">
          <CallDialog open={callOpen} onClose={() => setCallOpen(false)} />
          {subtitle && (
            <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
              {subtitle}
            </motion.div>
          )}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight max-w-4xl text-white"
            initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-2xl mt-6 text-neutral-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-base" onClick={() => setCallOpen(true)}>
              {buttonText}
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:text-white px-8 py-6 text-base bg-transparent">
              Примеры работ
            </Button>
          </motion.div>
          <motion.div
            className="mt-16 flex flex-wrap gap-6"
            initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              { label: 'Гарантия', value: '1 год' },
              { label: 'Диагностика', value: 'Бесплатно' },
              { label: 'Цена в договоре', value: 'Фиксированная' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                <div className="text-sm text-neutral-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'services' && services) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-orange-500/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Icon name={service.icon} size={20} className="text-orange-400" fallback="Wrench" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{service.title}</div>
                  <div className="text-orange-400 text-xs font-medium">{service.price}</div>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  if (variant === 'before-after' && works) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <div className="grid grid-cols-2 h-40">
                <div className="relative overflow-hidden">
                  <img src={work.imageUrl} alt="До" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">До</div>
                </div>
                <div className="relative overflow-hidden">
                  <img src={work.imageAfterUrl ?? work.imageUrl} alt="После" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-orange-500/90 text-white text-xs px-2 py-0.5 rounded">После</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm mb-1">{work.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-3">{work.description}</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={12} className="text-orange-400" />
                    <span className="text-neutral-400 text-xs">{work.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="ShieldCheck" size={12} className="text-orange-400" />
                    <span className="text-neutral-400 text-xs">Гарантия {work.guarantee}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  if (variant === 'prices') {
    const priceList = [
      { service: 'Покраска крыла', price: 'от 4 000 ₽' },
      { service: 'Покраска двери', price: 'от 5 000 ₽' },
      { service: 'Покраска капота / багажника', price: 'от 6 000 ₽' },
      { service: 'Порог (сварка + покраска)', price: 'от 8 000 ₽' },
      { service: 'Замена арки', price: 'от 12 000 ₽' },
      { service: 'Антикоррозийная обработка', price: 'от 3 500 ₽' },
      { service: 'Подготовка к продаже', price: 'от 6 000 ₽' },
      { service: 'Полная покраска автомобиля', price: 'от 60 000 ₽' },
    ]
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-neutral-400 mb-8 text-base max-w-xl"
          initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
          {priceList.map((item, i) => (
            <motion.div
              key={item.service}
              className="flex justify-between items-center py-3 px-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-orange-500/40 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <span className="text-neutral-300 text-sm">{item.service}</span>
              <span className="text-orange-400 font-semibold text-sm whitespace-nowrap ml-4">{item.price}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-4 text-neutral-500 text-xs"
          initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
        >
          * Окончательная цена фиксируется в договоре после бесплатной диагностики
        </motion.p>
      </section>
    )
  }

  if (variant === 'reviews' && reviews) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <StarRating rating={review.rating} />
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="border-t border-neutral-800 pt-3">
                <div className="text-white text-sm font-semibold">{review.name}</div>
                <div className="text-neutral-500 text-xs mt-0.5">{review.car}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  if (variant === 'contact') {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <CallDialog open={callOpen} onClose={() => setCallOpen(false)} />
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-xl mt-5 text-neutral-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={`tel:${PHONE}`}>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-6 text-base gap-2">
              <Icon name="Phone" size={20} />
              Позвонить
            </Button>
          </a>
        </motion.div>
        <motion.div
          className="mt-12 flex flex-wrap gap-6"
          initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { icon: 'MapPin', label: 'г. Владивосток', href: 'https://go.2gis.com/HQ21b' },
            { icon: 'Send', label: 'Telegram', href: 'https://t.me/katanakuzovnoi' },
            { icon: 'Clock', label: 'Ежедневно, 10:00–19:00' },
          ].map((item) => (
            item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-400 text-sm hover:text-orange-400 transition-colors">
                <Icon name={item.icon} size={16} className="text-orange-400" fallback="MapPin" />
                {item.label}
              </a>
            ) : (
              <div key={item.label} className="flex items-center gap-2 text-neutral-400 text-sm">
                <Icon name={item.icon} size={16} className="text-orange-400" fallback="MapPin" />
                {item.label}
              </div>
            )
          ))}
        </motion.div>
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isActive ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button variant="outline" size="lg" className="text-orange-400 bg-transparent border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}