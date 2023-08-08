import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, QuranLearning, ContactPage, Ijazah, About, Recitation, Memorization, Fees, Islamic, Arabic } from './Pages/index';
import { ContactScroll } from './othercomponents';
import './App.css';


function App() {
    return(
        <div className='app'>
            <Router basename={'/Nour-Al-Quran'}>
                <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />}/>
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/quran-courses' element={<QuranLearning />} />
                        <Route path='/quran-courses/recitation' element={<Recitation />} />
                        <Route path='/quran-courses/memorization' element={<Memorization />} />
                        <Route path='/quran-courses/ijazah' element={<Ijazah />} />
                        <Route path='/fees' element={<Fees />} />
                        <Route path='/islamic' element={<Islamic />} />
                        <Route path='/arabic' element={<Arabic />} />
                    </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
