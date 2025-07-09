
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmit?: () => void;
        }) => void;
      };
    };
  }
}

export {};
