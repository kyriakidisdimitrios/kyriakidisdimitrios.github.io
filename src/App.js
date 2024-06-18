import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CollapsibleSection from './components/CollapsibleSection/CollapsibleSection';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo'; // Import AdditionalInfo component



function App() {
    return (
        <div className="App">
            <Header />
            <CollapsibleSection title="Summary">
                <Summary />
            </CollapsibleSection>
            <CollapsibleSection title="Skills">
                <Skills />
            </CollapsibleSection>
            <CollapsibleSection title="Work Experience">
                <WorkExperience />
            </CollapsibleSection>
            <CollapsibleSection title="Education">
                <Education />
            </CollapsibleSection>
            <CollapsibleSection title="Additional Information">
                <AdditionalInfo />
            </CollapsibleSection>
        </div>
    );
}

export default App;
