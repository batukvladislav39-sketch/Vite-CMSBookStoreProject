import { DashboardData } from "./types";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function fetchDashboardData(): Promise<DashboardData> | null{
    try {
        const res = await fetch(`${API_URL}/api/globals/dashboard`);

        if (!res.ok) {
            throw new Error(`An error has occured. Status: ${res.status}`)
        }

        const data: DashboardData = await res.json();

        return data;

    } catch(err) {
        console.log(`Error: ${err}`);

        return null;
    }
}
