import {
	DecimalList,
	DiscList,
	Heading,
	ListItem,
	NativeTable,
	Td,
	Text,
	Th,
	Tr,
} from "@yamada-ui/react";
import {
	type DOMNode,
	Element,
	type HTMLReactParserOptions,
	domToReact,
} from "html-react-parser";

type ReplaceElementProps = {
	children?: React.ReactNode;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: any;
};

const replaceElements: Record<
	string,
	React.ComponentType<ReplaceElementProps>
> = {
	h1: ({ children, ...props }) => (
		<Heading as="h1" {...props}>
			{children}
		</Heading>
	),
	h2: ({ children, ...props }) => (
		<Heading as="h2" {...props}>
			{children}
		</Heading>
	),
	p: ({ children, ...props }) => <Text {...props}>{children}</Text>,
	ul: ({ children, ...props }) => <DiscList {...props}>{children}</DiscList>,
	ol: ({ children, ...props }) => (
		<DecimalList {...props}>{children}</DecimalList>
	),
	li: ({ children, ...props }) => <ListItem {...props}>{children}</ListItem>,
	table: ({ children, ...props }) => (
		<NativeTable border={1} {...props}>
			{children}
		</NativeTable>
	),
	tr: ({ children, ...props }) => <Tr {...props}>{children}</Tr>,
	th: ({ children, ...props }) => <Th {...props}>{children}</Th>,
	td: ({ children, ...props }) => <Td {...props}>{children}</Td>,
	b: ({ children, ...props }) => (
		<Text as={"b"} {...props}>
			{children}
		</Text>
	),
	i: ({ children, ...props }) => (
		<Text as={"i"} {...props}>
			{children}
		</Text>
	),
	s: ({ children, ...props }) => (
		<Text as={"s"} {...props}>
			{children}
		</Text>
	),
};

export const options: HTMLReactParserOptions = {
	replace: (domNode) => {
		if (domNode instanceof Element && domNode.tagName in replaceElements) {
			const ComponentToRender = replaceElements[domNode.tagName];
			return (
				<ComponentToRender {...domNode.attributes}>
					{domToReact(domNode.children as DOMNode[], options)}
				</ComponentToRender>
			);
		}
	},
};
