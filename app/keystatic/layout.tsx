import KeystaticApp from './keystatic';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <KeystaticApp />
      {children}
    </>
  );
}
