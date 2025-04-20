import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full py-16 pt-30 bg-gray-100 text-center px-6">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
        Privacy Policy
      </h2>

      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
        At Morent, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you visit our website and use our services.
      </p>

      <div className="max-w-4xl mx-auto mb-16 text-left">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          1. Information We Collect
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>
            Technical Information: IP address, browser type, operating system,
            etc.
          </li>
          <li>
            Usage Data: Pages you visit, actions you take on our website, time
            spent on certain pages, etc.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          2. How We Use Your Information
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>Provide, personalize, and improve our services.</li>
          <li>Respond to your inquiries and customer support requests.</li>
          <li>Send marketing communications, if you have opted in.</li>
          <li>Analyze website usage and trends to enhance user experience.</li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          3. How We Protect Your Information
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We take reasonable measures to safeguard your personal information.
          These measures include:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>Encryption of sensitive data.</li>
          <li>
            Restricting access to personal information to authorized personnel
            only.
          </li>
          <li>
            Regular monitoring and updates of security protocols to protect
            against unauthorized access.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          4. Sharing Your Information
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We do not sell or rent your personal information to third parties.
          However, we may share your information in the following cases:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>
            With trusted third-party service providers who assist us in
            operating our website and business.
          </li>
          <li>
            If required by law, such as in response to a subpoena, court order,
            or legal process.
          </li>
          <li>
            In case of a business transfer, such as a merger, acquisition, or
            sale of assets.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          5. Your Rights and Choices
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-8">
          <li>
            Access: You can request a copy of the personal information we have
            about you.
          </li>
          <li>
            Correction: You can correct any inaccurate or incomplete information
            we have about you.
          </li>
          <li>
            Deletion: You can request the deletion of your personal data,
            subject to certain limitations.
          </li>
          <li>
            Opt-Out: You can opt out of marketing communications at any time.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          6. Cookies
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Our website uses cookies to enhance your user experience. Cookies are
          small data files stored on your device that help us remember your
          preferences and analyze usage patterns. You can manage your cookie
          settings through your browser settings.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          7. Changes to This Privacy Policy
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the "Last Updated" date at the bottom will
          be revised accordingly.
        </p>

        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          8. Contact Us
        </h3>
        <p className="text-lg text-gray-700 mb-4 ">
          If you have any questions about this Privacy Policy or wish to
          exercise your rights, please contact us at:
          <br />
          <a href="/contact" className="text-blue-600 underline ">
            Contact Us
          </a>
        </p>
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-gray-700">Last Updated: March 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
