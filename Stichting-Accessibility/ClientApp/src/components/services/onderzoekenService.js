// Assuming you have a service to fetch onderzoeken data
// Create a service (e.g., OnderzoekenService.js) to handle data fetching.

// OnderzoekenService.js
const onderzoekenData = [
    { id: 1, title: 'Onderzoek 1', date: '2023-01-01', status: 'In Uitvoering' },
    { id: 2, title: 'Onderzoek 2', date: '2023-02-15', status: 'Voltooid' },
    { id: 3, title: 'Onderzoek 3', date: '2022-09-26', status: 'In Uitvoering' },
    { id: 4, title: 'Onderzoek 4', date: '2023-04-13', status: 'In Uitvoering' },
    { id: 5, title: 'Onderzoek 5', date: '2021-01-01', status: 'Voltooid' },
    { id: 6, title: 'Onderzoek 6', date: '2023-11-30', status: 'Voltooid' },
    // Add more onderzoeken as needed
];

export const fetchOnderzoeken = () => {
    return new Promise((resolve) => {
        // Simulating an asynchronous fetch
        setTimeout(() => {
            resolve(onderzoekenData);
        }, 3000);
    });
};
