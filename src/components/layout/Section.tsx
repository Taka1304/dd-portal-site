import { Box, Container, Flex, FlexProps } from "@yamada-ui/react";
import React, { FC } from "react";

type Props = {
	parent?: FlexProps;
	children: React.ReactNode;
};

const Section: FC<Props> = ({ parent, children }) => {
	return (
		<Flex w={"full"} justify={"center"} {...parent}>
			<Container maxW="4xl" py="20">
				<Box gapY={20} display={"contents"}>
					{children}
				</Box>
			</Container>
		</Flex>
	);
};

export default Section;
