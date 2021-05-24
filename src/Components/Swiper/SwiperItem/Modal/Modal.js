import { Modal, Button } from "react-materialize";

const trigger = <Button>Open Modal</Button>;

const Modal_ = (props) => {
  return (
    <Modal header="Modal Header" trigger={trigger}>
      {props.data.title}
    </Modal>
  );
};

export default Modal_;
