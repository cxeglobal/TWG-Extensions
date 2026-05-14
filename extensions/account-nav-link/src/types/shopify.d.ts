declare namespace preact.JSX {
  interface IntrinsicElements {
    // Layout
    's-page': any;
    's-card': any;
    's-stack': any;
    's-divider': any;
     
    // Typography
    's-text': any;
    's-heading': any;
    's-link': any;

    // Actions
    's-button': any;

    // Forms
    's-text-field': any;

    's-section': any
    
    // Feedback
    's-banner': any;

    // Table
    's-table': any;
    's-table-row': any;
    's-table-header-cell': any;
    's-table-cell': any;
     's-grid': any;
     's-box' : any;
     's-query-container': any;
     's-grid-item': any;
     's-date-field': any;
  }
}

// in shopify.d.ts
interface SBox extends HTMLElement {
  display?: string;
}
declare namespace JSX {
  interface IntrinsicElements {
    's-box': Preact.JSX.HTMLAttributes<SBox> & {
      display?: string;
      padding?: string;
    };
  }
}