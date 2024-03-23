import { Box } from "@yamada-ui/react";
import Image, { ImageProps } from "next/image";
import React, { FC } from "react";

interface Props extends ImageProps {
	children?: React.ReactNode;
}

const HeroImage: FC<Props> = ({ children, ...rest }) => {
	return (
		<Box h={"64vw"} maxH={"calc(100vh - 300px)"} w={"100vw"} pos={"relative"}>
			<Image {...rest} fill sizes="100vw" style={{ objectFit: "contain" }} />
			<Box
				position={"absolute"}
				bg={
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .10) 40%)"
				}
				w="full"
				h="full"
			/>
			<Box
				position={"absolute"}
				bgColor={"rgba(14,65,107, .8)"}
				bottom="10%"
				color="white"
				p="2"
				px="4"
				fontWeight={"bold"}
				fontSize={"lg"}
			>
				{children}
			</Box>
		</Box>
	);
};

export default HeroImage;
