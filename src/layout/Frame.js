import {
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
import SubmitSection from "../component/SubmitSection";
import {OrdersMinor } from "@shopify/polaris-icons";
import {  useLocation } from "react-router-dom";
import {NoteMinor,ToggleMinor,ArchiveMinor,InviteMinor,QuestionMarkInverseMinor,SettingsMajor} from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import RecentTasks from "../pages/RecentTasks";
import FormOnSubmitExample from '../pages/FormContact'
import {Routes,Route} from 'react-router-dom'
import TaskCatalog from '../pages/TaskCatalog'
import Subscribe from '../pages/Subscribe'
import Settings from '../pages/Settings'
import MemberPeaks from '../pages/MemberPeaks'
import InviteFriends from '../pages/InviteFriends'
import FormContact from '../pages/FormContact'
import FAQ from "../pages/FAQ";
import Completed from "../pages/Completed";
import Closed from "../pages/Closed";
import Active from "../pages/Active";
function AppFrame() {
  const navigate = useNavigate()
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
  const navigateToContactPage = useCallback(
    () => navigate('/contact'),
    [navigate]
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
              onClick:navigateToContactPage
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
  
    return (
      
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
            <Routes>
              <Route index element={<RecentTasks />} />
              <Route path="contact" element={<FormOnSubmitExample />} />
              <Route path='/home' element={<RecentTasks/>}/>
              <Route path='/task' element={<TaskCatalog/>}/>
              <Route path='/active' element={<Active/>}/>
              <Route path='/completed' element={<Completed/>}/>
              <Route path='/closed' element={<Closed/>}/>
              <Route path='/subscribe' element={<Subscribe/>}/>
              <Route path='/member' element={<MemberPeaks/>}/>
              <Route path='/invite' element={<InviteFriends/>}/>
              <Route path='/contact' element={<FormContact/>}/>
              <Route path='/faq' element={<FAQ/>}/>
             <Route path='/settings' element={<Settings/>}/>
            
          </Routes>
          </Frame>
        
    );
  }

export default AppFrame;
