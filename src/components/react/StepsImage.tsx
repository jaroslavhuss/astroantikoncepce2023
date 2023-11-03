import Girl from '../../assets/images/steps-girl.png';
const StepsImage = () => (
  <img
    src={Girl.src}
    alt="Dívka si snaží vybrat"
    className="max-w-full w-[300px] rounded-full border-2 mx-auto mt-10 hover:scale-105 transition-all duration-500 ease-in-out shadow-2xl"
  />
);

export default StepsImage;
