import React from 'react'
import { Link } from 'react-router'

const ImageSection2 = () => {
  const topBanners = [
    { title: 'Форма обращения граждан', imageUrl: 'https://inggu.ru/upload/medialibrary/4b7/4b76c4949e847456fcd3558f195285e8.png', href: '#' },
    { title: 'Конкурс на замещение вакантных должностей', imageUrl: 'https://inggu.ru/upload/medialibrary/bba/bba9fd528df37aeb550a533f6d9247a1.png', href: '#' },
    { title: 'Критерии рейтинговой оценки деятельности ППС', imageUrl: 'https://inggu.ru/upload/medialibrary/364/36486d43d4ff276cb9f7c981866b90e3.png', href: '#' },
    { title: 'Противодействие коррупции', imageUrl: 'https://inggu.ru/upload/medialibrary/92d/92dc5db77ac07f97cbb39564302df6ee.png', href: '#' },
    { title: 'Выборы ректора', imageUrl: 'https://inggu.ru/upload/medialibrary/c12/c1282ef25829902aafb568fd15b5e4a6.png', href: '#' },
    { title: 'Памятка об ответственности', imageUrl: 'https://inggu.ru/upload/medialibrary/a80/a80a855119d76b14bf7aebbcfb9f8c9b.png', href: '#' },
    { title: 'Противодействие терроризму и экстремизму', imageUrl: 'https://inggu.ru/upload/medialibrary/a4e/qc3i8pontvcxfue1sp74lzbz7fl1eu6c.jpg', href: '#' },
    { title: 'Оценка качества услуг', imageUrl: 'https://inggu.ru/upload/medialibrary/111/ocwhcd7h0wsqzyn5k0elco6kvs4cnm5g.png', href: '#' }
  ]

  const middleBanners = [
    { title: 'IPR Books', imageUrl: 'https://inggu.ru/upload/medialibrary/528/528ae38e1603058adcf9e04c7fb01f19.png', href: '#' },
    { title: 'eLIBRARY', imageUrl: 'https://inggu.ru/upload/medialibrary/8b6/8b6141aaedc286e26f41b01b6fd3d146.png', href: '#' },
    { title: 'Российское образование', imageUrl: 'https://inggu.ru/upload/medialibrary/487/4870965fa1fe6759e711a6eb3e3e2471.png', href: '#' },
    { title: 'Национальный корпус русского языка', imageUrl: 'https://inggu.ru/upload/medialibrary/6c5/6c5147d474fbd93284026329d7ccde12.png', href: '#' }
  ]

  const bottomBanners = [
    { title: 'Приоритет 2030', imageUrl: 'https://inggu.ru/upload/medialibrary/91d/91d452635cff117a43fb26fb60cd8c74.png', href: '#', big: false },
    { title: 'Минобрнауки России', imageUrl: 'https://inggu.ru/upload/medialibrary/9b0/mu9zxg2f0dfpgt8eewx267gy8t2v3rfv.png', href: '#', big: false },
    { title: 'Центр финансовой грамотности', imageUrl: 'https://inggu.ru/upload/medialibrary/639/3istd1c8bahi4wd5dsb5e5ffn76hbnxq.jpg', href: '#', big: true }
  ]

  return (
    <section className="py-8 lg:py-10">
      <div className="mx-auto w-full max-w-260 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {topBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className="block lg:h-fit h-24 overflow-hidden border border-[#4d5bd3] bg-white"
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

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {middleBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className="block lg:h-fit h-24 overflow-hidden border border-[#4d5bd3] bg-white"
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

        <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-[1fr_1fr_1.2fr] lg:items-start">
          {bottomBanners.map((banner) => (
            <Link
              key={banner.title}
              to={banner.href}
              className={`block overflow-hidden border border-[#4d5bd3] bg-white ${banner.big ? 'h-58' : 'h-24'}`}
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
