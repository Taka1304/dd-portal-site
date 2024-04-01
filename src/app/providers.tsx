import { Analytics } from "@vercel/analytics/react";
import { UIProvider } from "@yamada-ui/react";
import React from "react";
import { config, theme } from "~/theme";

const Providers = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			{/* <ColorModeScript type="cookie" nonce="testing" /> */}
			<UIProvider theme={theme} config={config}>
				{children}
				<Analytics />
			</UIProvider>
		</>
	);
};

export default Providers;
