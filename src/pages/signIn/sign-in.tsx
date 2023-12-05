('use client');
import { InputField, PageTitle } from '@/ui';
import { CustomButton } from '@/ui/button/button';
import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react';

export function SignIn() {
	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<PageTitle text='Sign in to your account' position='center' fonstSize='4xl' />
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Tabs isFitted variant='enclosed'>
						<TabList mb='1em'>
							<Tab>
								<AtSignIcon /> <span>with password</span>
							</Tab>
							<Tab>
								<PhoneIcon /> with phone
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<p>one!</p>
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<Stack spacing={4}>
						<InputField text='Username' type='text' props={{ placeholder: 'Your username' }} />
						<InputField text='Password' type='password' props={{ placeholder: 'Your password' }} />
						<Stack spacing={10}>
							<CustomButton
								text={'Sign in'}
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							/>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
