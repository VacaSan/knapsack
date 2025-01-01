import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
} from "../src/button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "Displays a button or a component that looks like a button.",
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

const BookmarkIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Edit profile",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Edit profile",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete user",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Delete user",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <BookmarkIcon />
      Bookmark
    </Button>
  ),
};

const sizes: ButtonSize[] = ["sm", "md", "lg"];

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          Edit profile
        </Button>
      ))}
    </div>
  ),
};

const variants: ButtonVariant[] = ["primary", "secondary", "danger", "ghost"];

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-2">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          Edit profile
        </Button>
      ))}
    </div>
  ),
};
