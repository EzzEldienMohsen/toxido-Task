/* eslint-disable react/prop-types */
import { Modal } from 'flowbite-react';
import ModalFirstPart from './ModalFirstPart';
import ModalSecondPart from './ModalSecondPart';
const TheModal = ({
  openModal,
  suitImage,
  setOpenModal,
  title,
  info,
  price,
  id,
}) => {
  console.log(price, 'MODAL');
  return (
    <Modal show={openModal} size="full" onClose={() => setOpenModal(false)}>
      <Modal.Header>More Information</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col w-full  lg:grid lg:grid-cols-2 gap-0 bg-white shadow-2xl  ">
          <img src={suitImage} alt="suit" className="w-full lg:h-[850px]" />
          <div className="flex flex-col justify-start items-start pl-4 pt-10 lg:pt-0 lg:pl-20 ">
            <ModalFirstPart info={info} title={title} price={price} />
            <ModalSecondPart
              id={id}
              suitImage={suitImage}
              price={price}
              title={title}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TheModal;
