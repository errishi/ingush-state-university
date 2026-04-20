import React from 'react'
import { Link } from 'react-router'

const ImageSection2 = () => {
  const topBanners = [
    { title: 'Форма обращения граждан', imageUrl: 'https://inggu.ru/upload/medialibrary/8bf/8bf71379e2cb98310dda315aedbca3c1.jpg', href: '#' },
    { title: 'Конкурс на замещение вакантных должностей', imageUrl: 'https://inggu.ru/upload/medialibrary/b65/b65c23353e7c0bd2b16a728fd137749f.png', href: '#' },
    { title: 'Критерии рейтинговой оценки деятельности ППС', imageUrl: 'https://inggu.ru/upload/medialibrary/743/74305a2aecc738535f63bb22c9bd4797.png', href: '#' },
    { title: 'Противодействие коррупции', imageUrl: 'https://inggu.ru/upload/medialibrary/2b8/6zyhgx3kaa9oq933x6p1iz0iseq96r23.jpg', href: '#' },
    { title: 'Выборы ректора', imageUrl: 'https://inggu.ru/upload/medialibrary/12e/3rd73bv4i6xqewjjpjo4liv36706g2mq.jpeg', href: '#' },
    { title: 'Памятка об ответственности', imageUrl: 'https://inggu.ru/upload/medialibrary/8b1/38haj47pb2gyml2ufqetu7xx0sb7bbv6.png', href: '#' },
    { title: 'Противодействие терроризму и экстремизму', imageUrl: 'https://inggu.ru/upload/medialibrary/309/zc6k1c7fec0oon8cr9vu305dcvoa38zs.jpg', href: '#' },
]

const middleBanners = [
    { title: 'Оценка качества услуг', imageUrl: 'https://inggu.ru/upload/medialibrary/fe3/kp97sb0o2g60a01w5etj3m428cwkojer.jpg', href: '#', banner: false },
    { title: 'IPR Books', imageUrl: 'https://inggu.ru/upload/medialibrary/c67/f30mr537e31rmee1rc0kxwn7rz8ydgvk.png', href: '#', banner: true },
]

const bottomBanners = [
  { title: 'eLIBRARY', imageUrl: 'https://inggu.ru/upload/medialibrary/ca5/mao543oghpwu19zbxnjuorr6k5u8022g.png', href: '#', big: true },
  ]

  return (
    <section className="py-8 mb-5 lg:py-10">
      <div className="mx-auto w-full max-w-370 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-5">
          {topBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className="block lg:h-40 h-24 overflow-hidden bg-white"
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-5">
          {middleBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className={`block w-fit overflow-hidden bg-white ${banner.banner ? 'h-40 sm:col-span-2 lg:col-span-3' : 'h-40'}`}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-5">
          {bottomBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className={`block w-full overflow-hidden bg-white ${banner.big ? 'h-40' : 'h-24'}`}
            >
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageSection2
