import './App.css';

import * as React from 'react';


import { SubmitButton } from './components/SubmitButton';
import { PageHeader } from './components/PageHeader';
import { ServerSelector } from './components/ServerSelector';
import { OffenseSelector } from './components/OffenseSelector';
import { getOffenses, getRapsheet } from './services/bonkService/bonkServiceAccessor';

function App() {
    const [selectedServer, setSelectedServer] = React.useState('');
    const serverList = ["option1", "option2"]
    const [selectedOffense, setSelectedOffense] = React.useState('');
    const offenseList = ["option3", "option4"]
    const [selectedUser, setSelectedUser] = React.useState('');
    const userList = ["option5", "option6"]

    const submitOffense = () => {
        getOffenses()
        console.log("Server: " + selectedServer)
        console.log("User: " + selectedUser)
        console.log("Offense: " + selectedOffense)
        return
    }


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
                submitFunction = {submitOffense}
            />
        </div>
    );
}

export default App;