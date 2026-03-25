import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    variant: 'hero',
    subtitle: (
      <div className="flex flex-col items-start gap-4">
        <img
          src="https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/bucket/a5353c8e-f4fd-4190-976c-2f7e25b19588.png"
          alt="Katana"
          className="h-24 md:h-32 w-auto drop-shadow-lg brightness-0 invert"
        />
      </div>
    ),
    title: "Центр кузовного ремонта во Владивостоке",
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
        title: 'Toyota — ремонт дверей и крыла',
        description: 'Серьёзная деформация двери и заднего крыла после ДТП. Рихтовка, шпатлёвка, покраска в цвет. Результат — как с завода.',
        duration: '3 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/bucket/a9f08e4c-202a-44a7-b990-e06ca3ed4605.jpg',
      },
      {
        title: 'Mazda — восстановление после аварии',
        description: 'Полное разрушение передней части: капот, крылья, бампер, лонжерон. Полное восстановление геометрии и кузова.',
        duration: '7 дней',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/bucket/6bf4eb33-56e3-4771-afa5-a3da980e070b.jpg',
      },
      {
        title: 'Toyota LC — ремонт бампера и фары',
        description: 'Вмятина переднего бампера, повреждение крепления фары. Рихтовка, покраска, полировка. Идеальный результат.',
        duration: '2 дня',
        guarantee: '1 год',
        imageUrl: 'https://cdn.poehali.dev/projects/94886d6c-e697-4f9b-8495-fe7ffb6b1992/bucket/3b234071-5c9b-4bf5-8c15-fd8d412da90b.jpg',
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