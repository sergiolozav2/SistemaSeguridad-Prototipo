import { PauseCircleFilled, PlayCircleFilled } from "@ant-design/icons";

type PauseCameraButtonProps = {
  paused: boolean;
  togglePause: () => void;
};

export function PauseCameraButton(props: PauseCameraButtonProps) {
  return (
    <div
      className={`${
        props.paused ? "text-stone-200/50" : "text-transparent "
      } cursor-pointer text-6xl group-hover:text-stone-200/50 transition-colors duration-300`}
      onClick={props.togglePause}
    >
      {props.paused ? <PlayCircleFilled /> : <PauseCircleFilled />}
    </div>
  );
}
