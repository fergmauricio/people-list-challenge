import type { Meta, StoryObj } from "@storybook/react";
import { SearchHeader } from "./SearchHeader";

const meta = {
  title: "User/SearchHeader",
  component: SearchHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchTerm: "",
    onSearchChange: (value) => console.log("Search:", value),
  },
};

export const WithResults: Story = {
  args: {
    searchTerm: "Maurício",
    onSearchChange: (value) => console.log("Search:", value),
    resultsCount: 5,
  },
};

export const NoResults: Story = {
  args: {
    searchTerm: "xyz",
    onSearchChange: (value) => console.log("Search:", value),
    resultsCount: 0,
  },
};

export const Loading: Story = {
  args: {
    searchTerm: "Maurício",
    onSearchChange: (value) => console.log("Search:", value),
    isLoading: true,
  },
};

export const EmptySearch: Story = {
  args: {
    searchTerm: "",
    onSearchChange: (value) => console.log("Search:", value),
    resultsCount: 0,
  },
};
