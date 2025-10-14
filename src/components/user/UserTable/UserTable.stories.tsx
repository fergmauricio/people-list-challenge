import type { Meta, StoryObj } from "@storybook/react";
import { UserTable } from "./UserTable";
import { mockUsers } from "@/test/mockData";

const meta = {
  title: "User/UserTable",
  component: UserTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: mockUsers,
    onViewProfile: (user) => console.log("View profile:", user),
  },
};

export const Empty: Story = {
  args: {
    users: [],
    onViewProfile: (user) => console.log("View profile:", user),
  },
};

export const Loading: Story = {
  args: {
    users: [],
    isLoading: true,
    onViewProfile: (user) => console.log("View profile:", user),
  },
};
