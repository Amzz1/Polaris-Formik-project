import {
    SkeletonPage,
    Layout,
    Card,
    SkeletonBodyText,
    TextContainer,
    SkeletonDisplayText,
  } from '@shopify/polaris';
  import React from 'react';
  
  function HomeSkeleton() {
    return (
      <SkeletonPage primaryAction>
        <Layout>
          <div className='sidebar-skeleton'>
          <Layout.Section>
          <Card subdued>
          <Card.Section>
                <SkeletonBodyText lines={2} />
          </Card.Section>
          <Card.Section>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={3} />
                </TextContainer>
          </Card.Section>
          
          <Card.Section>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={3} />
                </TextContainer>
          </Card.Section>
          
          <Card.Section>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={3} />
                </TextContainer>
          </Card.Section>
          
          <Card.Section>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={3} />
                </TextContainer>
          </Card.Section>
          
        </Card>
     </Layout.Section>
     </div>
          <Layout.Section secondary>
            <div className='sumit-section-skeleton'>
            <Card>
              <Card.Section>
                <TextContainer>
                <SkeletonBodyText lines={6} />

                  <SkeletonDisplayText size="small" />
                  <SkeletonDisplayText size="small" />
                </TextContainer>
              </Card.Section>
              
            </Card>
            </div>
            <div className='recent-tasks-skeleton'>
            <Card subdued>
              <Card.Section>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText lines={10} />
                </TextContainer>
              </Card.Section>
              
            </Card>
            </div>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }
  export default HomeSkeleton;