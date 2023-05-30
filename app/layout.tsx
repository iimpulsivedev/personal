import "./globals.css";

export const metadata = {
  title: "Noah Pickle | Software Engineer",
  description:
    "Hello World, My name is Noah Pickle, aka !mpulsive. I am a software developer with over 4 years of experience building web applications and websites for a military contractor and insurance agencys. Technologies that I am familiar with are typescript, php, MySQL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
