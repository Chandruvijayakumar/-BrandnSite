import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css"; // Import your CSS file here

const TermsAndConditions = () => {
  return (
    <Container className="terms-conditions-container">
      <header>
        <h1>Terms and Conditions</h1>
      </header>

      <main>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Brand ID. These Terms and Conditions govern your use of
            our website and services. By accessing or using our site, you agree
            to comply with and be bound by these terms.
          </p>
        </section>

        <section>
          <h2>2. Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes and in a way
            that does not infringe on the rights of others or restrict or
            inhibit anyone else's use and enjoyment of the website.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of Brand ID or its content
            suppliers and is protected by intellectual property laws. You may
            not use, reproduce, or distribute any content without our express
            written permission.
          </p>
        </section>

        <section>
          <h2>4. User Content</h2>
          <p>
            Any content you submit to our site, including comments, feedback, or
            other materials, becomes our property. By submitting content, you
            grant us a perpetual, royalty-free, and worldwide license to use,
            reproduce, and display such content.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            Brand ID is not liable for any direct, indirect, incidental, or
            consequential damages arising from the use of or inability to use
            our website. We do not guarantee that our site will be free from
            errors or interruptions.
          </p>
        </section>

        <section>
          <h2>6. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content or practices of these external sites.
            You access them at your own risk.
          </p>
        </section>

        <section>
          <h2>7. Changes to the Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time. Your continued use of the website constitutes
            acceptance of any changes made.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <a href="mailto:support@brandid.com">support@brandid.com</a>.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Brand ID. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default TermsAndConditions;
