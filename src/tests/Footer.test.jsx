import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";

test("renders Footer component with expected elements", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const faqLink = screen.getByRole("link", { name: /faq/i });
  expect(faqLink).toBeInTheDocument();

  const contactUsLink = screen.getByRole("link", { name: /contact us/i });
  expect(contactUsLink).toBeInTheDocument();

  const privacyLink = screen.getByRole("link", { name: /privacy statement/i });
  expect(privacyLink).toBeInTheDocument();

  const termsLink = screen.getByRole("link", { name: /terms & conditions/i });
  expect(termsLink).toBeInTheDocument();

  const facebookIcon = screen.getByTestId("facebook-icon");
  expect(facebookIcon).toBeInTheDocument();

  const twitterIcon = screen.getByTestId("twitter-icon");
  expect(twitterIcon).toBeInTheDocument();

  const instagramIcon = screen.getByTestId("instagram-icon");
  expect(instagramIcon).toBeInTheDocument();

  const companyLogo = screen.getByAltText(/company logo/i);
  expect(companyLogo).toBeInTheDocument();

  const copyrightText = screen.getByText(
    "© FutureSports 2023. All rights reserved."
  );
  expect(copyrightText).toBeInTheDocument();
});
