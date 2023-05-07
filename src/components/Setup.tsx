export default function Setup() {
  return (
    <>
      <div className="flex flex-col w-full mt-6">
        <div className="div">
          <h1 className="text-6xl text-navy-700 dark:text-white">Setup</h1>
        </div>

        <label className=" text-navy-700 block mb-2 text-sm font-medium mt-4 dark:text-white">
          Enter your API KEY
        </label>
        <div className="flex flex-row">
          <button className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            3.5
          </button>
          <input
            list="GPT-versions"
            type="text"
            id="email-address-icon"
            className=" ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-9/12  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="API key"
          />
          <button
            type="button"
            className="ml-5 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-navy-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          >
            Submit
          </button>
        </div>
        <div>
          <h1 className="text-1xl mt-5 text-navy-700 dark:text-white">Keyboard Shortcut</h1>
          <button
            type="button"
            className="mt-1 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-navy-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          >
            Ctrl+Alt+T
          </button>
        </div>
      </div>
    </>
  );
}
