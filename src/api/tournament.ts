import { Tournament } from "../classes/tournament";

function getTournaments(): Promise<Tournament[]> {
    return fetch('/tournaments')
        .then()
}