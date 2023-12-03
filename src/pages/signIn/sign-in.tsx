('use client');

import { PageTitle } from '@/UI';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export function SignIn() {
	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<PageTitle text='Sign in to your account' position='center' fonstSize='4xl' />
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Stack spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input type='password' />
						</FormControl>
						<Stack spacing={10}>
							<Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
								<Checkbox>Remember me</Checkbox>
								<Text color={'blue.400'}>Forgot password?</Text>
							</Stack>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
