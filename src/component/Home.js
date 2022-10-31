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
  StatusActiveMajor,
  CustomerPlusMajor,
  GiftCardMajor,
  CirclePlusOutlineMinor,
  NotificationMajor,
} from "@shopify/polaris-icons";
import { useState, useCallback, useRef } from "react";
import SubmitSection from "./SubmitSection";
import {OrdersMinor } from "@shopify/polaris-icons";
import { useLocation } from "react-router-dom";
import {NoteMinor,ToggleMinor,ArchiveMinor,InviteMinor,QuestionMarkInverseMinor,SettingsMajor} from "@shopify/polaris-icons";
function Home() {
  const location = useLocation();
  const skipToContentRef = useRef(null);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );


  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

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

  const navigationMarkup = (
    <Frame>
       <Navigation location={location.pathname}>
      
      <Navigation.Section
        items={[
          {
            url: "/home",
            label: "Home",
            icon: HomeMajor,
          },
          {
            url: "/task",
            label: "Task Catalog",
            icon: NoteMinor,
            badge: "46",
          },
        ]}
      />
      
      <div className="side-bar-active"> 
        <Navigation.Section
          title="MY PROJECTS"
          items={[
            {
              url: "/active",
              label: "Active",
              icon: ToggleMinor,
              badge: "12",
              
            },
            {
              url: "/completed",
              label: "Completed",
              icon: StatusActiveMajor,
            },
            {
              url: "/closed",
              label: "Closed",
              icon: ArchiveMinor,
            },
          ]}
          action={{
            accessibilityLabel: "Add my projects",
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
      </div>
      <div className="side-bar-subscribe">
        <Navigation.Section
          title="MY PLAN"
          items={[
            {
              url: "/subscribe",
              label: "Subscribe",
              icon: OrdersMinor,
              badge: "Sale 40%",
            },
          ]}
        />
      </div>
      <div className="side-bar-more">
        <Navigation.Section
          title="MORE"
          items={[
            {
              url: "/member",
              label: "Member Peaks",
              icon: GiftCardMajor,
            },
            {
              url: "/invite",
              label: "Invite Friends",
              icon: CustomerPlusMajor,
              badge: "Earn $10",
            },
            {
              url: "/contact",
              label: "Contact Us",
              icon: InviteMinor,
            },
            {
              url: "/faq",
              label: "FAQ",
              icon: QuestionMarkInverseMinor,
            },
          ]}
        />
      </div>
      <div className="nav-settings">
        <Navigation.Section
          items={[
            {
              url: "/settings",
              label: "Settings",
              icon: SettingsMajor,
            },
          ]}
        />
      </div>
    </Navigation>
    </Frame>
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    url: "http://jadedpixel.com",
    accessibilityLabel: "Jaded Pixel",
  };
  // if (showSkeleton) {
  //   return <HomeSkeleton />;
  // } else {
    return (
      <div style={{ height: "500px" }}>
        <AppProvider
          i18n={{
            Polaris: {
              Avatar: {
                label: "Avatar",
                labelWithInitials: "Avatar with initials {initials}",
              },
              ContextualSaveBar: {
                save: "Save",
                discard: "Discard",
              },
              TextField: {
                characterCount: "{count} characters",
              },
              TopBar: {
                toggleMenuLabel: "Toggle menu",

                SearchField: {
                  clearButtonLabel: "Clear",
                  search: "Search",
                },
              },
              Modal: {
                iFrameTitle: "body markup",
              },
              Frame: {
                skipToContent: "Skip to content",
                navigationLabel: "Navigation",
                Navigation: {
                  closeMobileNavigationLabel: "Close navigation",
                },
              },
            },
          }}
        >
          <Frame
            logo={logo}
            topBar={topBarMarkup}
            navigation={navigationMarkup}
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
            skipToContentTarget={skipToContentRef.current}
          >
            <div className="summit-wrap">
            <SubmitSection />
            </div>
          </Frame>
        </AppProvider>
      </div>
    );
  }

export default Home;
