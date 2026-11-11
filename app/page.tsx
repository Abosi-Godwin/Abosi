import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import RootLayout from "./layout";
export default function Home() {
    return (
        <>
            <Header />
            <RootLayout />
            <Main />
            <Footer />
        </>
    );
}
