/* eslint-disable react/prop-types */

import Button from "./button";

export default function AlertScreen({ dispatch, setDialog }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Hello Champ!</h3>
          <p className="text-gray-600 mt-2">
            Are you sure you want to end the quiz?
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-all"
            onClick={() => {
              dispatch({ type: 'finish' });
              setDialog(false);
            }}
          >
            Yes
          </Button>
          <Button
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all"
            onClick={() => setDialog(false)}
          >
            No
          </Button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}
