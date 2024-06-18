import React, { useState } from 'react';
import './CollapsibleSection.css';

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible-section">
            <button className="collapsible-header" onClick={toggleSection}>
                {title}
            </button>
            <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default CollapsibleSection;
