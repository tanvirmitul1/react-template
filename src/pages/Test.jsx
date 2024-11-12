import Counter from "./Counter";

const Test = () => {
  const object = { name: "mitul", home: "dhaka", data: false, hi: undefined };

  const trueObject = (object) => {
    let newObject = {};
    for (const key in object) {
      if (object[key]) {
        newObject[key] = object[key];
      }
    }
    return newObject;
  };

  const queryParam = new URLSearchParams(trueObject(object)).toString();
  return (
    <div>
      <Counter id={1} />
      <Counter id={2} />
      {queryParam}
    </div>
  );
};

export default Test;
