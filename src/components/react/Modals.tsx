import React from 'react';

const Modals = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-center gap-2">
      <div className="div01 col-span-1 place-self-center">
        <button className="btn font-bold text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>
          Ovulace
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">Ovulace</h3>
            <p className="py-4">Proces uvolnění vajíčka z vaječníku, který se obvykle děje jednou za měsíc.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn ">Zavřít</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="div01 col-span-1 place-self-center">
        <button className="btn font-bold" onClick={() => document.getElementById('my_modal_6').showModal()}>
          Levonorgestrel
        </button>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">Levonorgestrel</h3>
            <p className="py-4">Hormon používaný v některých typech nouzové antikoncepce, který brání ovulaci.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Zavřít</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="div01 col-span-1 place-self-center">
        <button className="btn font-bold" onClick={() => document.getElementById('my_modal_7').showModal()}>
          Ulipristalacetát
        </button>
        <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">Ulipristalacetát</h3>
            <p className="py-4">Látka používaná v některých typech nouzové antikoncepce, která brání ovulaci.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Zavřít</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="div01 col-span-1 place-self-center">
        <button className="btn font-bold text-black" onClick={() => document.getElementById('my_modal_8').showModal()}>
          Tělíska (IUD)
        </button>
        <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">Tělíska (IUD)</h3>
            <p className="py-4">
              Malé zařízení, které lékař vloží do dělohy a které může zabránit těhotenství až do 5 dnů po nechráněném
              pohlavním styku.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn ">Zavřít</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Modals;
