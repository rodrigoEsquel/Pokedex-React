import { Text, Flex } from '@chakra-ui/react'

function Display({heightStat, weightStat, stats}) {
  const textColor = 'white';
  return (
    <Flex bg={'red.700'} flexDirection={'column'} justifyContent='space-evenly' grow='1'>  
      <Text textAlign={'center'} fontSize='lg' fontWeight="bold" color={textColor}>    
        {heightStat ? 'HEIGHT: ' + heightStat : ''}
      </Text>
      <Text textAlign={'center'} fontSize='lg' fontWeight="bold" color={textColor}>
        {weightStat ? 'WEIGHT: ' + weightStat : ''}
      </Text>   
      {stats?.map((stat) => (
        <Text textAlign={'center'} fontSize='lg' fontWeight="bold" color={textColor} key={stat.name}>    
          {stat.name.toUpperCase() + ': ' + stat.value }
        </Text>
      )) ?? ''}
    </Flex>
  )

}

export default Display;