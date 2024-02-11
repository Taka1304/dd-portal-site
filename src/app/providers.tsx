import { ColorModeScript, UIProvider } from "@yamada-ui/react";
import React from "react";

const Providers = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			{/* <ColorModeScript type="cookie" nonce="testing" /> */}
			<UIProvider>{children}</UIProvider>
		</>
	);
};

export default Providers;
