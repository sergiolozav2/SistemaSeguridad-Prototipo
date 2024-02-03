import { Modal } from "antd";

type ImageDialogProps = {
  record: {
    picture: string;
    location: string;
    name: string;
    confidence: string;
  };
  closeModal: () => void;
};

export function ImageDialog(props: ImageDialogProps) {
  const open = !!props.record;

  if (!open) {
    return null;
  }

  return (
    <Modal
      title="Evento registrado"
      open={open}
      onOk={props.closeModal}
      onCancel={props.closeModal}
    >
      <div className="flex-col flex justify-center items-center">
        <img
          className="h-40 max-w-40 object-contain"
          src={props.record.picture ?? "./placeholder-image.jpg"}
        />
        <div className="gap-2 grid grid-cols-2">
          <span className="font-semibold mr-2"> Objeto: </span>
          <span className="capitalize"> {props.record.name}</span>

          <span className="font-semibold mr-2"> Ubicación: </span>
          <span> {props.record.location}</span>
          <span className="font-semibold mr-2"> Confianza:</span>
          <span> {props.record.confidence}</span>
        </div>
      </div>
    </Modal>
  );
}
