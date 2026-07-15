import KeystaticApp from './keystatic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <KeystaticApp />
        {children}
      </body>
    </html>
  );
}
