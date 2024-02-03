import { useSocket } from "./hooks/useSocket";
import { PauseCameraButton } from "./components/PauseCameraButton";

export function CameraStream() {
  const { lastData, togglePause, paused } = useSocket("ws://localhost:6500/1");

  return (
    <div className="flex flex-col">
      <h2> Camaras </h2>

      <div className="text-lg flex items-center">
        <span className="text-green-600 mr-1">•</span> En vivo
      </div>
      <div className="group mt-1 relative bg-stone-300 flex justify-center w-full">
        <img className="max-w-96 w-full" src={lastData} />
        <div className="inset-0 absolute grid place-items-center">
          <PauseCameraButton paused={paused} togglePause={togglePause} />
        </div>
      </div>
      <span className="text-xl mt-2"> Camara #1 </span>
    </div>
  );
}
