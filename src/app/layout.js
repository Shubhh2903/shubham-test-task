import ProvideLayout from "../../lib/ProvideLayout";
import StyledComponentsRegistry from "../../lib/StyledComponentsRegistry";
import "./globals.css";

export const metadata = {
  title: "Shubham lilawala",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ProvideLayout>{children}</ProvideLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
