import React from "react";
import {
  VStack,
  HStack,
  Text,
  Box,
  IconButton,
  CloseIcon,
  Center,
  Modal,
  Alert,
} from "native-base";
const CustomAlert = ({ show, title, message, type, onClose }) => {
  let showUp = show === null ? false : true;
  return (
    <Modal isOpen={showUp} w="100%">
      <Center w="100%">
        <Alert w="90%" status={type} colorScheme={type}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  {title}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
                onPress={onClose}
              />
            </HStack>
            <Box
              pl="6"
              _text={{
                color: "coolGray.600",
              }}
            >
              {message}
            </Box>
          </VStack>
        </Alert>
      </Center>
    </Modal>
  );
};

export default CustomAlert;
