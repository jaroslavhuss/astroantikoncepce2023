import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-transparent rounded-box">
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Ovulace</h3>
          <p className="py-4">Proces uvolnění vajíčka z vaječníku, který se obvykle děje jednou za měsíc.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Levonorgestrel</h3>
          <p className="py-4">Hormon používaný v některých typech nouzové antikoncepce, který brání ovulaci.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Ulipristalacetát</h3>
          <p className="py-4">Látka používaná v některých typech nouzové antikoncepce, která brání ovulaci.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Tělíska (IUD)</h3>
          <p className="py-4">
            Malé zařízení, které lékař vloží do dělohy a které může zabránit těhotenství až do 5 dnů po nechráněném
            pohlavním styku.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg"> Hormonální regulace</h3>
          <p className="py-4">
            Proces regulace tělesných funkcí pomocí hormonů, jako je levonorgestrel nebo ulipristalacetát.
          </p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Folikulární fáze</h3>
          <p className="py-4">První část menstruačního cyklu, kdy folikuly v ovariu dozrávají.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Luteální fáze</h3>
          <p className="py-4">Druhá část menstruačního cyklu, kdy se tělo připravuje na možné těhotenství.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Endometrium</h3>
          <p className="py-4">Vnitřní vrstva dělohy, která se každý měsíc obnovuje během menstruačního cyklu.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Implantace</h3>
          <p className="py-4">Proces, při kterém se oplodněné vajíčko zavrtá do endometria a začne těhotenství.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Gonadotropin uvolňující hormon (GnRH)</h3>
          <p className="py-4">Hormon, který reguluje uvolňování dalších hormonů potřebných pro ovulaci.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Luteinizační hormon (LH)</h3>
          <p className="py-4">Hormon, který spouští ovulaci.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Folikuly stimulující hormon (FSH)</h3>
          <p className="py-4">Hormon, který stimuluje růst a zrání folikulů v ovariu.</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
