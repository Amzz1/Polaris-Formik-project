import {
    SkeletonPage,
    Layout,
    Card,
    SkeletonBodyText,
    TextContainer,
    SkeletonDisplayText,
  } from '@shopify/polaris';

const FormContactSkeleton = () => {
    return (
        <div className='contact-form-skeleton'>
        <SkeletonPage primaryAction>
          <Layout>
            
            <Layout.Section>
              <div className='contact-form-skeleton__header'>
            <SkeletonDisplayText size="medium" />
            </div>
            <div className='contact-form-skeleton__inner'>
              <div className='contact-form-skeleton__inner-guideline'>
              <Card sectioned>
                <TextContainer>
                  
                  <SkeletonBodyText lines={4} />
                </TextContainer>
              </Card>
              </div>
              <Card sectioned>
                <TextContainer>
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="small" />
                 
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="small" />
                 
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                <SkeletonBodyText lines={1} />
                <SkeletonDisplayText size="small" />
                 
                </TextContainer>
                <div className='save-btn-skeleton'>
                <SkeletonDisplayText size="medium" />
                </div>
              </Card>
             
              </div>
            </Layout.Section>
          
          </Layout>
        </SkeletonPage>
        </div>
      );
}

export default FormContactSkeleton

