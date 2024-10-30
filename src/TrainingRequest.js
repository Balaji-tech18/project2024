import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrainingRequest.css'; // Assuming you will create a CSS file for styles

const TrainingRequest = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [trainingType, setTrainingType] = useState('');
    const [offeredBy, setOfferedBy] = useState('');
    const [expectedStartDate, setExpectedStartDate] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [skillType, setSkillType] = useState('');
    const [managerId, setManagerId] = useState(''); // New state for Manager ID
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            trainingType,
            offeredBy,
            expectedStartDate,
            jobDescription,
            skillType,
            managerId, // Include Manager ID in the submission
        });
        // Reset form fields
        setFirstName('');
        setLastName('');
        setTrainingType('');
        setOfferedBy('');
        setExpectedStartDate(null);
        setJobDescription('');
        setSkillType('');
        setManagerId(''); // Reset Manager ID
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Training Request Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Manager ID:</label>
                    <input
                        type="text"
                        value={managerId}
                        onChange={(e) => setManagerId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Type Of Training Requested:</label>
                    <input
                        type="text"
                        value={trainingType}
                        onChange={(e) => setTrainingType(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Offered By (Organisation Name):</label>
                    <input
                        type="text"
                        value={offeredBy}
                        onChange={(e) => setOfferedBy(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Expected Start Date:</label>
                    <DatePicker
                        selected={expectedStartDate}
                        onChange={(date) => setExpectedStartDate(date)}
                        dateFormat="yyyy/MM/dd"
                        required
                        placeholderText="Select a date"
                    />
                </div>
                <div>
                    <label>Your Job Description:</label>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Types Of Skill This Training Covers:</label>
                    <select value={skillType} onChange={(e) => setSkillType(e.target.value)} required>
                        <option value="">Select...</option>
                        <option value="hard">Hard Skills</option>
                        <option value="soft">Soft Skills</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="button" onClick={() => {
                    setFirstName('');
                    setLastName('');
                    setTrainingType('');
                    setOfferedBy('');
                    setExpectedStartDate(null);
                    setJobDescription('');
                    setSkillType('');
                    setManagerId(''); // Reset Manager ID
                }}>
                    Create New Request
                </button>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default TrainingRequest;