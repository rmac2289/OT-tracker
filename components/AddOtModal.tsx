import React from "react";
import { View, Text, Modal, Button } from "react-native";
interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const AddOtModal = (props: Props) => {
  const { isModalOpen, toggleModal } = props;
  return (
    <Modal visible={isModalOpen}>
      <View>
        <Text>Add OT</Text>
      </View>
      <Button onPress={toggleModal} title="Close" />
    </Modal>
  );
};

export default AddOtModal;
