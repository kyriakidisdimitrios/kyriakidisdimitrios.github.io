import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CollapsibleSection from './components/CollapsibleSection';
import Summary from './components/Summary';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import AdditionalInfo from './components/AdditionalInfo';

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
