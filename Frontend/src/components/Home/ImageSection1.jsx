import React from 'react'

const ImageSection1 = () => {
  const topLeftImage = 'https://www.iprbookshop.ru/images/buttons/ipr_smart_button.png'
  const topRightImage = 'https://inggu.ru/upload/medialibrary/ba7/0ek14xa9heem9zcwbdgs3r1ag9jchkw5.jpg'
  const bottomImage = 'https://inggu.ru/upload/medialibrary/7a6/8wtf7g2pdiskxm19yghe723kb0kb09o7.png'

  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
          <article className="relative h-32 overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] sm:h-40 lg:h-44">
            <img
              src={topLeftImage}
              alt="IPR Smart banner"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </article>

          <article className="relative h-32 overflow-hidden rounded-none shadow-[0_8px_24px_rgba(15,23,42,0.12)] sm:h-40 lg:h-44">
            <img
              src={topRightImage}
              alt="80 years victory banner"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </article>
        </div>

        <article className="relative h-40 w-full max-w-xl overflow-hidden shadow-[0_10px_28px_rgba(15,23,42,0.18)] sm:h-48">
          <img
            src={bottomImage}
            alt="Student design bureau banner"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  )
}

export default ImageSection1