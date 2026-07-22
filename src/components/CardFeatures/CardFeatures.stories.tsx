import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardFeatures } from "./CardFeatures";

const meta: Meta<typeof CardFeatures> = {
  title: "Components/CardFeatures",
  component: CardFeatures,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardFeatures>;

export const Primary: Story = {
  args: { type: "primary", title: "Título", description: "Descripción del feature" },
};

export const Info: Story = {
  args: { type: "info", title: "Título", description: "Descripción del feature" },
};

export const Success: Story = {
  args: { type: "success", title: "Título", description: "Descripción del feature" },
};

export const Warning: Story = {
  args: { type: "warning", title: "Título", description: "Descripción del feature" },
};

export const Error: Story = {
  args: { type: "error", title: "Título", description: "Descripción del feature" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <CardFeatures type="primary" />
      <CardFeatures type="info" />
      <CardFeatures type="success" />
      <CardFeatures type="warning" />
      <CardFeatures type="error" />
    </div>
  ),
};
