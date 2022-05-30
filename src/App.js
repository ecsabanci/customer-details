import './App.scss';
import CustomerSection from './components/CustomerSection/CustomerSection';

function App() {
  return (
    <div className='App'>
      <main>
        <header className='App-header my-5'>
          <h1>Customer Details</h1>
        </header>
        <div className='container mb-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-12'>
              <CustomerSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
