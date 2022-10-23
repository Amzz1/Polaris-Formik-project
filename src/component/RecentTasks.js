import {Page, Card, DataTable} from '@shopify/polaris';
import { useGlobalContext } from '../context';

 function RecentTasks() {
  
  const {row} = useGlobalContext()

  return (
    
    <Page >

      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'text',
            'text',
            'text',
            'text'
          ]}
          headings={[
            'Type',
            'Task ID',
            'Task Name',
            'Status',
            'Deliverable',
            'Closed',
          ]}
          rows={row }
        />
      </Card>
    </Page>
  );
}
export default RecentTasks