import React from 'react';

const Blogs = () => {
  return (
    <div className="px-2 lg:px-20">
      <h1 className="text-center text-3xl mt-5">Question & Answer</h1>
      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 1:</span> What is context
          API?
        </h2>
        <p className="my-4">
          <span className="text-gray-500">Answer:</span> Context API is a
          process to declare some data globally. If we send data through props
          to many components it becomes cumbursome and very hard to maintain.
          While storing data in context API is is considered as global data.
          Then we can call it from any component from anywhere. It prevents the
          prop dealing and help us to maintain the code.
        </p>
        <hr />
      </div>

      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 2:</span> What is semantic
          tags?
        </h2>
        <p className="my-4">
          <span className="text-gray-500">Answer:</span> Semantic tags are some
          meaningful tags which we can use and it makes the HTML code more
          readable. It describes the meaning of the code we are writing inside
          the tag. It helps the browser and the developer the meaning of the
          code inside the tag and makes is easily understandable. <br />
          Example: nav, article, aside, footer, details, header, main.
        </p>
        <hr />
      </div>

      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 3:</span> Differences between
          inline, block and inline-block elements?
        </h2>
        <p className="my-4 text-gray-500">Answer:</p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 mx-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Inline
                </th>
                <th scope="col" className="px-6 py-3">
                  Block
                </th>
                <th scope="col" className="px-6 py-3">
                  Inline Block
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Default width is width of it's container
                </th>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">No</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Nearby element react to vertical margin
                </th>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">Yes</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Default width is the width of it's container.
                </th>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
