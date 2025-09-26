import { PublicNavbar } from '@/components/common/PublicNavbar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-mukta flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
