import React from 'react';

const Steps = () => {
  return (
    <ul className="steps steps-vertical">
      <li className="step step-success">
        Ovulace: Vajíčko je uvolněno z vaječníku. Pokud dojde k pohlavnímu styku, může být vajíčko oplodněno spermiemi.
        Nouzová antikoncepce může zabránit uvolnění vajíčka z vaječníku.
      </li>
      <li className="step step-success">
        Cesta vejcovodem: Uvolněné vajíčko putuje vejcovodem směrem k děloze. Spermie mohou dosáhnout vajíčka a dojít k
        oplodnění. Nouzová antikoncepce může změnit prostředí ve vejcovodech, aby bylo pro spermie těžší dosáhnout
        vajíčka.
      </li>
      <li className="step step-success">
        Oplodnění: Spermie pronikne do vajíčka a dojde k oplodnění. Nouzová antikoncepce je stále účinná, pokud ji
        užijete co nejdříve po oplodnění.
      </li>
      <li className="step step-success">
        Dělení buněk: Oplodněné vajíčko se začne dělit na více buněk a pokračuje ve své cestě vejcovodem. Nouzová
        antikoncepce může stále zabránit těhotenství, pokud ji užijete co nejdříve.
      </li>
      <li className="step">
        Implantace: Embryo se implantuje do děložní sliznice, kde začne těhotenství. Pokud již došlo k implantaci
        embrya, nouzová antikoncepce již nebude účinná.
      </li>
    </ul>
  );
};

export default Steps;
