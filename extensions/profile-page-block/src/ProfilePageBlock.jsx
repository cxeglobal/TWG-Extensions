import '@shopify/ui-extensions/preact';
import { render } from 'preact';
import { useState } from 'preact/hooks';

export default async () => {
  render(<ProfilePageBlock />, document.body);
};

function ProfilePageBlock() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <s-page heading="My Account">
      <s-stack direction="inline" gap="base">
         <s-button
            kind="secondary"
            href="shopify:customer-account/orders"
          >
            Orders
          </s-button>

          <s-button
            kind="secondary"
            href="shopify:customer-account/profile"
          >
            Profile
          </s-button>

          <s-button
            kind="secondary"
            href="extension:account-nav-link/account-nav-link-page?tab=invoices"
          >
            Invoices
          </s-button>

          <s-button
            kind="secondary"
            href="extension:account-nav-link/account-nav-link-page?tab=statements"
          >
            Statements
          </s-button>
        </s-stack>
      </s-page>
  );
}