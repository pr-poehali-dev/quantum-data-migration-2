import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    variant: 'hero',
    subtitle: <Badge variant="outline" className="text-orange-400 border-orange-400">Владивосток · Кузовной сервис</Badge>,
    title: "Ржавчина не пройдёт.",
    content: "Гарантия 1 год от сквозной ржавчины. Фиксированная цена в договоре. Бесплатная диагностика кузова.",
    showButton: true,
    buttonText: 'Записаться на диагностику'
  },
  {
    id: 'services',
    variant: 'services',
    title: 'Что мы делаем',
    services: [
      { icon: 'Flame', title: 'Устранение ржавчины', price: 'от 2 000 ₽', description: 'Локальная и полная антикоррозийная обработка. Особенно актуально для японских авто из Владивостока.' },
      { icon: 'Paintbrush', title: 'Покраска', price: 'от 4 000 ₽', description: 'Местная, полная, подготовка к продаже. Точное попадание в цвет, полировка в подарок.' },
      { icon: 'Wrench', title: 'Сварочные работы', price: 'от 8 000 ₽', description: 'Замена порогов, арок, крыльев. Сварка + покраска под ключ. Документально подтверждённая гарантия.' },
      { icon: 'ShieldCheck', title: 'Антикор', price: 'от 3 500 ₽', description: 'Обработка днища, арок, скрытых полостей. Защита на годы от морского климата.' },
      { icon: 'Star', title: 'Подготовка к продаже', price: 'от 6 000 ₽', description: 'Косметический кузовной ремонт для перекупов и частников. Максимальная цена продажи.' },
    ]
  },
  {
    id: 'before-after',
    variant: 'before-after',
    title: 'Примеры работ',
    works: [
      {
        title: 'Toyota Camry — замена порогов',
        description: 'Сквозная ржавчина порогов с обеих сторон. Вырезали, сварили новые, обработали антикором и покрасили в цвет.',
        duration: '3 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/a4818d1f-deea-4ea7-a8f7-e7ff16c249ff.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
      {
        title: 'Nissan Leaf — крыло и арка',
        description: 'Типичная коррозия арки на японском авто. Локальная сварка, шпатлёвка, покраска с полировкой.',
        duration: '2 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/cd4522d8-c210-4e40-9067-463b75a38d92.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
      {
        title: 'Toyota Land Cruiser — замена арок',
        description: 'Сквозная коррозия задних арок. Вырезали и сварили новые усиленные арки, покрасили в цвет кузова.',
        duration: '4 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/cd4522d8-c210-4e40-9067-463b75a38d92.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
      {
        title: 'Mazda CX-5 — антикор днища',
        description: 'Полная антикоррозийная обработка днища и скрытых полостей. Жидкий резиноподобный состав + скрытые полости.',
        duration: '1 день',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/a4818d1f-deea-4ea7-a8f7-e7ff16c249ff.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
      {
        title: 'Subaru Forester — полная покраска',
        description: 'Подготовка к продаже: шлифовка, шпатлёвка, грунт, покраска в цвет. Полировка в подарок.',
        duration: '5 дней',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/cd4522d8-c210-4e40-9067-463b75a38d92.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
      {
        title: 'Honda Fit — ржавчина капота',
        description: 'Локальное вздутие краски и ржавчина капота. Зачистили до металла, обработали грунтом, покрасили в цвет.',
        duration: '2 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/a4818d1f-deea-4ea7-a8f7-e7ff16c249ff.jpg',
        imageAfterUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/files/046193cd-010d-41e1-9582-1fc2a86a3b9f.jpg',
      },
    ]
  },
  {
    id: 'prices',
    variant: 'prices',
    title: 'Прозрачные цены',
    content: 'Все цены фиксируются в договоре до начала работ. Окончательная стоимость — после бесплатной диагностики.',
  },
  {
    id: 'reviews',
    variant: 'reviews',
    title: 'Отзывы клиентов',
    reviews: [
      { name: 'Алексей К.', car: 'Toyota Crown 2012', text: 'Пороги сгнили насквозь, думал машину под списание. Ребята сделали за 3 дня, теперь как новая. Гарантия в договоре — это реально круто.', rating: 5 },
      { name: 'Марина Д.', car: 'Nissan Note 2015', text: 'Готовила машину к продаже. Подняли цену на 80 тысяч после их работы. Рекомендую всем перед продажей.', rating: 5 },
      { name: 'Дмитрий В.', car: 'Honda CR-V 2011', text: 'Антикор + покраска арок. Всё чётко, без лишних слов. Цена совпала с договором рубль в рубль.', rating: 5 },
    ]
  },
  {
    id: 'contact',
    variant: 'contact',
    title: 'Записаться на диагностику',
    content: 'Бесплатно оценим состояние кузова и дадим точную смету. Приезжайте или оставьте заявку — перезвоним за 10 минут.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]