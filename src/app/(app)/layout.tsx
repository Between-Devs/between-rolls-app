export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex h-screen">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
