import React, { useState } from 'react';

interface Contact {
    id: string;
    fname: string;
    lname: string;
    isActive: boolean;
}

interface UpdateContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    contact: Contact;
    onUpdate: (updatedContact: Contact) => void;
}

const UpdateContactModal: React.FC<UpdateContactModalProps> = ({ isOpen, onClose, contact, onUpdate }) => {
    const [updatedFirstName, setUpdatedFirstName] = useState(contact.fname);
    const [updatedLastName, setUpdatedLastName] = useState(contact.lname);
    const [updatedStatus, setUpdatedStatus] = useState(contact.isActive);

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedLastName(e.target.value);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedStatus(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedContact: Contact = {
            id: contact.id,
            fname: updatedFirstName,
            lname: updatedLastName,
            isActive: updatedStatus
        };
        onUpdate(updatedContact);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Update Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fname" className="block mb-1">First Name</label>
                                <input type="text" id="fname" value={updatedFirstName} onChange={handleFirstNameChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lname" className="block mb-1">Last Name</label>
                                <input type="text" id="lname" value={updatedLastName} onChange={handleLastNameChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="status" className="flex items-center">
                                    <input type="checkbox" id="status" checked={updatedStatus} onChange={handleStatusChange} className="mr-2" />
                                    Active
                                </label>
                            </div>
                            <div className="text-right">
                                <button type="button" className="text-gray-600 hover:text-gray-800 mr-4" onClick={onClose}>Cancel</button>
                                <button type="submit" className="bg-[#f75990] hover:bg-[#852b4a] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e482a5]">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateContactModal;
