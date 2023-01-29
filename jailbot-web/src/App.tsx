import './App.css';

import { SubmitButton } from './components/SubmitButton';
import { PageHeader } from './components/PageHeader';
import { ServerSelector } from './components/ServerSelector';
import { OffenseSelector } from './components/OffenseSelector';
import * as React from 'react';
function App() {
    const [selectedServer, setSelectedServer] = React.useState('');
    const serverList = ["option1", "option2"]
    const [selectedOffense, setSelectedOffense] = React.useState('');
    const offenseList = ["option3", "option4"]
    const [selectedUser, setSelectedUser] = React.useState('');
    const userList = ["option5", "option6"]

    return (
        <div>
            <PageHeader/>
            <ServerSelector
                serverList = {serverList}
                selectedServer = {selectedServer}
                setServer = {setSelectedServer}
            />
            <OffenseSelector
                offenseList = {offenseList}
                selectedOffense = {selectedOffense}
                setOffense = {setSelectedOffense}
                userList = {userList}
                selectedUser = {selectedUser}
                setUser = {setSelectedUser}
            />
            <SubmitButton
                selectedServer = {selectedServer}
                selectedUser = {selectedUser}
                selectedOffense = {selectedOffense}
            />
        </div>
    );
}

export default App;