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
} from '@chakra-ui/react'

function Pokemon({isOpen, onClose, forms, sprites}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{forms?.[0].name.toUpperCase() ?? <Skeleton height='20px' />}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <Image src={sprites?.other['official-artwork'].front_default ?? <Skeleton height='20px' /> } alt='Pokemon image' />
            {}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Go to Page</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Pokemon;