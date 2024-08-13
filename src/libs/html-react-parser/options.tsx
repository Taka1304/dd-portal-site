import {
	Box,
	DecimalList,
	DiscList,
	Heading,
	ListItem,
	NativeTable,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Tr,
} from "@yamada-ui/react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import parse from "html-react-parser";
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
	code: ({ children, ...props }) => {
		// Propsが空かどうか
		if (Reflect.ownKeys(props).length === 0) {
			return (
				<Text as={"code"} bg={"gray.50"} p={1} borderRadius={"sm"} {...props}>
					{children}
				</Text>
			);
		}

		return (
			<code className="hljs" {...props}>
				{parse(hljs.highlightAuto(children?.toString() ?? "").value)}
			</code>
		);
	},
	p: ({ children, ...props }) => <Text {...props}>{children}</Text>,
	ul: ({ children, ...props }) => <DiscList {...props}>{children}</DiscList>,
	ol: ({ children, ...props }) => (
		<DecimalList {...props}>{children}</DecimalList>
	),
	li: ({ children, ...props }) => <ListItem {...props}>{children}</ListItem>,
	table: ({ children, ...props }) => (
		<TableContainer>
			<NativeTable {...props}>{children}</NativeTable>
		</TableContainer>
	),
	tbody: ({ children, ...props }) => <Tbody {...props}>{children}</Tbody>,
	tr: ({ children, ...props }) => <Tr {...props}>{children}</Tr>,
	th: ({ children, ...props }) => (
		<Th bg={"gray.50"} {...props}>
			{children}
		</Th>
	),
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
	blockquote: ({ children, ...props }) => (
		<blockquote {...props}>
			<Box
				bg={"gray.50"}
				p={3}
				borderLeft={4}
				borderLeftColor={"black"}
				borderLeftStyle={"solid"}
			>
				{children}
			</Box>
		</blockquote>
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
