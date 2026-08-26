import {Calendar, createCalendar, destroyCalendar, TimeGrid} from '@event-calendar/core';
// Import CSS if your build tool supports it
import '@event-calendar/core/index.css';

const calendar = document.querySelector('#ec');

if (!calendar) {
    throw new Error('Calendar element not found!');
}

let ec = createCalendar(
    // HTML element the calendar will be mounted to
    //document.getElementById('ec'),
    calendar,
    // Array of plugins
    [TimeGrid],
    // Options object
    {
        view: 'timeGridWeek',
        events: [
            // your list of events
        ]
    }
);

// If you later need to destroy the calendar then use
destroyCalendar(ec);