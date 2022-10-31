import {
  AppProvider,
  Frame,
  Navigation,
  TopBar,
  Icon,
  TextStyle,
  Button,
} from "@shopify/polaris";

import {
  HomeMajor,
  AppsMajor,
  StatusActiveMajor,
  ClipboardMinor,
  ArchiveMajor,
  QuestionMarkMajor,
  CustomerPlusMajor,
  GiftCardMajor,
  EmailMajor,
  DiscountsMajor,
  CirclePlusOutlineMinor,
  NotificationMajor,
} from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { useGlobalContext } from "../context";

const toggleUserMenuActive = useCallback(
  () => setUserMenuActive((userMenuActive) => !userMenuActive),
  []
);
const userMenuActions = [
  {
    items: [{ content: "Community forums" }],
  },
];
const toggleMobileNavigationActive = useCallback(
  () =>
    setMobileNavigationActive(
      (mobileNavigationActive) => !mobileNavigationActive
    ),
  []
);
const userMenuMarkup = (
  <div className="header-icon-container">
    <div style={{ display: "flex" }}>
      <div className="header-credits content-fit">Available credits:4</div>
      <Icon source={CirclePlusOutlineMinor} color="base" />
    </div>
    <Button>Submit a new task</Button>
    <Icon source={NotificationMajor} color="base" />
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Store name 1"
      detail={<TextStyle variation="positive">Subscribe now</TextStyle>}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  </div>
);
const topBarMarkup = (
  <TopBar
    showNavigationToggle
    userMenu={userMenuMarkup}
    onNavigationToggle={toggleMobileNavigationActive}
  />
);
export default topBarMarkup;
