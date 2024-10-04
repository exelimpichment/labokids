const Party = () => {

  return (
    <main className="content">
      <div className="absolute left-0 top-0 border border-transparent"></div>
      <section>
        <div className="h-screen">
          <div className="absolute -z-10 h-screen w-full">
            <img
              alt="hero image"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "cover",
                objectPosition: "center top",
                color: "transparent"
              }}
              sizes="100vw"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbilingualEnglish.f7035efc.jpg&w=3840&q=100"
            />
          </div>
          <div className="mx-auto max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col items-end pb-5">
              <div className="mt-[10vh] sm:mt-[25vh] lg:mt-[40vh] lg:max-w-[60%] landscape:sm:mt-[10vh] landscape:lg:mt-[25vh] landscape:xl:mt-[35vh]  lg:text-right text-center ">
                <h1 className="__className_9ee573 pb-5 text-4xl text-white lg:pb-5 xl:text-5xl">Prywatne przedszkole dwujęzyczne – Poznań</h1>
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-row lg:justify-end justify-center gap-3 py-5">
              <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-10 px-4 py-2 __className_9ee573 rounded border-transparent bg-blue-100 text-base hover:bg-slate-300" type="button">Kontakt</button>
            </div>
          </div>
        </div>
      </section>
      <div className="border border-transparent"></div>
      <div className="relative mt-16 flex max-w-full flex-col items-center justify-center">
        <p className="__className_a24eb7 mb-2 text-lg text-laboRed">RADOŚĆ DLA DZIECI</p>
        <p className="__className_303d2f mb-5 max-w-[50%] text-center text-gray-600 2sm:min-w-[90%] lg:min-w-[70%]  xl:min-w-0">Labokids to <b>anglojęzyczne przedszkole</b>, które mieści się w <b>Poznaniu</b>. Uczęszczają do niego m.in. dzieci z różnych krajów, dwujęzycznych rodzin, a także mnóstwo maluchów, których rodzice chcą, aby równie płynnie komunikowały się w języku angielskim, co w języku polskim. Dzięki temu, że maluchy od początku swojej edukacji osłuchują się z dwoma językami, ich nauka przychodzi naturalnie. <b>Przedszkole anglojęzyczne</b> to świetny start – dzieci są w stanie przyswoić podstawowe zwroty oraz słownictwo, co ułatwi naukę w następnych latach. Zwiększa to potencjał intelektualny maluchów, przez co wzrasta zarówno ich kreatywność, jak i nieszablonowe myślenie. Jeśli są Państwo z Poznania, zapraszamy do zapisów swoich dzieci do Labokids!</p>
        <img
          className="mb-12"
          alt="small bee"
          loading="lazy"
          width="108"
          height="25"
          decoding="async"
          data-nimg="1"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbee.adb462ba.webp&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbee.adb462ba.webp&amp;w=256&amp;q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbee.adb462ba.webp&amp;w=256&amp;q=75"
        />
      </div>
  </main>
  );
};

export default Party;
