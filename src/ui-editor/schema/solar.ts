/* eslint-disable import/extensions */
import { secondaryInfoSchema, getBaseMainConfigSchema } from "./_schema-base";
import localize from "../../localize/localize";

const mainSchema = {
  ...getBaseMainConfigSchema(),
  schema: [
    ...getBaseMainConfigSchema().schema,
    {
      name: "color_value",
      label: "Color Value",
      selector: { boolean: {} },
    },
    {
      name: "color_icon",
      label: "Color Icon",
      selector: { boolean: {} },
    },
    {
      name: "display_zero_state",
      label: "Display State When Zero?",
      selector: { boolean: {} },
    },
    {
      name: "display_zero_tolerance",
      label: "Display Zero Tolerance",
      selector: { number: { mode: "box", min: 0, max: 1000000, step: 0.1 } },
    },
    {
      name: "use_metadata",
      label: "Use Metadata",
      selector: { boolean: {} },
    },
  ],
};

export const solarSchema = [
  {
    name: "entity",
    selector: { entity: {} },
  },
  mainSchema,
  {
    name: "color",
    label: "Color",
    selector: { color_rgb: {} },
  },
  {
    title: localize("editor.secondary_info"),
    name: "secondary_info",
    type: "expandable",
    schema: secondaryInfoSchema,
  },
] as const;
