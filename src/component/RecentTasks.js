import { Page, Card, DataTable } from "@shopify/polaris";
import { useGlobalContext } from "../context";
import RecentTaskSkeleton from './RecentTaskSkeleton'
import useShowSkeleton from '../useShowSkeleton'

function RecentTasks() {
  const { row } = useGlobalContext();
  const [showSkeleton] = useShowSkeleton()

  if(showSkeleton){
    return(
      <RecentTaskSkeleton/>
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
