export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <header>
                <h1>Dashboard Header</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>Dashboard Footer</p>
            </footer>
        </div>
    );
}