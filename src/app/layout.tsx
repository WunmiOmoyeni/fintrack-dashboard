import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-50">
        <Navbar />
        <div className="flex pt-[60px] h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
