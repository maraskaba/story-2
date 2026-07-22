import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Botón primario", variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Botón secundario", variant: "secondary" },
};