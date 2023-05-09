type ContactEvent = {
  action: "submit_form";
  category: "contact";
};

type ClickEvent = {
  action: "click";
  category: "other";
};

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>;
  value?: string;
};
