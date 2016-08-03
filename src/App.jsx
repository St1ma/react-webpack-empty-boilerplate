import React                       from 'react';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { DragDropContext }         from 'react-dnd';

import Buttons from 'ui-toolkit/lib/buttons';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                Hello TM!
                <Buttons.BF1
                    label = 'You did it!'
                />
            </div>
        );
    }
}

export default DragDropContext(TouchBackend)(App);
