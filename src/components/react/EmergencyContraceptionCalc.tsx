import { useState, useEffect } from 'react';
interface CalcState {
  started: boolean;
  progress: number;
  dateOfSex?: Date | undefined;
  timeOfSex?: Date | undefined;
  timeLeft?: number;
}
const EmergencyContraceptionCalc = () => {
  const [CalcState, setCalcState] = useState<CalcState>({
    started: false,
    progress: 0,
    dateOfSex: undefined,
    timeOfSex: undefined,
    timeLeft: 0,
  });

  /**
   * Based on date object (CalcState.dateOfSex) and time (CalcState.timeOfSex) calculate, how much hours left from 72 hours. (CalcState.timeLeft)
   */

  const calculateTimeLeft = () => {
    const now = new Date();
    //@ts-ignore
    const timeOfSex = new Date(CalcState.dateOfSex);
    timeOfSex.setHours(CalcState.timeOfSex?.getHours() || 0);
    timeOfSex.setMinutes(CalcState.timeOfSex?.getMinutes() || 0);
    timeOfSex.setSeconds(CalcState.timeOfSex?.getSeconds() || 0);
    const diff = now.getTime() - timeOfSex.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const timeLeft = 72 - hours;
    if (timeLeft > 0) {
      setCalcState({
        ...CalcState,
        timeLeft: timeLeft,
        progress: 100,
      });
    } else {
      setCalcState({
        ...CalcState,
        timeLeft: 0,
        progress: 100,
      });
    }
  };

  useEffect(() => {
    //if Calc.dateOfSex and Calc.timeOfSex is set and differes from the original state, calculate time left
    if (
      CalcState.dateOfSex &&
      CalcState.timeOfSex &&
      CalcState.dateOfSex !== undefined &&
      CalcState.timeOfSex !== undefined
    ) {
      calculateTimeLeft();
    }
  }, [CalcState.dateOfSex, CalcState.timeOfSex]);

  return (
    <div className="w-full flex mt-10 flex-col">
      <progress className="progress progress-primary w-full" value={CalcState.progress} max="100"></progress>
      <br />
      {!CalcState.started && (
        <div
          className="btn rounded-full mx-auto text-center border-2 inline-block cursor-pointer bg-gradient-to-br from-pink-200 via-red-100 to-purple-200 border-red-100 font-bold shake-button"
          onClick={() => {
            setCalcState({
              ...CalcState,
              started: true,
              progress: 50,
            });
          }}
        >
          Spusť kalkulačku
        </div>
      )}

      {CalcState.started && CalcState.progress === 50 && (
        <>
          <div className="text-center font-bold">Kdy došlo k pohlavnímu styku?</div>
          <input
            type="date"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-2xl my-2"
            onChange={(e) => {
              const date = new Date(e.target.value);
              setCalcState({
                ...CalcState,
                dateOfSex: date,
              });
            }}
          />
          <input
            type="time"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-2xl"
            onChange={(date) => {
              if (date) {
                const time = new Date(date.target.value);
                setCalcState({
                  ...CalcState,
                  timeOfSex: time,
                });
              }
            }}
          />
        </>
      )}

      {CalcState.progress === 100 && (
        <div className="text-center my-2 text-5xl p-10 bg-slate-900 text-purple-800 font-bold rounded-full shadow-2xl  bg-gradient-to-br">
          <span className="text-black-gradient">Zbývá {CalcState.timeLeft} hodin</span>
        </div>
      )}
    </div>
  );
};

export default EmergencyContraceptionCalc;
