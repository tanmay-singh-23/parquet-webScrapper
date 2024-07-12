** Parquet Data Application **


** Description **

The Parquet Data Application is a web-based tool for querying and displaying taxi trip data stored in a MongoDB database. It provides a user-friendly interface to fetch and display data based on various parameters such as license number, dispatch number, date, location IDs, trip metrics, and financial details using Node.js, Express.js for the backend, and HTML, CSS, JavaScript for the frontend.



** Technologies Used **

•	Frontend: HTML, CSS, JavaScript

•	Backend: Node.js, Express.js

•	Database: MongoDB (with Mongoose)



** Project Workflow **

1. Data Acquisition

•	Web Scraping with BeautifulSoup: Utilized BeautifulSoup to scrape data from a specified website to download all Parquet files from February and March 2019 using python and then converted the data to dataFrame to display the data using panda.

2. Data Storage

•	MongoDB Database: Stored the scraped data into a MongoDB database named parquetDB. Each record corresponds to a taxi trip with detailed attributes like license numbers, trip metrics, and financial details.

3. Backend Development
   
•	Node.js and Express.js API: Developed a RESTful API using Node.js and Express.js to serve as the backend. This API provides endpoints to fetch and filter data stored in MongoDB based on user-defined criteria.

4. Frontend Implementation
   
•	HTML, CSS, and JavaScript: Implemented a frontend interface using HTML for structure, CSS for styling, and JavaScript for interactivity. The frontend allows users to select various filters (e.g., by license number, date, location IDs) and display the queried data in an interactive table format.

#FETCH ALL DATA IMAGE

![ALL-DATA](https://github.com/user-attachments/assets/24a2019d-305a-41ce-94c6-47b4daa52151)




** Credits **

•	This application was developed by Tanmay Singh and Ojasvi Yadav.


