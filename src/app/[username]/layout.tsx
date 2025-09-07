export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>profile navigation</nav>

            {children}
        </section>
    );
}