import React from 'react';

const Tabs = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary bg-sky-600">
          Ahoj, prosím tě, nevíš jaké jsou formy nouzové antikoncepce? Asi se mi stala "nehoda" s Martinem...😭😭😭
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info text-white">
          Ahoj... <br /> <br /> Hele neboj, máš čas zhruba 72 hodin. Teď bych to řešila klasickou nouzovkou typu
          Postinor, Escapelle nebo EllaOne.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary bg-sky-600">
          Ach jo, já ale slyšela strašný věci o užívání těchto pilulek 😩. Jako neplodnost, tloustnutí a vůbec bych do
          sebe nerada cpala umělé hormony.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info text-white">
          Ale ne, neboj - to jsou jen mýty. Většina žen tyto léky dobře snáší a nejsou s nimi žádné problémy. Naopak,
          tyhle pilule nemají žádný vliv na váhu. Navíc odpovídají přirozeným hormonům vaječníků. Něco si o tom pak
          přečti.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info text-white">
          Teď ale honem utíkej do lékárny 🚑, kde ti poradí, kterou z nich si vybrat. A nezapomeň, že je musíš užít co
          nejdřív🕣.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary bg-sky-600">Díky Kláro 😘... Tak já běžím. Písnu později.</div>
      </div>
    </div>
  );
};

export default Tabs;
