import {
    AppProvider,
    Frame,
    Navigation,
    TopBar,
    Icon,
    TextStyle,
    Button
  } from '@shopify/polaris';
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
    NotificationMajor
 
  } from '@shopify/polaris-icons';
  import {useState, useCallback, useRef} from 'react';
  import { useNavigate } from "react-router-dom";
  import RecentTasks from './RecentTasks';
  import HomeSkeleton from './HomeSkeleton';
  import { useGlobalContext } from '../context';
  import SubmitSection from './SubmitSection';

  function Home() {
    const navigate = useNavigate();
    const skipToContentRef = useRef(null);
    const {row, showSkeleton} = useGlobalContext()
    const [userMenuActive, setUserMenuActive] = useState(false);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
    const toggleUserMenuActive = useCallback(
      () => setUserMenuActive((userMenuActive) => !userMenuActive),
      [],
    );
    const toggleMobileNavigationActive = useCallback(
      () =>
        setMobileNavigationActive(
          (mobileNavigationActive) => !mobileNavigationActive,
        ),
      [],
    );
    const navigateToContactPage = useCallback(
      () => navigate('/contact'),
      [navigate]
    );
  
    const userMenuActions = [
      {
        items: [{content: 'Community forums'}],
      },
    ];
  
    const userMenuMarkup = (
      <div className='header-icon-container'>
            <div style={{display:'flex'}}><div className='header-credits content-fit'>Available credits:4</div><Icon source={CirclePlusOutlineMinor}color="base"/></div>
            <Button >Submit a new task</Button>
            <Icon source={NotificationMajor} color="base"/>
      <TopBar.UserMenu
        actions={userMenuActions}
        name="Store name 1"
        detail= {<TextStyle variation="positive">Subscribe now</TextStyle>}
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
      <Navigation location="/">
     
        <Navigation.Section
          separator
          title=""
          items={[
            {
              label: 'Home',
              icon: HomeMajor,
             
            },
            {
              label: 'Tasks Catalog',
              icon:  AppsMajor,
            
            },
          ]}
        />
         <Navigation.Section
        separator
        title="My project"
        items={[
          {
            label: 'Active',
            icon: StatusActiveMajor,
          },
          {
            label: 'Completed',
            icon: ClipboardMinor,
          },
          {
            label: 'Closed',
            icon: ArchiveMajor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title='My plan'
        items={[
          {
            label:'Subscribe',
           icon:DiscountsMajor,
          },
        ]}

      />
           <Navigation.Section
        separator
        title='More'
        items={[
          {
            label:'Member Perks',
            icon:GiftCardMajor,
          },
          {
            label:'Invite friends',
            icon:CustomerPlusMajor,
          },
          {
            label:'Contact us',
            icon:EmailMajor,
            onClick:navigateToContactPage
          },
          {
            label:'FAQ',
            icon:QuestionMarkMajor,
          },
        ]}

      />
      </Navigation>
       
    );

    const logo = {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    };
    if(showSkeleton){
      
      return <HomeSkeleton/>
    } else{
    return (
      <div style={{height: '500px'}}>
   
        <AppProvider
          i18n={{
            Polaris: {
              Avatar: {
                label: 'Avatar',
                labelWithInitials: 'Avatar with initials {initials}',
              },
              ContextualSaveBar: {
                save: 'Save',
                discard: 'Discard',
              },
              TextField: {
                characterCount: '{count} characters',
              },
              TopBar: {
                toggleMenuLabel: 'Toggle menu',
  
                SearchField: {
                  clearButtonLabel: 'Clear',
                  search: 'Search',
                },
              },
              Modal: {
                iFrameTitle: 'body markup',
              },
              Frame: {
                skipToContent: 'Skip to content',
                navigationLabel: 'Navigation',
                Navigation: {
                  closeMobileNavigationLabel: 'Close navigation',
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
            <SubmitSection/>
            <RecentTasks/>
          </Frame>
        </AppProvider>
      </div>
    );
          }
  }
  export default Home