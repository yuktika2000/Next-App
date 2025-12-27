
import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import Header from "@/components/Header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen m-0">
        <div className="h-screen flex">
        <Sidebar/>
        <div className="flex flex-col flex-1">
          <Header/>
          <main className="flex-1 p-4 overflow-y-auto">{children}</main>
        </div>
                </div>

      </body>
    </html>
  );
}
