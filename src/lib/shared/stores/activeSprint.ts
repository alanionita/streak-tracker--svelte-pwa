import { browser } from '$app/environment';

import { writable } from 'svelte/store';

import { getISOWeek, previousMonday, getDay } from "date-fns";

export type SprintDay = {
    complete: boolean,
    date: Date,
    week: number,
    label: string
}

const stateLabel = "activeSprint"

const defaultValue = makeDefaultSprint(14);

let initialValue = defaultValue;

if (browser) {
    const localActiveSprint = window.localStorage.getItem(stateLabel)

    if (!localActiveSprint) {
        initialValue = defaultValue
    } else {
        initialValue = JSON.parse(localActiveSprint);
    }


}

const activeSprint = writable<SprintDay[]>(initialValue);

activeSprint.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem(stateLabel, JSON.stringify(value));

    }
});


function makeDefaultSprint(length: number = 14, start: Date = new Date(Date.now())): SprintDay[] {
    const startWeek: number = getISOWeek(start);
    const sprintStart: Date = previousMonday(start);
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return Array.from(Array(length)).map((day: SprintDay, index) => {
        const datePointer = new Date(sprintStart)
        datePointer.setDate(datePointer.getDate() + index)
        return ({
            complete: false,
            date: datePointer,
            week: index < 6 ? startWeek : startWeek + 1,
            label: dayLabels[getDay(datePointer)]
        }) as SprintDay
    })
}

export default activeSprint;