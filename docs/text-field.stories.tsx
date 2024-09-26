import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../src/text-field";

const meta = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
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
  args: {},
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
  args: {},
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
  args: {},
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
  args: {},
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
