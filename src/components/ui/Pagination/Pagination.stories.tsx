import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed:", page),
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed:", page),
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed:", page),
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed:", page),
  },
};
