import { Page, DataTable } from "@shopify/polaris";
import { useGlobalContext } from "../context";
import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
} from "@shopify/polaris";
import useShowSkeleton from '../useShowSkeleton'

function RecentTasks() {
  const { row } = useGlobalContext();
  const [showSkeleton] = useShowSkeleton()

  if(showSkeleton){
    return(
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
    )
  }else{
  return (
    <div className="task-wrap">
    <Page>
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "text",
            "text",
            "text",
            "text",
          ]}
          headings={[
            "Type",
           <div className="task-id-title">Task ID</div> ,
            "Task Name",
            "Status",
            "Deliverable",
            "Closed",
          ]}
          rows={row}
        />
      </Card>
    </Page>
    </div>
  );
        }
}
export default RecentTasks;
