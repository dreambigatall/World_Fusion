/* eslint-disable react/prop-types */


export default function Topic({ topic, setInputs, selected, setSelected }) {
  return (
    <div
      onClick={() => {
        setSelected(topic);
        setInputs((ps) => ({ ...ps, topic: topic }));
      }}
      className="mb-2"
    >
      <h3
        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-95 ${
          selected === topic
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-stone-300 text-gray-800 hover:bg-gray-300 m-7"
        }`}
      >
        {topic}
      </h3>
    </div>
  );
}
