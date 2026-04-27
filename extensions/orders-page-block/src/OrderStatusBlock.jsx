import '@shopify/ui-extensions/preact';
import { render } from 'preact';

export default async () => {
  render(<OrdersPageBlock />, document.body);
};

function OrdersPageBlock() {
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