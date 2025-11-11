import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollWrapper from "@/components/ScrollWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<>{children}</>
			<Footer />
			<ScrollWrapper />
		</>
	);
};

export default Layout;
