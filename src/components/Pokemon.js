import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Skeleton,
  Center,
} from '@chakra-ui/react'

function Pokemon({isOpen, onClose, forms, sprites}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <Center >
            <ModalHeader>{forms?.[0].name.toUpperCase() ?? <Skeleton height='20px' />}</ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Image src={sprites?.other['official-artwork'].front_default ?? <Skeleton height='200px' /> } alt='Pokemon image' />
          </ModalBody>
          <Center >
            <ModalFooter>
              <Button  colorScheme='blue' mr={3} >Go to Page</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Pokemon;