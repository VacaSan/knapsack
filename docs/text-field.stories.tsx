import type { Meta, StoryObj } from "@storybook/react";

import { TextField, type TextFieldSize } from "../src/text-field";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle:
        "Captures user input with an optional slot for buttons and icons.",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const SearchIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

export const Basic: Story = {
  render: () => <TextField.Input placeholder="Search the docs..." />,
};

export const WithLeadingIcon: Story = {
  render: () => (
    <TextField>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Input placeholder="Search the docs..." />
    </TextField>
  ),
};

export const WithTrailingIcon: Story = {
  render: () => (
    <TextField>
      <TextField.Input placeholder="Search the docs..." />
      <TextField.Slot>
        <MoreHorizontalIcon />
      </TextField.Slot>
    </TextField>
  ),
};

export const WithBothSlotsOccupied: Story = {
  render: () => (
    <TextField>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Input placeholder="Search the docs..." />
      <TextField.Slot>
        <MoreHorizontalIcon />
      </TextField.Slot>
    </TextField>
  ),
};

const sizes: TextFieldSize[] = ["sm", "md", "lg"];

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      {sizes.map((size) => (
        <TextField.Input
          key={size}
          size={size}
          placeholder="Search the docs..."
        />
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextField>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Input disabled placeholder="Search the docs..." />
      <TextField.Slot>
        <MoreHorizontalIcon />
      </TextField.Slot>
    </TextField>
  ),
  args: {},
};

export const Invalid: Story = {
  render: () => (
    <TextField>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Input aria-invalid="true" placeholder="Search the docs..." />
      <TextField.Slot>
        <MoreHorizontalIcon />
      </TextField.Slot>
    </TextField>
  ),
  args: {},
};
