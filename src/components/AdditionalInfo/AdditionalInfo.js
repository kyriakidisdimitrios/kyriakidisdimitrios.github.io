import React from 'react';
import './AdditionalInfo.css';

const AdditionalInfo = () => {
    return (
        <div className="additional-info">
            <div className="left-content">
                <div className="section">
                    <h3>Language Skills</h3>
                    <p>Greek: Native proficiency</p>
                    <p>English: Full professional proficiency</p>
                </div>
            </div>
            <div className="middle-content">
                <div className="section">
                    <h3>Open Source Contributions</h3>
                    <p>
                        Contributed as a web developer for Browser IO Game, focusing on
                        developing and maintaining a popular gaming interface for Agar.io
                        on GitHub (github.com/jimboy3100). Achieved a peak of 800 daily
                        active users, facilitating an engaging experience for a community
                        of 150,000 users over six years.
                    </p>
                </div>
            </div>
            <div className="right-content">
                <div className="section">
                    <h3>Personal Information</h3>
                    <p>
                        Dual citizen of Greece and the United States, currently residing in
                        Ireland
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
