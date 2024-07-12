// // script.js

// async function fetchData(endpoint) {
//     try {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         const tableBody = document.getElementById('data-body');
//         tableBody.innerHTML = '';
//         data.forEach(item => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//           <td>${item.hvfhs_license_num}</td>
//           <td>${item.dispatching_base_num}</td>
//           <td>${item.originating_base_num}</td>
//           <td>${new Date(item.request_datetime).toLocaleString()}</td>
//           <td>${new Date(item.pickup_datetime).toLocaleString()}</td>
//           <td>${new Date(item.dropoff_datetime).toLocaleString()}</td>
//           <td>${item.PULocationID}</td>
//           <td>${item.DOLocationID}</td>
//           <td>${item.trip_miles}</td>
//           <td>${item.base_passenger_fare}</td>
//         `;
//             tableBody.appendChild(row);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// function showAllData() {
//     fetchData('/data');
// }

// function promptInput(type) {
//     const value = prompt(`Enter ${type} value:`);
//     if (value) {
//         const endpoint = `/data/${type}/${value}`;
//         fetchData(endpoint);
//     }
// }

// function promptDateRange() {
//     const startDate = prompt("Enter Start Date (YYYY-MM-DD):");
//     const endDate = prompt("Enter End Date (YYYY-MM-DD):");
//     if (startDate && endDate) {
//         const endpoint = `/data/daterange/${startDate}/${endDate}`;
//         fetchData(endpoint);
//     }
// }
