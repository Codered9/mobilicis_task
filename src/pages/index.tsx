import { useState } from "react";

export default function Home() {
  const tableHeadings: string[] = [
    "First Name",
    "Last Name",
    "Email",
    "Gender",
    "Income",
    "City",
    "Car",
    "Quote",
    "Phone Price",
  ];

  const [data, setData] = useState<
    {
      id: number;
      first_name: String;
      last_name: String;
      email: String;
      gender: String;
      income: String;
      city: String;
      car: String;
      quote: String;
      phone_price: String;
    }[]
  >();

  const [queryFive, setQueryFive] = useState<boolean>(false);
  const [queryFiveData, setQueryFiveData] = useState<
    {
      _id: String;
      count: number;
      avgIncome: number;
    }[]
  >();
  async function fetchQuery(id: number) {
    let res, json;
    switch (id) {
      case 1:
        res = await fetch("/api/queryOne");
        setData([]);
        setQueryFive(false);
        json = await res.json();
        setData(json.data);
        break;
      case 2:
        res = await fetch("/api/queryTwo");
        setData([]);
        setQueryFive(false);
        json = await res.json();
        setData(json.data);
        break;
      case 3:
        res = await fetch("/api/queryThree");
        setData([]);
        setQueryFive(false);
        json = await res.json();
        setData(json.filteredData);
        break;
      case 4:
        res = await fetch("/api/queryFour");
        setData([]);
        setQueryFive(false);
        json = await res.json();
        setData(json.data);
        break;
      case 5:
        res = await fetch("/api/queryFive");
        setData([]);
        setQueryFive(true);
        json = await res.json()
        setQueryFiveData(json.data);
        break;
    }
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 justify-center my-4">

        <div className="flex gap-8 mx-auto">

        <p className="text-lg m-4 max-w-md">Income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</p>

        <button onClick={() => fetchQuery(1)} className="bg-white hover:bg-black text-black hover:text-white p-2 m-2 rounded-md font-semibold h-12 my-auto">Show Data</button>
        </div>


        <div className="flex gap-8 mx-auto">

        <p className="text-lg m-4 max-w-md">Male Users which have phone price greater than 10,000..</p>

        <button onClick={() => fetchQuery(2)} className="bg-white hover:bg-black text-black hover:text-white p-2 m-2 rounded-md font-semibold h-12 my-auto">Show Data</button>
        </div>


        <div className="flex gap-8 mx-auto">

        <p className="text-lg m-4 max-w-md">Last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</p>

        <button onClick={() => fetchQuery(3)} className="bg-white hover:bg-black text-black hover:text-white p-2 m-2 rounded-md font-semibold h-12 my-auto">Show Data</button>
        </div>


        <div className="flex gap-8 mx-auto">

        <p className="text-lg m-4 max-w-md">Have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</p>

        <button onClick={() => fetchQuery(4)} className="bg-white hover:bg-black text-black hover:text-white p-2 m-2 rounded-md font-semibold h-12 my-auto">Show Data</button>
        </div>


        <div className="flex gap-8 mx-auto">

        <p className="text-lg m-4 max-w-md">Top 10 cities which have the highest number of users and their average income.</p>

        <button onClick={() => fetchQuery(5)} className="bg-white hover:bg-black text-black hover:text-white p-2 m-2 rounded-md font-semibold h-12 my-auto">Show Data</button>
        </div>
      </div>

      <div className="min-w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {!queryFive &&
                tableHeadings.map((heading, index) => (
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    key={index}
                  >
                    {heading}
                  </th>
                ))}
            </tr>
            {queryFive && (
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Income
                </th>
              </tr>
            )}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {!queryFive &&
              data &&
              data.map((entry, index) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.first_name ? entry.first_name : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.last_name ? entry.last_name : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.email ? entry.email : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.gender ? entry.gender : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.income ? entry.income : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.city ? entry.city : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.car ? entry.car : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    {entry.quote ? entry.quote : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" key={index}>
                    ${entry.phone_price ? entry.phone_price : "-"}
                  </td>
                </tr>
              ))}
            {queryFive &&
              queryFiveData &&
              queryFiveData.map((entry, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{entry._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.count}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${entry.avgIncome.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
