import '@shopify/polaris/build/esm/styles.css';

import Home from './component/Home';
function App() {
  
  return (
    <div className="App">

  {/* <RecentTasks/>
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
 
    <FormContact/> */}
    <Home/>
    </div>
  );
}

export default App;
