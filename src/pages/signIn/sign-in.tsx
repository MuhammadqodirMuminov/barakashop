('use client');
import { ROUTES } from '@/constants';
import { useActions, useTypedSelector } from '@/hooks';
import { InputField, PageTitle } from '@/ui';
import { CustomButton } from '@/ui/button/custom';
import { addNotification } from '@/utils';
import { AdminLogin, AdminLoginWithPhoneNumber } from '@/validations';
import { LockIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
	const { SignIn } = useActions();
	const { user, loading } = useTypedSelector(state => state.auth);
	const navigate = useNavigate();

	const initialValues1 = {
		username: '',
		password: '',
	};
	const initialValues2 = {
		phone_number: '',
	};
	const handleSubmit = ({ username, password }: FormikValues) => {
		try {
			SignIn({ username, password });

			if (user) {
				addNotification('Successfully signed in');
				navigate(ROUTES.seller);
			}
		} catch (error) {
			addNotification(error);
		}
	};

	const handleSubmitWithPhoneNumber = (values: FormikValues) => {
		console.log(values);
	};

	return (
		<Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<PageTitle text='Sign in to your account' position='center' fonstSize='4xl' />
				<Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
					<Tabs isFitted variant='enclosed'>
						<TabList mb='1em'>
							<Tab gap={6}>
								<LockIcon /> <span> password</span>
							</Tab>
							<Tab gap={6}>
								<PhoneIcon /> phone
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Formik onSubmit={handleSubmit} initialValues={initialValues1} validationSchema={AdminLogin}>
									<Form>
										<Stack spacing={4}>
											<InputField text='Username' name='username' type='text' placeholder='Your username' />
											<InputField text='Password' name='password' type='password' placeholder='Your password' />
											<Stack spacing={10}>
												<CustomButton
													isLoading={loading.sign}
													type='submit'
													text={'Sign in'}
													bg={'blue.400'}
													color={'white'}
													_hover={{
														bg: 'blue.500',
													}}
												/>
											</Stack>
										</Stack>
									</Form>
								</Formik>
							</TabPanel>
							<TabPanel>
								<Formik onSubmit={handleSubmitWithPhoneNumber} initialValues={initialValues2} validationSchema={AdminLoginWithPhoneNumber}>
									<Form>
										<Stack spacing={4}>
											<InputField text='Your phone' name='phone_number' type='text' placeholder='Your phone' mask={true} />
											<Stack spacing={10}>
												<CustomButton
													type='submit'
													text={'Sign in'}
													bg={'blue.400'}
													color={'white'}
													_hover={{
														bg: 'blue.500',
													}}
												/>
											</Stack>
										</Stack>
									</Form>
								</Formik>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Stack>
		</Flex>
	);
}
