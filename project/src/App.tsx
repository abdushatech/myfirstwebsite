import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '@/components/layout/navbar';
import { Home } from '@/pages/home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </Router>
  );
}

export default App;