import { useState } from "react";
import { User } from "@/types/user.types";
import "./UserTabs.scss";

interface UserTabsProps {
  user: User;
}

type TabType = "info" | "location" | "login";

export const UserTabs = ({ user }: UserTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("info");

  const tabs = [
    { id: "info" as TabType, label: "Info" },
    { id: "location" as TabType, label: "Location" },
    { id: "login" as TabType, label: "Login" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="tab-content">
            <div className="detail-row">
              <span className="detail-label">First Name</span>
              <span className="detail-value">{user.name.first}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Last Name</span>
              <span className="detail-value">{user.name.last}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Title</span>
              <span className="detail-value">{user.name.title}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date</span>
              <span className="detail-value">
                {new Date(user.dob.date).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Age</span>
              <span className="detail-value">{user.dob.age}</span>
            </div>
          </div>
        );

      case "location":
        return (
          <div className="tab-content">
            <div className="detail-row">
              <span className="detail-label">Street</span>
              <span className="detail-value">
                {user.location.street.name}, {user.location.street.number}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">City</span>
              <span className="detail-value">{user.location.city}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">State</span>
              <span className="detail-value">{user.location.state}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Country</span>
              <span className="detail-value">{user.location.country}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Postcode</span>
              <span className="detail-value">{user.location.postcode}</span>
            </div>
          </div>
        );

      case "login":
        return (
          <div className="tab-content">
            <div className="detail-row">
              <span className="detail-label">UUID</span>
              <span className="detail-value">{user.login.uuid}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Username</span>
              <span className="detail-value">{user.login.username}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{user.phone}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="user-tabs">
      <div className="user-tabs__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`user-tabs__tab ${
              activeTab === tab.id ? "user-tabs__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="user-tabs__content">{renderTabContent()}</div>
    </div>
  );
};
