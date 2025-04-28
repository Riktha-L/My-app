const fruits=[
  "apple",
  "banana",
  "orange",
  "grape",
];
function DisplayFruits() {
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default DisplayFruits;