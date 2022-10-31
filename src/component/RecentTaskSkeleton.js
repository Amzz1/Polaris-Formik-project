import {
    SkeletonPage,
    Layout,
    Card,
    SkeletonBodyText,
    TextContainer,
    SkeletonDisplayText,
  } from "@shopify/polaris";

  const RecentTaskSkeleton = () => {
    return (
      <div className="skeleton-container recent-task-skeleton">
        <SkeletonPage primaryAction>
          <Layout>
            <Layout.Section>
              {/* <div className="skeleton-container__header">
                <SkeletonDisplayText size="medium" />
              </div> */}
              <div className="skeleton-container__inner">
                <div className="skeleton-container__inner-guideline">
                  <Card sectioned>
                    <TextContainer>
                      <SkeletonBodyText lines={3} />
                    </TextContainer>
                  </Card>
                </div>
                <div className="skeleton-container__inner-guideline">

                <Card sectioned>
                <TextContainer>
                      <SkeletonBodyText lines={3} />
                    </TextContainer>
                </Card>
                </div>
                <div className="skeleton-container__inner-guideline">

                <Card sectioned>
                <TextContainer>
                      <SkeletonBodyText lines={3} />
                    </TextContainer>
                </Card>
                </div>
                <div className="skeleton-container__inner-guideline">

                <Card sectioned>
                <TextContainer>
                      <SkeletonBodyText lines={3} />
                    </TextContainer>
                </Card>
                </div>
                <div className="skeleton-container__inner-guideline">

                <Card sectioned>
                <TextContainer>
                      <SkeletonBodyText lines={3} />
                    </TextContainer>
                </Card>
                </div>
             
              </div>
            </Layout.Section>
          </Layout>
        </SkeletonPage>
      </div>
    );
  };
  
  export default RecentTaskSkeleton;
  
